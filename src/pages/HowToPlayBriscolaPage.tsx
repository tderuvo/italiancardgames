import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HowToPlayBriscolaPage() {
  useEffect(() => {
    document.title = 'How to Play Briscola – Simple Rules for Beginners | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn how to play Briscola in minutes. Simple beginner rules for the classic Italian trick-taking card game — setup, card values, scoring, and strategy explained.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>How to Play Briscola (Simple Rules for Beginners)</h1>

      <p>
        Briscola is one of Italy's most popular traditional card games, played with a
        40-card Italian deck. The rules are simple enough to learn in a few minutes, but
        the game rewards good memory and smart use of your trump cards.
      </p>

      <p>
        <Link to="/play-scopa-online">Play Scopa Online →</Link>
      </p>

      <h2>What is Briscola?</h2>
      <p>
        Briscola is a trick-taking card game with Italian roots. Two players (or four in
        team play) compete to capture cards with the highest combined point value. Unlike
        many trick-taking games, you don't have to follow suit — which keeps every turn
        interesting and opens up plenty of room for strategy.
      </p>

      <h2>The Deck</h2>
      <p>
        Briscola uses a traditional 40-card Italian deck with four suits:{' '}
        <strong>Coins, Cups, Swords, and Batons</strong>. Each suit has ten cards: Ace,
        2 through 7, Jack, Knight, and King. If you only have a standard 52-card deck,
        you can remove the 8s, 9s, and 10s to play.
      </p>

      <h2>Setup</h2>
      <ul>
        <li>Briscola is usually played by two players.</li>
        <li>Each player is dealt three cards to start.</li>
        <li>
          One card is turned face-up and set aside — its suit becomes the{' '}
          <strong>trump suit (briscola)</strong> for the entire round.
        </li>
        <li>The remaining deck is placed face-down. The face-up trump card sits beneath it.</li>
        <li>After each trick, both players draw one card from the deck.</li>
      </ul>

      <h2>How the Game Works</h2>
      <p>
        Players take turns leading a card. The other player responds with any card from
        their hand — there is no requirement to follow suit. The trick goes to whoever
        played the higher trump card. If neither card is trump, the trick goes to whoever
        played the higher card of the suit that was led. Points are counted from the
        cards captured. Play continues until all cards are gone.
      </p>

      <h2>Card Values in Briscola</h2>
      <p>
        Not all cards are worth the same. Here are the point values, from highest to
        lowest:
      </p>
      <ul>
        <li><strong>Ace</strong> — 11 points</li>
        <li><strong>3</strong> — 10 points</li>
        <li><strong>King</strong> — 4 points</li>
        <li><strong>Knight</strong> — 3 points</li>
        <li><strong>Jack</strong> — 2 points</li>
        <li><strong>7, 6, 5, 4, 2</strong> — 0 points</li>
      </ul>
      <p>
        Total points in the deck add up to 120. The ranking for winning tricks follows
        the same order: Ace beats 3, 3 beats King, and so on down to the number cards.
      </p>

      <h2>Scoring</h2>
      <p>
        At the end of the round, each player totals the points in their captured cards.
        The player with <strong>61 or more points wins</strong>. If both players end up
        with exactly 60, the round is a draw.
      </p>
      <p>
        In longer games, players track wins across multiple rounds and play to an agreed
        total — typically the first to three wins takes the match.
      </p>

      <h2>Basic Strategy Tips</h2>
      <ul>
        <li>
          <strong>Save your Aces and 3s.</strong> These are your highest-value cards.
          Use them to capture the opponent's high-value cards, not their blanks.
        </li>
        <li>
          <strong>Use trump cards carefully.</strong> Don't waste a trump card on a trick
          that holds no points. Save them for when the stakes are higher.
        </li>
        <li>
          <strong>Track the Aces and 3s.</strong> If you know the opponent's Ace has
          already been played, you can lead more freely with your own high cards.
        </li>
        <li>
          <strong>Lead with low cards when unsure.</strong> Throwing out a worthless card
          forces your opponent to reveal something about their hand without giving away
          your own.
        </li>
        <li>
          <strong>Watch the draw pile.</strong> As it runs down, you know roughly what's
          left. The endgame is where memory and planning matter most.
        </li>
      </ul>

      <p>
        An online version of Briscola may be added in the future. In the meantime, you
        can try <Link to="/play-scopa-online">playing Scopa</Link> — another classic from
        the same Italian card game tradition.
      </p>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
