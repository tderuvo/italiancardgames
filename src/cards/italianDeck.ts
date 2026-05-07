// ── Italian deck — canonical types and utilities ──────────────────────────────
// All Italian card game modules (Scopa, Briscola, Tressette, Solitaire…)
// should import Card types and deck utilities from here.
//
// src/utils/deck.ts is kept as a re-export shim for backward compatibility.

export type ItalianSuit = 'coins' | 'cups' | 'swords' | 'batons';

export interface ItalianCard {
  suit: ItalianSuit;
  value: number;  // 1–10
  label: string;  // 'Ace' | '2'…'7' | 'Jack' | 'Knight' | 'King'
  id: string;     // unique key for React lists; stable within a deck instance
}

export const ITALIAN_SUITS: ItalianSuit[] = ['coins', 'cups', 'swords', 'batons'];
export const ITALIAN_RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

// ── Label helpers ─────────────────────────────────────────────────────────────

/** Short rank name: 'Ace', '2'…'7', 'Jack', 'Knight', 'King' */
export function getCardLabel(value: number): string {
  const labels: Record<number, string> = {
    1: 'Ace',
    8: 'Jack',
    9: 'Knight',
    10: 'King',
  };
  return labels[value] ?? String(value);
}

/** Display name for a suit: 'Coins', 'Cups', 'Swords', 'Batons' */
export function getSuitLabel(suit: ItalianSuit): string {
  return suit.charAt(0).toUpperCase() + suit.slice(1);
}

/** Full card display string: 'Ace Coins', '7 Cups', 'King Swords' */
export function getCardDisplayLabel(card: ItalianCard): string {
  return `${card.label} ${getSuitLabel(card.suit)}`;
}

// ── Image path ────────────────────────────────────────────────────────────────
//
// Drop Neapolitan card PNGs into /public/cards/neapolitan/ using the naming
// convention below, and CardView will automatically switch from text fallback
// to the real artwork — no code changes required.
//
// Example: /public/cards/neapolitan/coins-1.png  → Ace of Coins
//          /public/cards/neapolitan/swords-7.png → 7 of Swords

export function getCardImagePath(card: ItalianCard): string {
  return `/cards/neapolitan/${card.suit}-${card.value}.png`;
}

// ── Deck factory ──────────────────────────────────────────────────────────────

/** Build a fresh, ordered 40-card Italian deck. */
export function createItalianDeck(): ItalianCard[] {
  return ITALIAN_SUITS.flatMap(suit =>
    ITALIAN_RANKS.map(value => ({
      suit,
      value,
      label: getCardLabel(value),
      id: `${value}-${suit}`,
    })),
  );
}

/** Fisher–Yates shuffle; returns a new array, does not mutate. */
export function shuffleDeck<T>(deck: T[]): T[] {
  const a = [...deck];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Aliases matching the original deck.ts API — used by the backward-compat shim.
export const buildDeck = createItalianDeck;
export const shuffle   = shuffleDeck;
export const rankLabel = getCardLabel;
export const cardLabel = getCardDisplayLabel;
export type  Suit      = ItalianSuit;
export type  Card      = ItalianCard;
export const SUITS     = ITALIAN_SUITS;
export const RANKS     = ITALIAN_RANKS;
