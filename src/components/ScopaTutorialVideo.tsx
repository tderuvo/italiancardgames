// ── ScopaTutorialVideo ────────────────────────────────────────────────────────
// Reusable responsive YouTube embed for the Scopa rules tutorial video.
// Drop <ScopaTutorialVideo /> anywhere inside an .seo-section layout.
//
// Uses the privacy-enhanced youtube-nocookie.com embed domain.
// No autoplay. Lazy-loaded. No layout shift (padding-bottom aspect-ratio trick).

const VIDEO_ID  = 'TuPZ3zsHmIo';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`;

export default function ScopaTutorialVideo() {
  return (
    <div className="tutorial-video">
      <h2>Watch a Quick Scopa Tutorial</h2>
      <p className="tutorial-video__intro">
        Prefer learning visually? This short Scopa tutorial explains the rules,
        scoring, card values, and gameplay using a traditional Italian deck.
      </p>
      <div className="tutorial-video__frame">
        <iframe
          src={EMBED_URL}
          title="How to play Scopa — Italian card game tutorial"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="tutorial-video__credit">Video courtesy of YouTube creator.</p>
    </div>
  );
}
