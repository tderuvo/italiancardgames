import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ScopaRulesPage() {
  useEffect(() => {
    document.title = 'Scopa Rules Explained (Complete Guide) | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Complete Scopa rules guide — deck, setup, capturing, Primiera scoring, and regional variations explained clearly for the classic Italian card game.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>Scopa Rules Explained (Complete Guide)</h1>

      <p>
        This page covers the full rules of Scopa, the classic Italian card game played
        with a traditional 40-card deck. Whether you are refreshing your knowledge or
        looking for a reliable reference, everything you need is below.
      </p>

      <p>
        <Link to="/play-scopa-online">Play Scopa Online →</Link>
      </p>

      <p>
        If you are new to the game, start with our{' '}
        <Link to="/how-to-play-scopa">beginner-friendly guide</Link> before reading on.
      </p>

      <h2>Overview</h2>
      <p>
        Scopa is a two-player (or two-team) card game in which players take turns
        playing cards from their hand to capture face-up cards on the table. Cards are
        captured by matching values — either a direct rank match or a combination of
        table cards that sum to the played card's rank. Points are scored at the end of
        each round based on what was captured. The first player to reach 11 points wins.
      </p>

      <h2>The Deck</h2>
      <p>
        Scopa uses a 40-card Italian (Neapolitan) deck divided into four suits:{' '}
        <strong>Coins, Cups, Swords, and Batons</strong>. Each suit contains ten cards:
        Ace (1), 2 through 7, Jack, Knight, and King. The Jack, Knight, and King carry
        face values of 8, 9, and 10 respectively for certain scoring calculations, but
        their rank order within the deck is Jack, Knight, King from lowest to highest.
      </p>

      <h2>Game Setup</h2>
      <ul>
        <li>Scopa is played by two players or two teams of two.</li>
        <li>
          At the start of each round, four cards are dealt face-up to the centre of the
          table.
        </li>
        <li>Each player receives three cards face-down to form their hand.</li>
        <li>
          If three or more Kings appear in the initial four table cards, the hand is
          redealt.
        </li>
        <li>
          When both players have played all cards in hand, three more cards are dealt to
          each. This continues until the deck is exhausted.
        </li>
      </ul>

      <h2>Gameplay Rules</h2>
      <p>
        Play alternates between the two players. On each turn, a player must play exactly
        one card from their hand face-up.
      </p>
      <ul>
        <li>
          <strong>Direct capture:</strong> if the played card matches the rank of a
          single table card, the player takes both cards into their capture pile.
        </li>
        <li>
          <strong>Combination capture:</strong> if the played card's value equals the
          sum of two or more table cards, the player may capture that group. For example,
          a 7 can capture a 4 and a 3 (4 + 3 = 7), or a 5 and a 2 (5 + 2 = 7).
        </li>
        <li>
          <strong>Priority rule:</strong> when a direct match is available, the player
          must take it and cannot choose a combination capture instead.
        </li>
        <li>
          <strong>Multiple combinations:</strong> if several valid combinations exist but
          no direct match, the player chooses which combination to take.
        </li>
        <li>
          <strong>No capture:</strong> if no capture is possible, the played card is
          placed face-up on the table and becomes available for future captures.
        </li>
      </ul>
      <p>
        At the end of the round, any cards remaining on the table go to the last player
        who made a capture. This does not count as a Scopa.
      </p>

      <h2>Scopa (Table Clears)</h2>
      <p>
        A <em>Scopa</em> ("broom") occurs when a player captures every card currently on
        the table in a single play, leaving it completely empty. Each Scopa earns one
        point immediately and is tracked separately throughout the round — typically by
        placing one of the captured cards face-up on top of the player's pile as a
        marker.
      </p>
      <p>
        A Scopa cannot be scored on the very last card of the round, even if the table
        is cleared — this is treated as a normal end-of-round sweep and earns no bonus.
      </p>

      <h2>Scoring System</h2>
      <p>Points are tallied at the end of each round. Each category is worth one point:</p>
      <ul>
        <li>
          <strong>Most cards</strong> — the player with the greater number of captured
          cards scores one point. Ties result in no point awarded.
        </li>
        <li>
          <strong>Most Coins</strong> — the player who captured the most cards of the
          Coins suit scores one point. Ties result in no point awarded.
        </li>
        <li>
          <strong>Settebello (7 of Coins)</strong> — the player who captured this single
          card scores one point regardless of any other result.
        </li>
        <li>
          <strong>Primiera</strong> — each player selects the highest-value card from
          each of the four suits in their capture pile, using a special Primiera ranking:
          7 (21 points), 6 (18), Ace (16), 5 (15), 4 (14), 3 (13), 2 (12),
          face cards (10). The player with the higher combined total scores one point.
          A player missing any suit cannot score Primiera.
        </li>
        <li>
          <strong>Scopas</strong> — each table clear scored during the round is worth one
          point.
        </li>
      </ul>
      <p>
        The maximum number of points in a single round is 6 (one per category) plus
        however many Scopas were scored. The first player to reach 11 points across
        multiple rounds wins the match.
      </p>

      <h2>Notes and Common Variations</h2>
      <p>
        Scopa rules are consistent in their essentials, but some details vary by region
        or household:
      </p>
      <ul>
        <li>
          <strong>Primiera</strong> is sometimes omitted in casual play, reducing the
          maximum per-round score to 4 plus Scopas.
        </li>
        <li>
          Some players rule that a Scopa on the final play of a round <em>does</em> count
          — agreement before the game avoids disputes.
        </li>
        <li>
          Target score is usually 11 but can be adjusted; 21 is common in longer matches.
        </li>
        <li>
          In four-player team games, partners sit across from each other and capture piles
          are combined for scoring.
        </li>
      </ul>

      <p>
        You can also learn{' '}
        <Link to="/how-to-play-briscola">how to play Briscola</Link>, another popular
        Italian card game played with the same 40-card deck.
      </p>

      <p>
        <Link to="/play-scopa-online">Play Scopa Online →</Link>
      </p>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
