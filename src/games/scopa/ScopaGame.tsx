// ── ScopaGame ────────────────────────────────────────────────────────────────
// Self-contained game component. Manages all game state internally.
// To embed in a different layout, just drop <ScopaGame /> anywhere.

import { useEffect, useReducer, useCallback, useRef, useState } from 'react';
import {
  ItalianCard as Card,
  createItalianDeck as buildDeck,
  shuffleDeck as shuffle,
  getCardDisplayLabel as cardLabel,
} from '../../cards/italianDeck';
import { CardView } from '../../cards/CardView';
import {
  findCaptureSets,
  getCapturableTableCards,
  pickCaptureContaining,
  computerMove,
  computeScore,
  ScoreBreakdown,
} from './scopaUtils';

// ── Types ────────────────────────────────────────────────────────────────────

type TurnPhase =
  | 'player-select'      // waiting for player to pick a card from hand
  | 'player-capture'     // player chose a card; now pick which table card to capture
  | 'player-no-capture'  // player chose a card with no captures — confirm place
  | 'computer-turn'      // computer is "thinking" (short timeout for UX)
  | 'game-over';

interface GameState {
  deck: Card[];
  playerHand: Card[];
  computerHand: Card[];
  tableCards: Card[];
  playerCaptures: Card[];
  computerCaptures: Card[];
  playerScope: number;      // number of scope (cleared table)
  computerScope: number;
  turnPhase: TurnPhase;
  pendingCard: Card | null; // card player has selected but not yet played
  capturableCards: Card[];  // table cards the player can capture with pendingCard
  message: string;
  lastMessage: string;      // keep previous message visible during computer turn
  lastCapturerIsPlayer: boolean | null; // who gets remaining table cards at end
  score: ScoreBreakdown | null;
}

type Action =
  | { type: 'NEW_GAME' }
  | { type: 'SELECT_HAND_CARD'; card: Card }
  | { type: 'CAPTURE_TABLE_CARD'; tableCard: Card }
  | { type: 'PLACE_ON_TABLE' }
  | { type: 'COMPUTER_PLAY' };

// ── Helpers ──────────────────────────────────────────────────────────────────

function dealInitial(): Pick<
  GameState,
  'deck' | 'playerHand' | 'computerHand' | 'tableCards'
> {
  const deck = shuffle(buildDeck());
  const playerHand = deck.splice(0, 3);
  const computerHand = deck.splice(0, 3);
  const tableCards = deck.splice(0, 4);
  return { deck, playerHand, computerHand, tableCards };
}

function freshGame(): GameState {
  const { deck, playerHand, computerHand, tableCards } = dealInitial();
  return {
    deck,
    playerHand,
    computerHand,
    tableCards,
    playerCaptures: [],
    computerCaptures: [],
    playerScope: 0,
    computerScope: 0,
    turnPhase: 'player-select',
    pendingCard: null,
    capturableCards: [],
    message: 'Select a card from your hand.',
    lastMessage: '',
    lastCapturerIsPlayer: null,
    score: null,
  };
}

/** Deal 3 cards to each player when hands run out. Returns null if deck empty. */
function dealNextRound(state: GameState): GameState | null {
  if (state.deck.length === 0) return null;
  const deck = [...state.deck];
  const playerHand = deck.splice(0, Math.min(3, deck.length));
  const computerHand = deck.splice(0, Math.min(3, deck.length));
  return { ...state, deck, playerHand, computerHand };
}

/** Called when hands AND deck are both empty — finish the game. */
function endGame(state: GameState): GameState {
  // Remaining table cards go to the last player who made a capture
  let playerCaptures = [...state.playerCaptures];
  let computerCaptures = [...state.computerCaptures];

  if (state.tableCards.length > 0) {
    if (state.lastCapturerIsPlayer === true) {
      playerCaptures = [...playerCaptures, ...state.tableCards];
    } else if (state.lastCapturerIsPlayer === false) {
      computerCaptures = [...computerCaptures, ...state.tableCards];
    }
    // If no one has captured yet (very rare), table cards are discarded
  }

  const score = computeScore(
    playerCaptures,
    computerCaptures,
    state.playerScope,
    state.computerScope,
  );

  return {
    ...state,
    tableCards: [],
    playerCaptures,
    computerCaptures,
    turnPhase: 'game-over',
    message:
      score.playerScore > score.computerScore
        ? `Game over — You win ${score.playerScore}–${score.computerScore}! 🎉`
        : score.computerScore > score.playerScore
        ? `Game over — Computer wins ${score.computerScore}–${score.playerScore}.`
        : `Game over — It's a tie (${score.playerScore}–${score.computerScore})!`,
    score,
  };
}

