// ── BriscolaGame ─────────────────────────────────────────────────────────────
// Self-contained Briscola game component. Drop <BriscolaGame /> anywhere.
//
// Outer container reuses .sg CSS class (shared green-table styles).
// Briscola-specific UI elements (trump area, trick area) use .bg-* classes.

import { useReducer, useEffect, useCallback, useRef, useState } from 'react';
import {
  ItalianCard as Card,
  ItalianSuit,
  createItalianDeck,
  shuffleDeck,
  getCardDisplayLabel as cardLabel,
} from '../../cards/italianDeck';
import { CardView } from '../../cards/CardView';
import {
  playerWinsTrick,
  computerPickCard,
  countPoints,
  computeFinalScore,
  BriscolaScore,
} from './briscolaUtils';

// ── Types ────────────────────────────────────────────────────────────────────

type Phase =
  | 'player-lead'       // player picks their lead card
  | 'computer-respond'  // computer auto-responds after player led (~900ms)
  | 'computer-lead'     // computer auto-leads after winning a trick (~1200ms)
  | 'player-respond'    // player responds to computer's lead card
  | 'game-over';

interface GameState {
  deck:           Card[];        // draw pile; trump card sits at end until drawn
  playerHand:     Card[];
  computerHand:   Card[];
  trumpCard:      Card;          // the face-up briscola card (never changes)
  trumpSuit:      ItalianSuit;
  playerPlayed:   Card | null;   // current or last trick's player card (stays visible)
  computerPlayed: Card | null;   // current or last trick's computer card (stays visible)
  trickWinner:    'player' | 'computer' | null;
  playerPile:     Card[];        // captured cards
  computerPile:   Card[];
  phase:          Phase;
  message:        string;
  finalScore:     BriscolaScore | null;
}

type Action =
  | { type: 'NEW_GAME' }
  | { type: 'PLAYER_PLAY_CARD'; card: Card }
  | { type: 'COMPUTER_PLAY' };

// ── Helpers ──────────────────────────────────────────────────────────────────

function initDeal(): Pick<
  GameState,
  'deck' | 'playerHand' | 'computerHand' | 'trumpCard' | 'trumpSuit'
> {
  const full = shuffleDeck(createItalianDeck());
  const playerHand   = full.slice(0, 3);
  const computerHand = full.slice(3, 6);
  const trumpCard    = full[6];                        // revealed trump card
  const deck         = [...full.slice(7), trumpCard];  // trump drawn last (34 cards)
  return { deck, playerHand, computerHand, trumpCard, trumpSuit: trumpCard.suit };
}

function freshGame(): GameState {
  return {
    ...initDeal(),
    playerPlayed:   null,
    computerPlayed: null,
    trickWinner:    null,
    playerPile:     [],
    computerPile:   [],
    phase:          'player-lead',
    message:        'Select a card to lead the first trick.',
    finalScore:     null,
  };
}

/** Winner draws first, loser draws second. Returns updated hands + deck. */
function drawAfterTrick(
  playerHand:   Card[],
  computerHand: Card[],
  deck:         Card[],
  playerWon:    boolean,
): { playerHand: Card[]; computerHand: Card[]; deck: Card[] } {
  const d  = [...deck];
  const ph = [...playerHand];
  const ch = [...computerHand];

  if (d.length > 0) {
    const card = d.shift()!;
    if (playerWon) ph.push(card); else ch.push(card);
  }
  if (d.length > 0) {
    const card = d.shift()!;
    if (playerWon) ch.push(card); else ph.push(card);
  }

  return { playerHand: ph, computerHand: ch, deck: d };
}

/** Resolve a completed trick (both cards played). Mutates-by-spreading — pure. */
function resolveTrick(state: GameState, playerLed: boolean): GameState {
  const { playerPlayed, computerPlayed, trumpSuit } = state;
  if (!playerPlayed || !computerPlayed) return state;

  const pWins = playerWinsTrick(playerPlayed, computerPlayed, trumpSuit, playerLed);

  const trickCards   = [playerPlayed, computerPlayed];
  const playerPile   = pWins  ? [...state.playerPile,   ...trickCards] : state.playerPile;
  const computerPile = !pWins ? [...state.computerPile, ...trickCards] : state.computerPile;

  const drawn = drawAfterTrick(state.playerHand, state.computerHand, state.deck, pWins);

  // ── Game over? ──────────────────────────────────────────────────────────────
  if (
    drawn.playerHand.length   === 0 &&
    drawn.computerHand.length === 0 &&
    drawn.deck.length         === 0
  ) {
    const finalScore = computeFinalScore(playerPile, computerPile);
    const { playerPoints: pp, computerPoints: cp } = finalScore;
    const result =
      pp > cp ? `You win ${pp}–${cp}! 🎉` :
      cp > pp ? `Computer wins ${cp}–${pp}.` :
                `It's a tie (${pp} each)!`;
    return {
      ...state,
      ...drawn,
      playerPile,
      computerPile,
      trickWinner: pWins ? 'player' : 'computer',
      phase:       'game-over',
      finalScore,
      message:     `Game over — ${result}`,
    };
  }

  // ── Continue ────────────────────────────────────────────────────────────────
  const trickMsg = pWins
    ? `You won the trick! (${cardLabel(playerPlayed)} beats ${cardLabel(computerPlayed)})`
    : `Computer won the trick. (${cardLabel(computerPlayed)} beats ${cardLabel(playerPlayed)})`;

  return {
    ...state,
    ...drawn,
    playerPile,
    computerPile,
    trickWinner: pWins ? 'player' : 'computer',
    phase:   pWins ? 'player-lead' : 'computer-lead',
    message: pWins ? `${trickMsg} Your lead.` : `${trickMsg} Computer leads next.`,
  };
}

