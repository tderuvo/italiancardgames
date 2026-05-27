import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScopaTutorialVideo from '../components/ScopaTutorialVideo';

export default function HowToPlayScopaPage() {
  useEffect(() => {
    document.title = 'How to Play Scopa – Simple Rules for Beginners | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn how to play Scopa in minutes. Simple beginner rules for the classic Italian card game — setup, capturing, scoring, and basic strategy explained.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>How to Play Scopa (Simple Rules for Beginners)</h1>

      <p>
        Scopa is a traditional Italian card game played with a 40-card deck. The goal is to
        capture cards from the table by matching values or combinations — it's easy to pick
        up and fun to play. If you've never played before, this guide will get you started in
        a few minutes.
      </p>

      <p>
        <Link to="/play-scopa-online">Play Scopa Online →</Link>
      </p>

      <h2>What is Scopa?</h2>
      <p>
        Scopa — Italian for "broom" — is one of Italy's most popular traditional card games.
        Players take turns playing cards from their hand to capture face-up cards on the table.
        Capture the most cards, collect the right suits, and clear the table to score points.
        The first to reach 11 points wins.
      </p>

      <h2>Setup</h2>
      <ul>
        <li>Scopa is played by two players (or two teams of two).</li>
        <li>Four cards are dealt face-up to the table at the start of each round.</li>
        <li>Each player is dealt three cards to their hand.</li>
        <li>When both hands are empty, three more cards are dealt to each player.</li>
        <li>This continues until the deck is used up.</li>
      </ul>

      <h2>How the Game Works</h2>
      <p>
        Players take turns. On your turn, you play one card from your hand. You either capture
        cards from the table or place your card face-up on the table if you can't capture
        anything. The round ends when all cards have been played. Points are then counted, and
        a new round begins. Play continues until one player reaches 11 points.
      </p>

      <h2>Capturing Rules</h2>
      <p>
        You can capture in two ways:
      </p>
      <ul>
        <li>
          <strong>Match a single card:</strong> play a card with the same value as a table
          card. A 5 captures a 5.
        </li>
        <li>
          <strong>Match a combination:</strong> play a card whose value equals the sum of two
          or more table cards. For example, a 7 captures a 4 and a 3 (4 + 3 = 7).
        </li>
      </ul>
      <p>
        If both options are available, you must capture the single matching card — not the
        combination. If you can't capture anything, your card stays on the table.
      </p>
      <p>
        If you clear every card from the table in one move, that's a <strong>Scopa</strong> —
        and it earns you a bonus point.
      </p>

      <h2>Scoring</h2>
      <p>Points are counted at the end of each round:</p>
      <ul>
        <li><strong>Most cards captured</strong> — 1 point</li>
        <li><strong>Most Coins cards captured</strong> — 1 point</li>
        <li>
          <strong>7 of Coins (Settebello)</strong> — 1 point. This single card is worth a
          point on its own.
        </li>
        <li>
          <strong>Each Scopa</strong> — 1 point every time you sweep the entire table clean.
        </li>
      </ul>
      <p>The first player to reach 11 points across multiple rounds wins the game.</p>

      <h2>Basic Strategy Tips</h2>
      <ul>
        <li>
          <strong>Go for the 7 of Coins.</strong> The Settebello scores a point by itself —
          don't let it sit on the table if you can capture it.
        </li>
        <li>
          <strong>Collect Coins cards.</strong> Coins count in two scoring categories, so
          they're more valuable than cards from other suits.
        </li>
        <li>
          <strong>Watch for Scopa opportunities.</strong> Clearing the table earns an extra
          point. If you can see the setup, play toward it.
        </li>
        <li>
          <strong>Be careful what you leave behind.</strong> If you can't capture, avoid
          leaving cards that your opponent can easily match on their next turn.
        </li>
      </ul>

      <p>
        <Link to="/play-scopa-online">Play Scopa Online →</Link>
      </p>

      <ScopaTutorialVideo />

      <h2>Next Step</h2>
      <p>
        Now that you know the rules, take your game further with practical tips on reading
        the table, protecting the Settebello, and planning ahead.{' '}
        <Link to="/scopa-strategy">Read the Scopa Strategy Guide →</Link>
      </p>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
