import { useEffect } from 'react';
import ScopaGame from '../games/scopa/ScopaGame';

export default function ScopaPage() {
  useEffect(() => {
    document.title = 'Play Scopa Online Free — Italian Card Game';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Play Scopa online for free against the computer. A classic Italian card game using a traditional 40-card Neapolitan deck. No download, no signup.';
    }
  }, []);

  return (
    <div className="page-scopa">

      {/* ── Page heading ── */}
      <div className="page-scopa__hero">
        <h1>Play Scopa Online</h1>
        <p>
          A free, browser-based version of Scopa — Italy's most beloved card game —
          using a traditional 40-card Neapolitan deck. No download or sign-up needed.
        </p>
      </div>

      {/* ── Game ── */}
      <section aria-label="Scopa card game">
        <ScopaGame />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SEO content sections below the game.
          Keep this text accurate and helpful — it helps Google understand
          the page topic and improves ranking for "play scopa online" queries.
          ══════════════════════════════════════════════════════════════════ */}

      <div className="seo-section">

        <h2>What is Scopa?</h2>
        <p>
          Scopa (Italian for "broom") is one of the most popular card games in Italy.
          The goal is to sweep — or <em>scopare</em> — the table by capturing all the
          face-up cards in a single move, which earns you a bonus point called a{' '}
          <em>scopa</em>. The game is played with a traditional 40-card Italian deck
          divided into four suits: <strong>Coins (Denari), Cups (Coppe), Swords (Spade),
          and Batons (Bastoni)</strong>.
        </p>
        <p>
          Scopa can be played by two players or two teams and is commonly enjoyed across
          all regions of Italy. It is fast-paced, strategic, and simple enough to learn
          in minutes yet deep enough to remain interesting for a lifetime.
        </p>

        <h2>How to Play Scopa</h2>
        <p>
          At the start of the game, four cards are dealt face-up to the table. Each player
          receives three cards. On your turn, you play one card from your hand and attempt
          to capture table cards. You can capture:
        </p>
        <ul>
          <li>A <strong>single table card with the same rank</strong> as your played card.</li>
          <li>
            A <strong>combination of table cards whose ranks sum</strong> to your played
            card's rank (for example, playing a 7 to capture a 4 and a 3).
          </li>
        </ul>
        <p>
          If you cannot capture any cards, you must place your card face-up on the table.
          When both players have used all three cards, three more are dealt to each, and
          play continues until the deck is exhausted. The player who makes the final
          capture takes any remaining table cards.
        </p>

        <h2>Scopa Scoring</h2>
        <p>At the end of each round, points are awarded as follows:</p>
        <ul>
          <li>
            <strong>Most cards captured:</strong> 1 point to the player with the most cards.
          </li>
          <li>
            <strong>Most Coins captured:</strong> 1 point to the player with the most
            Coins cards.
          </li>
          <li>
            <strong>Settebello (7 of Coins):</strong> 1 point to whoever captured the
            Seven of Coins, the most prized card in the deck.
          </li>
          <li>
            <strong>Scopa:</strong> 1 point for each time a player clears the entire table
            with a single capture. This is the most exciting moment in the game.
          </li>
        </ul>
        <p>
          Games are often played to 11 or 21 points over multiple rounds. The first player
          to reach the target score wins.
        </p>

        <h2>Scopa Strategy Tips</h2>
        <ul>
          <li>
            <strong>Protect the Settebello.</strong> The 7 of Coins is worth a point on
            its own. If it's on the table, try to capture it immediately. If it's in your
            hand, use it wisely.
          </li>
          <li>
            <strong>Count Coins.</strong> Since Coins is a scoring suit both for quantity
            and for the Settebello, prioritise capturing Coins cards over other suits when
            you have a choice.
          </li>
          <li>
            <strong>Hunt for scope.</strong> Clearing the table earns a bonus point and
            is often worth engineering, even at the cost of other captures. Watch the table
            and plan ahead.
          </li>
          <li>
            <strong>Don't feed the table.</strong> When you must place a card on the table
            (no captures available), prefer cards that are hard to capture — avoid leaving
            low-value cards that your opponent can easily sweep with a high card.
          </li>
          <li>
            <strong>Track the deck.</strong> In the endgame, knowing which cards remain
            allows you to predict what your opponent may play and plan your captures
            accordingly.
          </li>
        </ul>

      </div>
    </div>
  );
}
