import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GAMES = [
  {
    name: 'Scopa',
    description:
      'A classic two-player capture game where you take cards from a shared table by matching values or combinations. Fast, strategic, and one of the most played Italian card games.',
    type: 'Multiplayer',
    link: '/play-scopa-online',
  },
  {
    name: 'Briscola',
    description:
      'A trick-taking game built around a trump suit. Players take turns leading cards and trying to win tricks that contain the highest-value cards. Easy to learn, difficult to master.',
    type: 'Multiplayer',
    link: '/how-to-play-briscola',
  },
  {
    name: 'Tressette',
    description:
      'A classic trick-taking game without a trump suit. Players must follow the suit that was led, and points come from specific card combinations and captured cards. Popular in northern Italy.',
    type: 'Multiplayer (4 players, teams)',
    link: null,
  },
  {
    name: 'Scopone',
    description:
      'A team variant of Scopa played by four players in pairs. Each player receives nine or ten cards at once, and the full hand is played before counting. Slower-paced and more strategic than standard Scopa.',
    type: 'Multiplayer (4 players, teams)',
    link: null,
  },
  {
    name: 'Asso Pigliatutto',
    description:
      'A simple game where the Ace captures all cards on the table — its name translates as "Ace takes all." Often used to introduce children to the 40-card Italian deck.',
    type: 'Multiplayer · Beginner-friendly',
    link: null,
  },
  {
    name: 'Rubamazzetto',
    description:
      'Players build and steal stacks of matching cards. If you play a card that matches another player\'s top stack, you claim their whole pile. A lively, social game with simple rules.',
    type: 'Multiplayer',
    link: null,
  },
  {
    name: 'Sette e Mezzo',
    description:
      'Italy\'s answer to Blackjack. Players try to reach a total of 7½ without going over. Face cards count as half a point, numbered cards count at face value. Fast rounds make it easy to play solo against a dealer.',
    type: 'Multiplayer · Solo-adaptable',
    link: null,
  },
  {
    name: 'Briscola Chiamata',
    description:
      'A five-player variant of Briscola where one player bids to call a secret partner by naming a card. The caller and their unknown partner play against the other three. Adds a social deduction layer to the classic game.',
    type: 'Multiplayer (5 players)',
    link: null,
  },
  {
    name: 'Bestia',
    description:
      'A trick-taking game where players can choose to play or pass each hand. Playing and losing results in a penalty. The goal is to avoid being left with the most tokens at the end.',
    type: 'Multiplayer',
    link: null,
  },
  {
    name: 'Italian 40-Card Solitaire (Solitaria)',
    description:
      'Patience-style solitaire played with the 40-card Italian deck instead of a standard 52-card deck. Rules vary, but the shorter deck produces a faster, tighter game that suits solo play well.',
    type: 'Solo',
    link: null,
  },
] as const;

export default function ItalianSolitairePage() {
  useEffect(() => {
    document.title = 'Italian Solitaire and 40-Card Games | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Explore Italian solitaire-style games and classic 40-card games including Scopa, Briscola, Tressette, Scopone, and more.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>Italian Solitaire and Classic 40-Card Games</h1>

      <p>
        The traditional Italian 40-card deck is the basis for dozens of fast, strategic
        card games. While most are designed for two or more players, several lend
        themselves to solo or patience-style play — and all of them are worth knowing if
        you enjoy classic card games. Below is a guide to ten Italian card games played
        with the traditional deck.
      </p>

      <p>
        For rules and guides, see the <Link to="/rules">Italian Card Game Rules</Link> page.
      </p>

      <h2>10 Italian Card Games Using the 40-Card Deck</h2>

      {GAMES.map(game => (
        <div key={game.name} style={{ marginBottom: '1.5rem' }}>
          <h3>
            {game.link ? (
              <Link to={game.link}>{game.name}</Link>
            ) : (
              game.name
            )}
          </h3>
          <p style={{ margin: '0.25rem 0 0.25rem' }}>{game.description}</p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#888' }}>
            {game.type}
          </p>
        </div>
      ))}

      <h2>About the Italian 40-Card Deck</h2>
      <p>
        All of the games above use a deck of 40 cards divided into four suits:{' '}
        <strong>Coins, Cups, Swords, and Batons</strong>. Each suit runs from Ace
        through 7, then Jack, Knight, and King — a different structure from the standard
        52-card deck, which gives Italian card games their distinct feel.
      </p>
      <p>
        The most accessible starting point is <Link to="/play-scopa-online">Scopa</Link>,
        which you can play free in your browser right now. For Briscola, the{' '}
        <Link to="/how-to-play-briscola">Briscola guide</Link> covers everything you need
        to know before playing.
      </p>

    </div>
  );
}
