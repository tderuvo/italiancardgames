// ── Italian deck utility ─────────────────────────────────────────────────────
// A standard Neapolitan (Italian) deck has 40 cards:
// 4 suits × 10 ranks (Ace through King, with Jack and Knight at 8 and 9).
//
// To add Briscola or Solitaire, import Card, buildDeck, and shuffle from here.
// Each game can apply its own rank-value overrides on top of the base deck.

export type Suit = 'Coins' | 'Cups' | 'Swords' | 'Batons';

export interface Card {
  suit: Suit;
  rank: number; // 1–10
  id: string;   // unique key for React lists
}

export const SUITS: Suit[] = ['Coins', 'Cups', 'Swords', 'Batons'];
export const RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

/** Human-readable rank names used on text-based cards. */
export function rankLabel(rank: number): string {
  const labels: Record<number, string> = {
    1: 'Ace',
    8: 'Jack',
    9: 'Knight',
    10: 'King',
  };
  return labels[rank] ?? String(rank);
}

/** Short display string: "7 Coins", "Ace Cups", "King Swords" */
export function cardLabel(card: Card): string {
  return `${rankLabel(card.rank)} ${card.suit}`;
}

/** Build a fresh, ordered 40-card Italian deck. */
export function buildDeck(): Card[] {
  const cards: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      cards.push({ suit, rank, id: `${rank}-${suit}` });
    }
  }
  return cards;
}

/** Fisher–Yates in-place shuffle; returns a new array. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
