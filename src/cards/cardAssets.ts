// ── Card visual assets ────────────────────────────────────────────────────────
// Suit icons and any other static visual data shared across games.
// Import this wherever suit symbols or deck metadata are needed in UI code.

import { ItalianSuit } from './italianDeck';

/** Unicode symbols used in the text-fallback card face. */
export const SUIT_ICONS: Record<ItalianSuit, string> = {
  coins:  '◉',
  cups:   '♦',
  swords: '✦',
  batons: '⚑',
};

export function getSuitIcon(suit: ItalianSuit): string {
  return SUIT_ICONS[suit];
}