// ── Reducer ──────────────────────────────────────────────────────────────────

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {

    case 'NEW_GAME':
      return freshGame();

    // ── Player plays a card (either as leader or as responder) ───────────────
    case 'PLAYER_PLAY_CARD': {
      if (state.phase !== 'player-lead' && state.phase !== 'player-respond') return state;
      if (!state.playerHand.some(c => c.id === action.card.id)) return state;

      const playerHand  = state.playerHand.filter(c => c.id !== action.card.id);
      const playerPlayed = action.card;

      if (state.phase === 'player-lead') {
        // Player leads — computer will respond automatically
        return {
          ...state,
          playerHand,
          playerPlayed,
          computerPlayed: null,     // clear last trick's computer card
          trickWinner:    null,
          phase:          'computer-respond',
          message:        `You played ${cardLabel(action.card)}. Computer is responding…`,
        };
      }

      // player-respond: player answers computer's lead → resolve immediately
      return resolveTrick({ ...state, playerHand, playerPlayed }, false);
    }

    // ── Computer plays automatically (respond or lead) ───────────────────────
    case 'COMPUTER_PLAY': {
      if (state.computerHand.length === 0) return state;

      if (state.phase === 'computer-respond') {
        const computerCard = computerPickCard(state.computerHand);
        const computerHand = state.computerHand.filter(c => c.id !== computerCard.id);
        return resolveTrick({ ...state, computerHand, computerPlayed: computerCard }, true);
      }

      if (state.phase === 'computer-lead') {
        const computerCard = computerPickCard(state.computerHand);
        const computerHand = state.computerHand.filter(c => c.id !== computerCard.id);
        return {
          ...state,
          computerHand,
          computerPlayed: computerCard,
          playerPlayed:   null,       // clear last trick's player card
          trickWinner:    null,
          phase:          'player-respond',
          message:        `Computer played ${cardLabel(computerCard)}. Select a card to respond.`,
        };
      }

      return state;
    }

    default:
      return state;
  }
}

// ── Main component ───────────────────────────────────────────────────────────

