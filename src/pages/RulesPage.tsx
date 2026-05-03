import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RULES = [
  {
    title: 'Scopa Rules',
    description:
      'Complete rules for Scopa — setup, capturing, combination plays, Primiera scoring, Settebello, Scopas, and regional variations.',
    href: '/scopa-rules',
  },
  {
    title: 'How to Play Scopa',
    description:
      'A beginner-friendly, step-by-step guide to learning Scopa. Covers the basics of capturing, scoring, and simple strategy tips.',
    href: '/how-to-play-scopa',
  },
  {
    title: 'How to Play Briscola',
    description:
      'Learn the basics of Briscola — trump cards, card values, the Ace and 3, scoring, and how to approach the endgame.',
    href: '/how-to-play-briscola',
  },
] as const;

export default function RulesPage() {
  useEffect(() => {
    document.title = 'Italian Card Game Rules | Scopa, Briscola & More';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn the rules for traditional Italian card games including Scopa and Briscola, with simple beginner-friendly guides.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>Italian Card Game Rules</h1>

      <p>
        This page collects rules guides and beginner introductions for traditional
        Italian card games played with the 40-card deck. Whether you are learning for
        the first time or checking a specific rule, start here.
      </p>

      <h2>Rules and Guides</h2>

      {RULES.map(rule => (
        <div key={rule.href} style={{ marginBottom: '1.5rem' }}>
          <h3>
            <Link to={rule.href}>{rule.title}</Link>
          </h3>
          <p style={{ margin: '0.25rem 0 0' }}>{rule.description}</p>
        </div>
      ))}

      <p style={{ marginTop: '2rem' }}>
        Want to start playing?{' '}
        <Link to="/play-scopa-online">Try Scopa online</Link> — free, no download
        needed.
      </p>

    </div>
  );
}
