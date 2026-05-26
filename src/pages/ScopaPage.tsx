import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScopaGame from '../games/scopa/ScopaGame';

export default function ScopaPage() {
  useEffect(() => {
    document.title = 'Play Scopa Online – Free Italian Card Game (No Download)';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Play Scopa online for free using a traditional 40-card Italian deck. No signup or download needed — start playing instantly in your browser.';
    }
  }, []);

  return (
    <div className="page-scopa">

      {/* ── Page heading ── */}
      <div className="page-scopa__hero">
        <h1>Play Scopa Online – Free Italian Card Game</h1>
      </div>

      {/* ── Above-game helper text ── */}
      <p className="page-scopa__subhead">
        Play instantly in your browser using a traditional Italian 40-card deck.
      </p>

      {/* ── Game ── */}
      <section aria-label="Scopa card game">
        <ScopaGame />
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '1rem' }}>
          Press "New Game" to start, or scroll down to learn the rules.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem' }}>
          New to the game? <Link to="/how-to-play-scopa">Learn how to play Scopa</Link> →
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem' }}>
          Want to improve? <Link to="/scopa-strategy">Read our Scopa Strategy Guide →</Link>
        </p>
      </section>

      {/* ── Intro paragraph — moved below game ── */}
      <div className="page-scopa__intro">
        <p>
          Play Scopa online for free — no download, no signup required. This browser
          version uses a traditional 40-card Italian deck and lets you play against the
          computer any time you like. This page lets you play Scopa online for free in a
          simple, fast browser experience.
        </p>
      </div>

      {/* ── SEO content ── */}
      <div className="seo-section">

        <h2>What is Scopa?</h2>
        <p>
          Scopa — Italian for "broom" — is one of Italy's most played card games, with
          roots going back centuries. The name comes from the goal of sweeping the table
          clean: if you capture every face-up card in one move, you score a bonus point
          called a <em>scopa</em>. The Scopa card game is one of the most popular
          traditional games in Italy.
        </p>
        <p>
          The game uses a traditional 40-card Italian deck with four suits:{' '}
          <strong>Coins, Cups, Swords, and Batons</strong>. Each suit runs from Ace
          through 7, then Jack, Knight, and King — a different structure from a standard
          deck, and one that gives Scopa its distinct character.
        </p>
        <p>
          Scopa is quick to learn but rewards attention and planning. A round usually
          takes ten to fifteen minutes, and a single well-timed play can change the
          outcome. Scopa has been played across Italy for centuries and remains a staple
          in Italian card game culture. If you're just getting started, see our{' '}
          <Link to="/how-to-play-scopa">step-by-step Scopa guide</Link>.
        </p>

        <h2>How to Play Scopa</h2>
        <ul>
          <li>Four cards are dealt face-up to the table. Each player receives three cards.</li>
          <li>On your turn, play one card from your hand.</li>
          <li>
            <strong>To capture:</strong> play a card that matches the rank of a table card,
            or matches the sum of two or more table cards (for example, a 7 captures a 4
            and a 3).
          </li>
          <li>
            If you can't capture anything, place your card face-up on the table — it
            becomes available for your opponent.
          </li>
          <li>When both hands are empty, three more cards are dealt to each player.</li>
          <li>
            Play continues until the deck is finished. The last player to make a capture
            collects any cards left on the table.
          </li>
        </ul>

        <h2>Scopa Scoring</h2>
        <p>Points are counted at the end of each round:</p>
        <ul>
          <li><strong>Most cards captured</strong> — 1 point</li>
          <li><strong>Most Coins cards captured</strong> — 1 point</li>
          <li>
            <strong>The 7 of Coins (Settebello)</strong> — 1 point. This single card is
            worth a point on its own and is the most sought-after card in the game.
          </li>
          <li>
            <strong>Each Scopa</strong> — 1 point every time you clear the entire table
            with one play.
          </li>
        </ul>
        <p>
          Most games are played to 11 points across multiple rounds. The first player to
          reach the target wins.
        </p>

        <h2>Scopa Strategy Tips</h2>
        <ul>
          <li>
            <strong>Capture the 7 of Coins early.</strong> The Settebello scores a point
            by itself. Don't leave it sitting on the table if you can help it.
          </li>
          <li>
            <strong>Focus on Coins.</strong> Coins cards count in two scoring categories —
            most Coins and the Settebello — so they're generally worth more than cards from
            other suits.
          </li>
          <li>
            <strong>Set up a Scopa.</strong> Clearing the table earns an extra point. If
            you can see the opportunity, it's usually worth playing toward it.
          </li>
          <li>
            <strong>Be careful what you leave behind.</strong> When you can't capture,
            avoid leaving low-value cards that your opponent can easily match.
          </li>
          <li>
            <strong>Track what's been played.</strong> In the final rounds, knowing which
            cards are left helps you anticipate your opponent's moves and plan your captures.
          </li>
        </ul>

        <h2>More Italian Card Games</h2>
        <p>
          Scopa is a great starting point, but there's more to explore.{' '}
          <Link to="/">Italian Card Games</Link> is home to classic games played with the
          traditional 40-card deck.{' '}
          <Link to="/play-briscola-online">Play Briscola online</Link> — Italy's most popular
          trick-taking game — now available for free in your browser.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>What is Scopa?</h3>
        <p>
          Scopa is a traditional Italian card game for two players (or two teams). You
          capture cards from a shared table by matching ranks or sums, and score points
          for the most cards, the most Coins, the 7 of Coins, and clearing the table.
        </p>

        <h3>Can I play Scopa online for free?</h3>
        <p>
          Yes — this version is completely free. It runs in your browser with no account,
          no app, and no download needed.
        </p>

        <h3>How do you play Scopa online?</h3>
        <p>
          You can play Scopa online for free directly in your browser on this page. No
          download or signup is required.
        </p>

        <h3>What cards are used in Scopa?</h3>
        <p>
          Scopa uses a 40-card Italian deck with four suits: Coins, Cups, Swords, and
          Batons. Each suit has ten cards: Ace, 2 through 7, Jack, Knight, and King.
        </p>

        <h3>Is Scopa easy to learn?</h3>
        <p>
          Yes. The basic rules take about five minutes to understand. The game gets more
          interesting as you start thinking about which cards to capture and which to leave
          on the table.
        </p>

      </div>
    </div>
  );
}
