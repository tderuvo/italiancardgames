// ── CardView ──────────────────────────────────────────────────────────────────
// Reusable visual component for a single Italian playing card.
//
// USAGE
//   <CardView card={card} />                   — face-up, non-interactive
//   <CardView card={card} onClick={fn} />       — face-up, clickable
//   <CardView faceDown />                       — back face (card prop not needed)
//   <CardView card={card} selected highlighted /> — state modifiers
//
// IMAGE SUPPORT
//   Tries to load /cards/neapolitan/{suit}-{value}.png in the background.
//   Shows the text fallback until the image loads successfully.
//   To add real card art: drop PNGs into /public/cards/neapolitan/ matching
//   the pattern above — CardView switches to artwork automatically, no code changes.
//
// STYLING
//   Uses .sg-card/* for sizing/layout (shared with Scopa game table).
//   Also applies .italian-card* classes for future game-agnostic overrides.
//   Pass `className` to inject additional classes (e.g. for Briscola or Solitaire).

import { useEffect, useState } from 'react';
import {
  ItalianCard,
  getCardDisplayLabel,
  getCardImagePath,
} from './italianDeck';
import { getSuitIcon } from './cardAssets';

// ── Props ─────────────────────────────────────────────────────────────────────

export interface CardViewProps {
  card?:        ItalianCard;   // not required when faceDown=true
  faceDown?:    boolean;
  onClick?:     () => void;
  selected?:    boolean;
  highlighted?: boolean;
  className?:   string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function CardView({
  card,
  faceDown = false,
  onClick,
  selected = false,
  highlighted = false,
  className = '',
}: CardViewProps) {
  const [imgState, setImgState] = useState<'pending' | 'loaded' | 'error'>('pending');

  // Silently preload the card image; always render the text fallback until
  // the image is confirmed to exist and fully loaded.
  const imagePath = card && !faceDown ? getCardImagePath(card) : null;

  useEffect(() => {
    if (!imagePath) return;
    setImgState('pending');
    const img = new Image();
    img.onload  = () => setImgState('loaded');
    img.onerror = () => setImgState('error');
    img.src = imagePath;
    return () => { img.onload = null; img.onerror = null; };
  }, [imagePath]);

  // ── Face-down card ─────────────────────────────────────────────────────────

  if (faceDown) {
    return (
      <div
        className={[
          'italian-card',
          'italian-card--back',
          'sg-card',
          'sg-card--back',
          className,
        ].filter(Boolean).join(' ')}
      >
        🂠
      </div>
    );
  }

  if (!card) return null;

  // ── Face-up card ───────────────────────────────────────────────────────────

  const hasImage = imgState === 'loaded';
  const label    = getCardDisplayLabel(card);

  const cls = [
    'italian-card',
    `italian-card--${card.suit}`,
    hasImage ? 'italian-card--has-image' : '',
    'sg-card',
    `sg-card--${card.suit}`,
    selected    ? 'sg-card--selected'    : '',
    highlighted ? 'sg-card--highlighted' : '',
    onClick     ? 'sg-card--clickable'   : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} onClick={onClick} aria-label={label}>
      {hasImage ? (
        <img
          src={imagePath!}
          alt={label}
          className="italian-card-image"
          draggable={false}
        />
      ) : (
        <span className="italian-card-fallback">
          <span className="sg-card__rank">{card.label}</span>
          <span className="sg-card__suit-icon">{getSuitIcon(card.suit)}</span>
          <span className="sg-card__label">{label}</span>
        </span>
      )}
    </button>
  );
}
