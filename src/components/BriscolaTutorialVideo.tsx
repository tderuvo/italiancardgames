// ── BriscolaTutorialVideo ─────────────────────────────────────────────────────
// Reusable responsive YouTube embed for the Briscola rules tutorial video.
// Drop <BriscolaTutorialVideo /> anywhere inside an .seo-section layout.
//
// Shares all .tutorial-video* CSS with ScopaTutorialVideo — no extra styles needed.
// Uses privacy-enhanced youtube-nocookie.com. No autoplay. Lazy-loaded.

const VIDEO_ID  = 'lEk_8GlwjzA';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`;

export default function BriscolaTutorialVideo() {
  return (
    <div className="tutorial-video">
      <h2>Watch a Quick Briscola Tutorial</h2>
      <p className="tutorial-video__intro">
        Prefer learning visually? This short Briscola tutorial explains the rules,
        trump cards, scoring, and trick-taking gameplay using a traditional Italian deck.
      </p>
      <div className="tutorial-video__frame">
        <iframe
          src={EMBED_URL}
          title="How to play Briscola — Italian card game tutorial"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="tutorial-video__credit">Video courtesy of YouTube creator.</p>
    </div>
  );
}
