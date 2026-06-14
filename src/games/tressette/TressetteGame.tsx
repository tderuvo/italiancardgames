// ── TressetteGame ─────────────────────────────────────────────────────────────
// Player vs Computer, 2-player simplified Tressette (10 cards each, no draw pile).
// No trump suit. Follow suit mandatory. Highest ranked card of led suit wins.
// Ranking: 3 → 2 → Ace → King → Knight → Jack → 7 → 6 → 5 → 4.

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
  determineTrickWinner,
  countThirds,
  formatScore,
  computerPickCard,
  validCards,
} from './tressetteUtils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Phase =
  | 'player-lead'       // player picks any card to lead
  | 'computer-respond'  // computer auto-responds to player's lead (~900 ms)
  | 'computer-lead'     // computer auto-leads after winning a trick (~1 200 ms)
  | 'player-respond'    // player responds to computer's lead (must follow suit)
  | 'game-over';

interface GameState {
  playerHand:     Card[];
  computerHand:   Card[];
  playerPlayed:   Card | null;
  computerPlayed: Card | null;
  ledSuit:        ItalianSuit | null;  // suit that was led this trick
  playerLed:      boolean;             // whether player led this trick
  trickWinner:    'player' | 'computer' | null;
  playerPile:     Card[];
  computerPile:   Card[];
  trickCount:     number;              // tricks completed (0–10)
  phase:          Phase;
  message:        string;
}

type Action =
  | { type: 'NEW_GAME' }
  | { type: 'PLAYER_PLAY_CARD'; card: Card }
  | { type: 'COMPUTER_PLAY' };

// ── Deal ──────────────────────────────────────────────────────────────────────

function deal(): Pick<GameState, 'playerHand' | 'computerHand'> {
  const shuffled = shuffleDeck(createItalianDeck());
  return {
    playerHand:   shuffled.slice(0, 10),
    computerHand: shuffled.slice(10, 20),
  };
}

function freshGame(): GameState {
  return {
    ...deal(),
    playerPlayed:   null,
    computerPlayed: null,
    ledSuit:        null,
    playerLed:      true,
    trickWinner:    null,
    playerPile:     [],
    computerPile:   [],
    trickCount:     0,
    phase:          'player-lead',
    message:        'Select any card to lead the first trick.',
  };
}

// ── Trick resolution ──────────────────────────────────────────────────────────

function resolveTrick(state: GameState): GameState {
  const { playerPlayed, computerPlayed, ledSuit, playerLed } = state;
  if (!playerPlayed || !computerPlayed || !ledSuit) return state;

  const winner     = determineTrickWinner(playerPlayed, computerPlayed, ledSuit, playerLed);
  const pWins      = winner === 'player';
  const trickCards = [playerPlayed, computerPlayed];

  const playerPile   = pWins  ? [...state.playerPile,   ...trickCards] : state.playerPile;
  const computerPile = !pWins ? [...state.computerPile, ...trickCards] : state.computerPile;
  const trickCount   = state.trickCount + 1;

  // ── Game over ─────────────────────────────────────────────────────────────
  if (trickCount === 10) {
    const pPts = countThirds(playerPile);
    const cPts = countThirds(computerPile);
    const result =
      pPts > cPts ? `You win ${formatScore(pPts)}–${formatScore(cPts)}! 🎉` :
      cPts > pPts ? `Computer wins ${formatScore(cPts)}–${formatScore(pPts)}.` :
                    `It's a tie (${formatScore(pPts)} each)!`;
    return {
      ...state,
      playerPile,
      computerPile,
      playerPlayed,
      computerPlayed,
      trickWinner: winner,
      trickCount,
      ledSuit:  null,
      phase:    'game-over',
      message:  `Game over — ${result}`,
    };
  }

  // ── Continue ──────────────────────────────────────────────────────────────
  const winMsg = pWins
    ? `You won the trick! (${cardLabel(playerPlayed)} beats ${cardLabel(computerPlayed)})`
    : `Computer won the trick. (${cardLabel(computerPlayed)} beats ${cardLabel(playerPlayed)})`;

  return {
    ...state,
    playerPile,
    computerPile,
    playerPlayed,
    computerPlayed,
    trickWinner: winner,
    trickCount,
    ledSuit: null,
    phase:   pWins ? 'player-lead' : 'computer-lead',
    message: pWins
      ? `${winMsg} Your lead.`
      : `${winMsg} Computer leads next.`,
  };
}

