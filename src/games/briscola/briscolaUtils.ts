// ── Briscola game utilities ──────────────────────────────────────────────────
// Pure functions: no React, no side-effects.
// Scopa utilities live in ../scopa/scopaUtils.ts.

import { ItalianCard as Card } from '../../cards/italianDeck';

// ── Card point values ─────────────────────────────────────────────────────────

const CARD_POINTS: Record<number, number> = {
  1:  11,   // Ace
  3:  10,   // Three
  10:  4,   // King
  9:   3,   // Knight
  8:   2,   // Jack
  // 2, 4, 5, 6, 7 = 0 (not listed → default 0)
};

/** Point value of a card for scoring at the end of the game. */
export function cardPoints(value: number): number {
  return CARD_POINTS[value] ?? 0;
}

/** Sum point values for a pile of captured cards. */
export function countPoints(cards: Card[]): number {
  return cards.reduce((sum, c) => sum + cardPoints(c.value), 0);
}

// ── Rank strength for trick resolution ───────────────────────────────────────
//
// Briscola rank order, highest to lowest:
//   Ace  3  King  Knight  Jack  7  6  5  4  2
// (value:  1  3   10      9     8  7  6  5  4  2)

const RANK_ORDER = [1, 3, 10, 9, 8, 7, 6, 5, 4, 2] as const;

/**
 * Numeric strength of a card: higher = stronger.
 * Ace (1) → 9 (strongest), 2 → 0 (weakest).
 */
export function briscolaStrength(value: number): number {
  const idx = RANK_ORDER.indexOf(value as (typeof RANK_ORDER)[number]);
  return idx === -1 ? 0 : RANK_ORDER.length - 1 - idx;
}

// ── Trick resolution ──────────────────────────────────────────────────────────

/**
 * Determine if the player wins the trick.
 *
 * Rules:
 *   1. Trump (briscola) beats non-trump.
 *   2. Both trump → higher Briscola strength wins.
 *   3. Neither trump, same suit → higher Briscola strength wins.
 *   4. Neither trump, different suits → led suit wins.
 *
 * @param playerCard   Card the player played.
 * @param computerCard Card the computer played.
 * @param trumpSuit    The briscola (trump) suit for this game.
 * @param playerLed    true if the player led this trick (played first).
 */
export function playerWinsTrick(
  playerCard:   Card,
  computerCard: Card,
  trumpSuit:    string,
  playerLed:    boolean,
): boolean {
  const pTrump = playerCard.suit   === trumpSuit;
  const cTrump = computerCard.suit === trumpSuit;

  // Rule 1 — trump beats non-trump
  if (pTrump && !cTrump) return true;
  if (!pTrump && cTrump) return false;

  // Rule 2 — both trump: higher strength wins
  if (pTrump && cTrump) {
    return briscolaStrength(playerCard.value) > briscolaStrength(computerCard.value);
  }

  // Rules 3 & 4 — neither is trump
  if (playerCard.suit === computerCard.suit) {
    // Same non-trump suit: higher strength wins regardless of who led
    return briscolaStrength(playerCard.value) > briscolaStrength(computerCard.value);
  }

  // Different non-trump suits: led suit wins
  return playerLed; // true → player's lead suit wins; false → computer's lead suit wins
}

// ── Scoring ───────────────────────────────────────────────────────────────────

export interface BriscolaScore {
  playerPoints:   number;
  computerPoints: number;
}

export function computeFinalScore(
  playerPile:   Card[],
  computerPile: Card[],
): BriscolaScore {
  return {
    playerPoints:   countPoints(playerPile),
    computerPoints: countPoints(computerPile),
  };
}

// ── Computer AI ───────────────────────────────────────────────────────────────

/**
 * Simple random strategy: pick any card from the computer's hand.
 * Briscola has no follow-suit requirement, so any card is legal.
 * A smarter strategy can be substituted here without touching the game component.
 */
export function computerPickCard(hand: Card[]): Card {
  return hand[Math.floor(Math.random() * hand.length)];
}
