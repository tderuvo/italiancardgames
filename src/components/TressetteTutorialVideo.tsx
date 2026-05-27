// ── TressetteTutorialVideo ────────────────────────────────────────────────────
// Reusable responsive YouTube embed for the Tressette rules tutorial video.
// Drop <TressetteTutorialVideo /> anywhere inside an .seo-section layout.
//
// Shares all .tutorial-video* CSS with ScopaTutorialVideo and
// BriscolaTutorialVideo — no extra styles needed.
// Uses privacy-enhanced youtube-nocookie.com. No autoplay. Lazy-loaded.

const VIDEO_ID  = '73t4yReh4TM';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`;

export default function TressetteTutorialVideo() {
  return (
    <div className="tutorial-video">
      <h2>Watch a Quick Tressette Tutorial</h2>
      <p className="tutorial-video__intro">
        Prefer learning visually? This short Tressette tutorial explains trick-taking,
        card rankings, strategy, and traditional Italian gameplay using a 40-card deck.
      </p>
      <div className="tutorial-video__frame">
        <iframe
          src={EMBED_URL}
          title="How to play Tressette — Italian card game tutorial"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <p className="tutorial-video__credit">Video courtesy of YouTube creator.</p>
    </div>
  );
}
