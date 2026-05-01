// ── Scopa game utilities ─────────────────────────────────────────────────────
// Pure functions: no React, no side-effects.
// Briscola and Solitaire utilities will live in their own sibling folders.

import { Card } from '../../utils/deck';

// ── Capture logic ────────────────────────────────────────────────────────────

/**
 * Return every subset of `table` whose ranks sum to `played.rank`.
 * Includes single-card exact matches and multi-card combinations.
 * The table typically has ≤12 cards so brute-force bitmask is fine.
 */
export function findCaptureSets(played: Card, table: Card[]): Card[][] {
  const sets: Card[][] = [];
  const n = table.length;
  for (let mask = 1; mask < (1 << n); mask++) {
    const subset: Card[] = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(table[i]);
        sum += table[i].rank;
      }
    }
    if (sum === played.rank) sets.push(subset);
  }
  return sets;
}

/**
 * Flat list of all table cards that appear in at least one valid capture set.
 * Used to highlight clickable table cards for the player.
 */
export function getCapturableTableCards(played: Card, table: Card[]): Card[] {
  const sets = findCaptureSets(played, table);
  const ids = new Set<string>();
  sets.forEach(s => s.forEach(c => ids.add(c.id)));
  return table.filter(c => ids.has(c.id));
}

/**
 * Given that the player clicked `tableCard`, find the best capture set
 * that contains it (prefer fewest cards, prefer exact single match).
 * Returns null if that card is not in any valid set.
 */
export function pickCaptureContaining(
  played: Card,
  table: Card[],
  tableCard: Card,
): Card[] | null {
  const sets = findCaptureSets(played, table).filter(s =>
    s.some(c => c.id === tableCard.id),
  );
  if (sets.length === 0) return null;
  // Prefer a single exact-match capture; otherwise smallest set
  const single = sets.find(s => s.length === 1);
  return single ?? sets.reduce((a, b) => (a.length <= b.length ? a : b));
}

// ── Computer AI ──────────────────────────────────────────────────────────────

/**
 * Pick the computer's move for this turn.
 * Strategy: capture if possible (prefer single-card match), else play first card.
 */
export function computerMove(
  hand: Card[],
  table: Card[],
): { played: Card; captured: Card[] } {
  for (const card of hand) {
    const sets = findCaptureSets(card, table);
    if (sets.length > 0) {
      const single = sets.find(s => s.length === 1);
      return { played: card, captured: single ?? sets[0] };
    }
  }
  return { played: hand[0], captured: [] };
}

// ── Scoring ──────────────────────────────────────────────────────────────────

export interface ScoreBreakdown {
  playerScore: number;
  computerScore: number;
  details: string[];
}

export function computeScore(
  playerCaptures: Card[],
  computerCaptures: Card[],
  playerScope: number,
  computerScope: number,
): ScoreBreakdown {
  let playerScore = playerScope;
  let computerScore = computerScope;
  const details: string[] = [];

  if (playerScope > 0)
    details.push(`You scored ${playerScope} scopa${playerScope > 1 ? 'e' : ''}`);
  if (computerScope > 0)
    details.push(`Computer scored ${computerScope} scopa${computerScope > 1 ? 'e' : ''}`);

  // Most cards captured
  if (playerCaptures.length > computerCaptures.length) {
    playerScore++;
    details.push(`Most cards: You (${playerCaptures.length} vs ${computerCaptures.length})`);
  } else if (computerCaptures.length > playerCaptures.length) {
    computerScore++;
    details.push(`Most cards: Computer (${computerCaptures.length} vs ${playerCaptures.length})`);
  } else {
    details.push(`Cards: tie (${playerCaptures.length} each)`);
  }

  // Most Coins
  const pCoins = playerCaptures.filter(c => c.suit === 'Coins').length;
  const cCoins = computerCaptures.filter(c => c.suit === 'Coins').length;
  if (pCoins > cCoins) {
    playerScore++;
    details.push(`Most Coins: You (${pCoins} vs ${cCoins})`);
  } else if (cCoins > pCoins) {
    computerScore++;
    details.push(`Most Coins: Computer (${cCoins} vs ${pCoins})`);
  } else {
    details.push(`Coins: tie (${pCoins} each)`);
  }

  // Settebello — 7 of Coins
  const playerHasSette = playerCaptures.some(c => c.rank === 7 && c.suit === 'Coins');
  const computerHasSette = computerCaptures.some(c => c.rank === 7 && c.suit === 'Coins');
  if (playerHasSette) {
    playerScore++;
    details.push('Settebello (7 of Coins): You');
  } else if (computerHasSette) {
    computerScore++;
    details.push('Settebello (7 of Coins): Computer');
  }

  return { playerScore, computerScore, details };
}
