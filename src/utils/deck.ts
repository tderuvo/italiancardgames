// ── Backward-compatibility shim ───────────────────────────────────────────────
// The canonical deck module is now src/cards/italianDeck.ts.
// This file re-exports everything under the original names so any existing
// imports continue to work without change.
//
// New game modules (Briscola, Tressette, Solitaire…) should import directly
// from src/cards/italianDeck.ts.

export type { ItalianCard as Card, ItalianSuit as Suit } from '../cards/italianDeck';
export {
  createItalianDeck as buildDeck,
  shuffleDeck  as shuffle,
  getCardLabel as rankLabel,
  getCardDisplayLabel as cardLabel,
  ITALIAN_SUITS as SUITS,
  ITALIAN_RANKS as RANKS,
} from '../cards/italianDeck';

