// ── Tressette game utilities ──────────────────────────────────────────────────
// Pure functions: ranking, trick resolution, scoring, AI, valid-card filtering.

import { ItalianCard, ItalianSuit } from '../../cards/italianDeck';

// ── Card ranking ──────────────────────────────────────────────────────────────
// 3 is highest, 4 is lowest. Index 0 = strongest card.

const RANK_ORDER = [3, 2, 1, 10, 9, 8, 7, 6, 5, 4] as const;

/** Returns 0 (strongest) … 9 (weakest) for a card value. */
export function tressetteRank(value: number): number {
  return RANK_ORDER.indexOf(value as (typeof RANK_ORDER)[number]);
}

// ── Trick resolution ──────────────────────────────────────────────────────────

/**
 * Determines who wins the trick.
 * Only cards of the led suit can win. If both followed suit, the higher-ranked
 * card (lower rank index) wins. If neither followed suit, the current leader wins
 * — but with enforced suit-following this should not occur in normal play.
 */
export function determineTrickWinner(
  playerCard:   ItalianCard,
  computerCard: ItalianCard,
  ledSuit:      ItalianSuit,
  playerLed:    boolean,
): 'player' | 'computer' {
  const pInSuit = playerCard.suit   === ledSuit;
  const cInSuit = computerCard.suit === ledSuit;

  if (pInSuit && cInSuit) {
    return tressetteRank(playerCard.value) < tressetteRank(computerCard.value)
      ? 'player'
      : 'computer';
  }
  if (pInSuit)  return 'player';
  if (cInSuit)  return 'computer';
  return playerLed ? 'player' : 'computer'; // fallback: leader wins
}

// ── Scoring ───────────────────────────────────────────────────────────────────
// Ace / 2 / 3 = 1 pt each; King / Knight / Jack = ⅓ pt each; rest = 0.
// Stored internally as integer thirds to avoid floating-point drift.

export function cardThirds(value: number): number {
  if (value === 1 || value === 2 || value === 3)    return 3; // 1 full point
  if (value === 8 || value === 9 || value === 10)   return 1; // ⅓ point
  return 0;
}

export function countThirds(cards: ItalianCard[]): number {
  return cards.reduce((sum, c) => sum + cardThirds(c.value), 0);
}

/** Renders an integer-thirds value as a clean string: "1", "⅓", "1⅔", etc. */
export function formatScore(thirds: number): string {
  const whole = Math.floor(thirds / 3);
  const rem   = thirds % 3;
  if (rem === 0) return String(whole);
  const frac = rem === 1 ? '⅓' : '⅔';
  return whole === 0 ? frac : `${whole}${frac}`;
}

// ── AI ────────────────────────────────────────────────────────────────────────

/**
 * Computer picks a random legal card.
 * When responding, follows suit if possible; otherwise plays any card.
 */
export function computerPickCard(
  hand:     ItalianCard[],
  ledSuit?: ItalianSuit,
): ItalianCard {
  const inSuit = ledSuit ? hand.filter(c => c.suit === ledSuit) : [];
  const pool   = inSuit.length > 0 ? inSuit : hand;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Valid card filtering ───────────────────────────────────────────────────────

/**
 * Returns the subset of the hand the player may legally play.
 * When a suit has been led, the player must follow that suit if able.
 */
export function validCards(
  hand:     ItalianCard[],
  ledSuit?: ItalianSuit,
): ItalianCard[] {
  if (!ledSuit) return hand;
  const inSuit = hand.filter(c => c.suit === ledSuit);
  return inSuit.length > 0 ? inSuit : hand;
}