export default function BriscolaGame() {
  const [state, dispatch] = useReducer(reducer, null, freshGame);
  const containerRef  = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync fullscreen state with browser
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange',       onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange',       onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      const req = el.requestFullscreen ?? (el as any).webkitRequestFullscreen;
      req?.call(el).catch(() => {});
    } else {
      const exit = document.exitFullscreen ?? (document as any).webkitExitFullscreen;
      exit?.call(document);
    }
  }, []);

  // Auto-trigger computer moves with a short delay for UX
  useEffect(() => {
    if (state.phase !== 'computer-respond' && state.phase !== 'computer-lead') return;
    const delay = state.phase === 'computer-lead' ? 1200 : 900;
    const timer = setTimeout(() => dispatch({ type: 'COMPUTER_PLAY' }), delay);
    return () => clearTimeout(timer);
  }, [state.phase, state.message]);

  const handleCardPlay = useCallback(
    (card: Card) => dispatch({ type: 'PLAYER_PLAY_CARD', card }),
    [],
  );

  const isPlayerTurn = state.phase === 'player-lead' || state.phase === 'player-respond';
  const isWaiting    = state.phase === 'computer-respond' || state.phase === 'computer-lead';

  // Running totals shown in scoreboard
  const playerPoints   = countPoints(state.playerPile);
  const computerPoints = countPoints(state.computerPile);

  // Trump card is always the last element in the deck array (until drawn)
  const trumpVisible    = state.deck.length > 0;
  const drawPileCount   = Math.max(0, state.deck.length - 1); // exclude visible trump card

  return (
    <div
      className={`sg bg${isFullscreen ? ' sg--fullscreen' : ''}`}
      ref={containerRef}
    >

      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <div className="sg-topbar">
        <div className="sg-scores">
          <span>You: <strong>{playerPoints}</strong> pts</span>
          <span>Computer: <strong>{computerPoints}</strong> pts</span>
          <span className="sg-badge bg-trump-badge">
            Trump: {state.trumpSuit.charAt(0).toUpperCase() + state.trumpSuit.slice(1)}
          </span>
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

      {/* ── Computer hand ───────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--computer">
        <div className="sg-section__label">
          Computer
          <span className="sg-badge">{state.computerHand.length} cards in hand</span>
          <span className="sg-badge">Captured: {state.computerPile.length}</span>
        </div>
        <div className="sg-cards">
          {state.computerHand.map((_, i) => (
            <CardView key={i} faceDown />
          ))}
          {state.computerHand.length === 0 && (
            <p className="sg-empty">No cards</p>
          )}
        </div>
      </div>

      {/* ── Trump card + Draw pile ───────────────────────────────────────────── */}
      <div className="bg-trump-deck-row">
        <div className="bg-trump-area">
          <div className="sg-section__label">Briscola (Trump)</div>
          {trumpVisible ? (
            <CardView card={state.deck[state.deck.length - 1]} />
          ) : (
            <div className="bg-trump-drawn">Drawn</div>
          )}
        </div>

        <div className="bg-deck-area">
          <div className="sg-section__label">Draw Pile</div>
          {drawPileCount > 0 ? (
            <div className="bg-deck-pile">
              <CardView faceDown />
              <span className="bg-deck-count">×{drawPileCount}</span>
            </div>
          ) : (
            <div className="bg-deck-empty">
              {state.deck.length === 1 ? 'Last card (trump)' : 'Empty'}
            </div>
          )}
        </div>
      </div>

      {/* ── Trick area ──────────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--table bg-trick-area">
        <div className="sg-section__label">
          Current Trick
          {state.trickWinner && (
            <span className={`sg-badge ${state.trickWinner === 'player' ? 'sg-badge--scope' : ''}`}>
              {state.trickWinner === 'player' ? 'You won ✓' : 'Computer won'}
            </span>
          )}
        </div>
        <div className="bg-trick-cards">
          <div className="bg-trick-slot">
            <div className="bg-trick-label">You</div>
            {state.playerPlayed
              ? <CardView card={state.playerPlayed} />
              : <div className="bg-trick-placeholder">—</div>}
          </div>
          <div className="bg-trick-vs">vs</div>
          <div className="bg-trick-slot">
            <div className="bg-trick-label">Computer</div>
            {state.computerPlayed
              ? <CardView card={state.computerPlayed} />
              : <div className="bg-trick-placeholder">—</div>}
          </div>
        </div>
      </div>

      {/* ── Message bar ─────────────────────────────────────────────────────── */}
      <div className={`sg-message ${isWaiting ? 'sg-message--waiting' : ''}`}>
        {state.message}
      </div>

      {/* ── Player hand ─────────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--player">
        <div className="sg-section__label">
          Your hand
          <span className="sg-badge">Captured: {state.playerPile.length}</span>
        </div>
        <div className="sg-cards">
          {state.playerHand.map(card => (
            <CardView
              key={card.id}
              card={card}
              onClick={isPlayerTurn ? () => handleCardPlay(card) : undefined}
            />
          ))}
          {state.playerHand.length === 0 && state.phase !== 'game-over' && (
            <p className="sg-empty">No cards</p>
          )}
        </div>
      </div>

      {/* ── Game-over panel ─────────────────────────────────────────────────── */}
      {state.phase === 'game-over' && state.finalScore && (
        <div className="sg-gameover">
          <h3>Final Score</h3>
          <div className="sg-gameover__totals">
            <div>
              <strong>You</strong>
              <span className="sg-gameover__pts">{state.finalScore.playerPoints}</span>
            </div>
            <div className="sg-gameover__vs">vs</div>
            <div>
              <strong>Computer</strong>
              <span className="sg-gameover__pts">{state.finalScore.computerPoints}</span>
            </div>
          </div>
          <ul className="sg-gameover__details">
            <li>Total points in play: 120</li>
            <li>Majority needed to win: 61+</li>
            {state.finalScore.playerPoints > state.finalScore.computerPoints
              ? <li>🎉 You captured {state.finalScore.playerPoints} points — well played!</li>
              : state.finalScore.computerPoints > state.finalScore.playerPoints
              ? <li>Computer captured {state.finalScore.computerPoints} points — try again!</li>
              : <li>Exact tie — rare result!</li>
            }
          </ul>
          <button
            className="sg-btn sg-btn--new"
            onClick={() => dispatch({ type: 'NEW_GAME' })}
          >
            Play again
          </button>
        </div>
      )}

      {/* ── Deck info ───────────────────────────────────────────────────────── */}
      <div className="sg-deck-info">
        {state.deck.length > 0
          ? `${state.deck.length} card${state.deck.length !== 1 ? 's' : ''} in draw pile`
          : 'Draw pile empty'}
      </div>

    </div>
  );
}
