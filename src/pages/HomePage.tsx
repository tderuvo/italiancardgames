import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Future games: add a new card object here when ready ──────────────────────
const GAMES = [
  {
    title: 'Scopa',
    description: 'The classic Italian capture card game. Play against the computer using a traditional 40-card deck.',
    href: '/play-scopa-online',
    btnLabel: 'Play Scopa →',
    available: true,
    emoji: '♦',
  },
  {
    title: 'Briscola',
    description: "Italy's most popular trick-taking card game. Play online for free using a traditional 40-card Italian deck.",
    href: '/play-briscola-online',
    btnLabel: 'Play Briscola →',
    available: true,
    emoji: '♣',
  },
  {
    title: 'Italian Solitaire',
    description: 'Explore Italian solitaire-style and classic 40-card games.',
    href: '/italian-solitaire',
    btnLabel: 'Explore Games →',
    available: true,
    emoji: '♠',
  },
];

export default function HomePage() {
  useEffect(() => {
    document.title = 'Italian Card Games — Play Scopa & Briscola Online Free';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Play free Italian card games online including Scopa and Briscola. No download required. Classic games with a traditional 40-card Italian deck.';
    }
  }, []);

  return (
    <div className="page-home">

      {/* ── Hero ── */}
      <section className="hero">
        <h1 className="hero__h1">Play Italian Card Games Online</h1>
        <p className="hero__sub">
          Play Scopa, Briscola, and classic Italian card games for free.
          No download required.
        </p>
      </section>

      {/* ── Game cards ── */}
      <section className="games-grid" aria-label="Available games">
        {GAMES.map(game => (
          <article key={game.title} className={`game-card ${game.available ? '' : 'game-card--soon'}`}>
            <div className="game-card__emoji" aria-hidden="true">{game.emoji}</div>
            <h2 className="game-card__title">{game.title}</h2>
            <p className="game-card__desc">{game.description}</p>
            {game.available && game.href ? (
              <>
                <Link to={game.href} className="game-card__btn">
                  {game.btnLabel}
                </Link>
                {game.title === 'Scopa' && (
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: '#aaa' }}>
                    <Link to="/how-to-play-scopa">New? Learn the rules →</Link>
                  </p>
                )}
                {game.title === 'Briscola' && (
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: '#aaa' }}>
                    <Link to="/how-to-play-briscola">New? Learn the rules →</Link>
                  </p>
                )}
              </>
            ) : (
              <span className="game-card__soon">Coming soon</span>
            )}
          </article>
        ))}
      </section>

      {/* ── SEO content section ── */}
      <section className="seo-section">
        <h2>What are Italian card games?</h2>
        <p>
          Italian card games have a long history rooted in the Mediterranean tradition of
          playing with a <strong>40-card deck</strong>. Unlike the standard 52-card deck used in
          most of the world, the traditional Italian (Neapolitan) deck uses four suits —{' '}
          <strong>Coins, Cups, Swords, and Batons</strong> — each with ten cards: Ace
          through 7, then Jack (Fante), Knight (Cavallo), and King (Re).
        </p>
        <p>
          Games like <strong>Scopa</strong> and <strong>Briscola</strong> have been played in
          Italian homes, bars, and piazzas for centuries. They are easy to learn but reward
          strategy and memory. Whether you are of Italian heritage or simply curious about the
          tradition, these games offer a unique and enjoyable alternative to more familiar
          card games.
        </p>
        <p>
          All games on this site use the classic 40-card Italian deck and can be played
          free in your browser — no account, no app, no download needed.
        </p>
      </section>

    </div>
  );
}