// ── Reducer ──────────────────────────────────────────────────────────────────

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {

    case 'NEW_GAME':
      return freshGame();

    // ── Player picks a card from their hand ──────────────────────────────────
    case 'SELECT_HAND_CARD': {
      // Allow re-selection (or cancel) at any point during the player's turn,
      // not only in 'player-select'. This fixes Cancel being a no-op during
      // 'player-no-capture', and lets the player switch cards mid-selection
      // without needing to Cancel first.
      const isPlayerTurn =
        state.turnPhase === 'player-select' ||
        state.turnPhase === 'player-capture' ||
        state.turnPhase === 'player-no-capture';
      if (!isPlayerTurn) return state;

      // Clicking the already-selected card deselects it (toggle off / cancel)
      if (state.pendingCard?.id === action.card.id) {
        return {
          ...state,
          pendingCard: null,
          capturableCards: [],
          turnPhase: 'player-select', // explicitly reset; was missing before
          message: 'Select a card from your hand.',
        };
      }

      // Selecting a new card — works even if another card was already pending
      const capturable = getCapturableTableCards(action.card, state.tableCards);

      if (capturable.length === 0) {
        return {
          ...state,
          pendingCard: action.card,
          capturableCards: [],
          turnPhase: 'player-no-capture',
          message: `No captures possible with "${cardLabel(action.card)}". Place it on the table?`,
        };
      }

      return {
        ...state,
        pendingCard: action.card,
        capturableCards: capturable,
        turnPhase: 'player-capture',
        message: `"${cardLabel(action.card)}" selected — click a highlighted table card to capture.`,
      };
    }

    // ── Player clicks a table card to complete a capture ─────────────────────
    case 'CAPTURE_TABLE_CARD': {
      if (state.turnPhase !== 'player-capture' || !state.pendingCard) return state;

      const captureSet = pickCaptureContaining(
        state.pendingCard,
        state.tableCards,
        action.tableCard,
      );
      if (!captureSet) return state; // clicked a non-capturable card — ignore

      const newTableCards = state.tableCards.filter(
        c => !captureSet.some(cc => cc.id === c.id),
      );
      const playerCaptures = [...state.playerCaptures, state.pendingCard, ...captureSet];
      const playerHand = state.playerHand.filter(c => c.id !== state.pendingCard!.id);

      const isScopa = newTableCards.length === 0;
      const playerScope = state.playerScope + (isScopa ? 1 : 0);

      const capturedNames = captureSet.map(cardLabel).join(', ');
      const scopaMsg = isScopa ? ' 🎊 SCOPA!' : '';
      const message = `You captured ${capturedNames} with "${cardLabel(state.pendingCard)}".${scopaMsg}`;

      const next: GameState = {
        ...state,
        playerHand,
        tableCards: newTableCards,
        playerCaptures,
        playerScope,
        pendingCard: null,
        capturableCards: [],
        lastCapturerIsPlayer: true,
        lastMessage: message,
        message: 'Computer is thinking…',
        turnPhase: 'computer-turn',
        score: null,
      };

      // Check if we need to deal or end
      if (playerHand.length === 0 && state.computerHand.length === 0) {
        if (state.deck.length === 0) return endGame(next);
        const dealt = dealNextRound(next);
        if (!dealt) return endGame(next);
        return { ...dealt, turnPhase: 'computer-turn', message: 'New cards dealt. Computer is thinking…' };
      }

      return next;
    }

    // ── Player places card on table (no captures available) ──────────────────
    case 'PLACE_ON_TABLE': {
      if (state.turnPhase !== 'player-no-capture' || !state.pendingCard) return state;

      const tableCards = [...state.tableCards, state.pendingCard];
      const playerHand = state.playerHand.filter(c => c.id !== state.pendingCard!.id);
      const message = `You placed "${cardLabel(state.pendingCard)}" on the table.`;

      const next: GameState = {
        ...state,
        playerHand,
        tableCards,
        pendingCard: null,
        capturableCards: [],
        lastMessage: message,
        message: 'Computer is thinking…',
        turnPhase: 'computer-turn',
        score: null,
      };

      if (playerHand.length === 0 && state.computerHand.length === 0) {
        if (state.deck.length === 0) return endGame(next);
        const dealt = dealNextRound(next);
        if (!dealt) return endGame(next);
        return { ...dealt, turnPhase: 'computer-turn', message: 'New cards dealt. Computer is thinking…' };
      }

      return next;
    }

    // ── Computer takes its turn (dispatched by useEffect after delay) ─────────
    case 'COMPUTER_PLAY': {
      if (state.turnPhase !== 'computer-turn' || state.computerHand.length === 0) {
        return state;
      }

      const move = computerMove(state.computerHand, state.tableCards);
      let computerCaptures = [...state.computerCaptures];
      let tableCards: Card[];
      let computerScope = state.computerScope;
      let lastCapturerIsPlayer = state.lastCapturerIsPlayer;
      let moveMsg: string;

      if (move.captured.length > 0) {
        tableCards = state.tableCards.filter(
          c => !move.captured.some(cc => cc.id === c.id),
        );
        computerCaptures = [...computerCaptures, move.played, ...move.captured];
        lastCapturerIsPlayer = false;
        const isScopa = tableCards.length === 0;
        computerScope += isScopa ? 1 : 0;
        const names = move.captured.map(cardLabel).join(', ');
        moveMsg = `Computer captured ${names} with "${cardLabel(move.played)}".${isScopa ? ' Computer scores a scopa!' : ''}`;
      } else {
        tableCards = [...state.tableCards, move.played];
        moveMsg = `Computer placed "${cardLabel(move.played)}" on the table.`;
      }

      const computerHand = state.computerHand.filter(c => c.id !== move.played.id);
      const fullMsg = `${state.lastMessage ? state.lastMessage + ' · ' : ''}${moveMsg}`;

      const next: GameState = {
        ...state,
        computerHand,
        tableCards,
        computerCaptures,
        computerScope,
        lastCapturerIsPlayer,
        message: fullMsg,
        turnPhase: 'player-select',
        score: null,
      };

      // Check deal / end
      if (computerHand.length === 0 && next.playerHand.length === 0) {
        if (state.deck.length === 0) return endGame(next);
        const dealt = dealNextRound(next);
        if (!dealt) return endGame(next);
        return { ...dealt, message: `${moveMsg} New cards dealt — your turn.` };
      }

      return { ...next, message: `${fullMsg} Your turn.` };
    }

    default:
      return state;
  }
}