// ── Reducer ───────────────────────────────────────────────────────────────────

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {

    case 'NEW_GAME':
      return freshGame();

    case 'PLAYER_PLAY_CARD': {
      if (state.phase !== 'player-lead' && state.phase !== 'player-respond') return state;
      if (!state.playerHand.some(c => c.id === action.card.id)) return state;

      // Enforce suit-following when responding
      if (state.phase === 'player-respond' && state.ledSuit) {
        const legal = validCards(state.playerHand, state.ledSuit);
        if (!legal.some(c => c.id === action.card.id)) return state;
      }

      const playerHand   = state.playerHand.filter(c => c.id !== action.card.id);
      const playerPlayed = action.card;

      if (state.phase === 'player-lead') {
        return {
          ...state,
          playerHand,
          playerPlayed,
          computerPlayed: null,
          trickWinner:    null,
          ledSuit:        playerPlayed.suit,
          playerLed:      true,
          phase:          'computer-respond',
          message:        `You played ${cardLabel(playerPlayed)}. Computer is responding…`,
        };
      }

      // player-respond → resolve trick immediately
      return resolveTrick({ ...state, playerHand, playerPlayed });
    }

    case 'COMPUTER_PLAY': {
      if (state.computerHand.length === 0) return state;

      if (state.phase === 'computer-respond') {
        const card         = computerPickCard(state.computerHand, state.ledSuit ?? undefined);
        const computerHand = state.computerHand.filter(c => c.id !== card.id);
        return resolveTrick({ ...state, computerHand, computerPlayed: card });
      }

      if (state.phase === 'computer-lead') {
        const card         = computerPickCard(state.computerHand);
        const computerHand = state.computerHand.filter(c => c.id !== card.id);
        return {
          ...state,
          computerHand,
          computerPlayed: card,
          playerPlayed:   null,
          trickWinner:    null,
          ledSuit:        card.suit,
          playerLed:      false,
          phase:          'player-respond',
          message:        `Computer played ${cardLabel(card)}. Follow suit if you can.`,
        };
      }

      return state;
    }

    default:
      return state;
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function TressetteGame() {
  const [state, dispatch] = useReducer(reducer, null, freshGame);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync fullscreen state
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

  // Cards the player is legally allowed to play this turn
  const legal    = isPlayerTurn ? validCards(state.playerHand, state.ledSuit ?? undefined) : [];
  const legalIds = new Set(legal.map(c => c.id));

  const playerScore   = formatScore(countThirds(state.playerPile));
  const computerScore = formatScore(countThirds(state.computerPile));
  const trickLabel    = state.phase === 'game-over'
    ? `${state.trickCount}/10`
    : `${state.trickCount + 1}/10`;

  // For game-over panel
  const pPts     = countThirds(state.playerPile);
  const cPts     = countThirds(state.computerPile);
  const totalPts = pPts + cPts;

  const suitLabel = (suit: ItalianSuit) =>
    suit.charAt(0).toUpperCase() + suit.slice(1);

  return (
    <div
      className={`sg tg${isFullscreen ? ' sg--fullscreen' : ''}`}
      ref={containerRef}
    >

      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <div className="sg-topbar">
        <div className="sg-scores">
          <span>You: <strong>{playerScore}</strong> pts</span>
          <span>Computer: <strong>{computerScore}</strong> pts</span>
          <span className="sg-badge">Trick {trickLabel}</span>
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
          <span className="sg-badge">{state.computerHand.length} cards</span>
          <span className="sg-badge">Captured: {state.computerPile.length}</span>
        </div>
        <div className="sg-cards">
          {state.computerHand.map((_, i) => (
            <CardView key={i} faceDown />
          ))}
          {state.computerHand.length === 0 && (
            <p className="sg-empty">No cards remaining</p>
          )}
        </div>
      </div>

      {/* ── Current trick ───────────────────────────────────────────────────── */}
      <div className="sg-section sg-section--table bg-trick-area">
        <div className="sg-section__label">
          Current Trick
          {state.ledSuit && (
            <span className="sg-badge">
              Led suit: {suitLabel(state.ledSuit)}
            </span>
          )}
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
          <span className="sg-badge">{state.playerHand.length} cards</span>
          <span className="sg-badge">Captured: {state.playerPile.length}</span>
          {state.phase === 'player-respond' && state.ledSuit && (
            <span className="sg-badge sg-badge--scope">
              Follow {suitLabel(state.ledSuit)} if you can
            </span>
          )}
        </div>
        <div className="sg-cards">
          {state.playerHand.map(card => {
            const canPlay  = legalIds.has(card.id);
            const dimmed   = isPlayerTurn && !canPlay;
            return (
              <CardView
                key={card.id}
                card={card}
                onClick={canPlay ? () => handleCardPlay(card) : undefined}
                className={dimmed ? 'tg-card--illegal' : ''}
              />
            );
          })}
          {state.playerHand.length === 0 && state.phase !== 'game-over' && (
            <p className="sg-empty">No cards remaining</p>
          )}
        </div>
      </div>

      {/* ── Game-over panel ─────────────────────────────────────────────────── */}
      {state.phase === 'game-over' && (
        <div className="sg-gameover">
          <h3>Final Score</h3>
          <div className="sg-gameover__totals">
            <div>
              <strong>You</strong>
              <span className="sg-gameover__pts">{playerScore}</span>
            </div>
            <div className="sg-gameover__vs">vs</div>
            <div>
              <strong>Computer</strong>
              <span className="sg-gameover__pts">{computerScore}</span>
            </div>
          </div>
          <ul className="sg-gameover__details">
            <li>Ace / 2 / 3 = 1 pt · King / Knight / Jack = ⅓ pt</li>
            <li>Total points in play this deal: {formatScore(totalPts)}</li>
            {pPts > cPts
              ? <li>🎉 You captured {playerScore} pts — well played!</li>
              : cPts > pPts
              ? <li>Computer captured {computerScore} pts — try again!</li>
              : <li>Exact tie — very unusual result!</li>
            }
          </ul>
          <button
            className="sg-btn sg-btn--new"
            onClick={() => dispatch({ type: 'NEW_GAME' })}
          >
            Play Again
          </button>
        </div>
      )}

    </div>
  );
}