// ── Main component ───────────────────────────────────────────────────────────

export default function ScopaGame() {
  const [state, dispatch] = useReducer(reducer, null, freshGame);
  const containerRef  = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync isFullscreen with the browser's actual state.
  // Handles both the button and the user pressing Escape natively.
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange',        onChange);
    document.addEventListener('webkitfullscreenchange',  onChange);
    return () => {
      document.removeEventListener('fullscreenchange',        onChange);
      document.removeEventListener('webkitfullscreenchange',  onChange);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      const req = el.requestFullscreen || (el as any).webkitRequestFullscreen;
      req?.call(el).catch(() => {});
    } else {
      const exit = document.exitFullscreen || (document as any).webkitExitFullscreen;
      exit?.call(document);
    }
  }, []);

  // Trigger computer turn after a short delay for better UX
  useEffect(() => {
    if (state.turnPhase !== 'computer-turn') return;
    const timer = setTimeout(() => dispatch({ type: 'COMPUTER_PLAY' }), 900);
    return () => clearTimeout(timer);
  }, [state.turnPhase, state.message]); // re-trigger if message changed (multi-deal chain)

  const handleHandCard = useCallback(
    (card: Card) => dispatch({ type: 'SELECT_HAND_CARD', card }),
    [],
  );
  const handleTableCard = useCallback(
    (card: Card) => dispatch({ type: 'CAPTURE_TABLE_CARD', tableCard: card }),
    [],
  );

  const capturableIds = new Set(state.capturableCards.map(c => c.id));
  const isPlayerTurn =
    state.turnPhase === 'player-select' ||
    state.turnPhase === 'player-capture' ||
    state.turnPhase === 'player-no-capture';

  // ── Capture-set check for each hand card (so player knows which cards can do something)
  const handCardCanCapture = (card: Card): boolean =>
    findCaptureSets(card, state.tableCards).length > 0;

  return (
    <div className={`sg${isFullscreen ? ' sg--fullscreen' : ''}`} ref={containerRef}>

      {/* ── Header row ─────────────────────────────────────────────────────── */}
      <div className="sg-topbar">
        <div className="sg-scores">
          <span>You: <strong>{state.score?.playerScore ?? '—'}</strong></span>
          <span>Computer: <strong>{state.score?.computerScore ?? '—'}</strong></span>
        </div>
        <div className="sg-topbar__actions">
          <button
            className="sg-btn sg-btn--fs"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? '⛶  Exit Fullscreen' : '⛶  Fullscreen'}
          </button>
          <button
            className="sg-btn sg-btn--new"
            onClick={() => dispatch({ type: 'NEW_GAME' })}
          >
            New Game
          </button>
        </div>
      </div>

      {/* ── Computer area ───────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--computer">
        <div className="sg-section__label">
          Computer
          <span className="sg-badge">{state.computerHand.length} cards in hand</span>
          <span className="sg-badge">Captured: {state.computerCaptures.length}</span>
          {state.computerScope > 0 && (
            <span className="sg-badge sg-badge--scope">
              {state.computerScope} scopa{state.computerScope > 1 ? 'e' : ''}
            </span>
          )}
        </div>
        <div className="sg-cards">
          {state.computerHand.map((_, i) => (
            <CardView key={i} faceDown />
          ))}
        </div>
      </div>

      {/* ── Table ───────────────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--table">
        <div className="sg-section__label">Table ({state.tableCards.length} cards)</div>
        <div className="sg-cards">
          {state.tableCards.length === 0 ? (
            <p className="sg-empty">Table is empty</p>
          ) : (
            state.tableCards.map(card => (
              <CardView
                key={card.id}
                card={card}
                highlighted={capturableIds.has(card.id)}
                onClick={
                  state.turnPhase === 'player-capture' && capturableIds.has(card.id)
                    ? () => handleTableCard(card)
                    : undefined
                }
              />
            ))
          )}
        </div>
      </div>

      {/* ── Message area ────────────────────────────────────────────────────── */}
      <div className={`sg-message ${state.turnPhase === 'computer-turn' ? 'sg-message--waiting' : ''}`}>
        {state.message}
      </div>

      {/* ── Place on table button ────────────────────────────────────────────── */}
      {state.turnPhase === 'player-no-capture' && (
        <div className="sg-action">
          <button
            className="sg-btn sg-btn--place"
            onClick={() => dispatch({ type: 'PLACE_ON_TABLE' })}
          >
            Place on table
          </button>
          <button
            className="sg-btn sg-btn--cancel"
            onClick={() =>
              dispatch({ type: 'SELECT_HAND_CARD', card: state.pendingCard! })
            }
          >
            Cancel
          </button>
        </div>
      )}

      {/* ── Player hand ─────────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--player">
        <div className="sg-section__label">
          Your hand
          <span className="sg-badge">Captured: {state.playerCaptures.length}</span>
          {state.playerScope > 0 && (
            <span className="sg-badge sg-badge--scope">
              {state.playerScope} scopa{state.playerScope > 1 ? 'e' : ''}
            </span>
          )}
        </div>
        <div className="sg-cards">
          {state.playerHand.map(card => (
            <CardView
              key={card.id}
              card={card}
              selected={state.pendingCard?.id === card.id}
              onClick={isPlayerTurn ? () => handleHandCard(card) : undefined}
              highlighted={
                state.turnPhase === 'player-select' && handCardCanCapture(card)
              }
            />
          ))}
        </div>
      </div>

      {/* ── Game-over score breakdown ─────────────────────────────────────────── */}
      {state.turnPhase === 'game-over' && state.score && (
        <div className="sg-gameover">
          <h3>Final Score</h3>
          <div className="sg-gameover__totals">
            <div>
              <strong>You</strong>
              <span className="sg-gameover__pts">{state.score.playerScore}</span>
            </div>
            <div className="sg-gameover__vs">vs</div>
            <div>
              <strong>Computer</strong>
              <span className="sg-gameover__pts">{state.score.computerScore}</span>
            </div>
          </div>
          <ul className="sg-gameover__details">
            {state.score.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <button
            className="sg-btn sg-btn--new"
            onClick={() => dispatch({ type: 'NEW_GAME' })}
          >
            Play again
          </button>
        </div>
      )}

      {/* ── Deck remaining (useful for game awareness) ───────────────────────── */}
      <div className="sg-deck-info">
        {state.deck.length > 0
          ? `${state.deck.length} cards remaining in deck`
          : 'Deck is empty'}
      </div>
    </div>
  );
}
