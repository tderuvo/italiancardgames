import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BriscolaGame from '../games/briscola/BriscolaGame';

export default function BriscolaPage() {
  useEffect(() => {
    document.title = 'Play Briscola Online – Free Italian Card Game';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Play Briscola online for free with a traditional 40-card Italian deck. Learn the rules, card values, scoring, and basic strategy.';
    }

    // Canonical tag
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://italiancardgames.com/play-briscola-online';

    return () => {
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, []);

  return (
    <div className="page-briscola">

      {/* ── Page heading ── */}
      <div className="page-briscola__hero">
        <h1>Play Briscola Online – Free Italian Card Game</h1>
      </div>

      {/* ── Intro ── */}
      <p className="page-briscola__subhead">
        Play Briscola online for free using a traditional 40-card Italian deck. No
        download, no signup — just deal, play, and learn one of Italy's most popular
        card games.
      </p>

      {/* ── Game ── */}
      <section aria-label="Briscola card game">
        <BriscolaGame />
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '1rem' }}>
          Press "New Game" to start, or scroll down to learn the rules.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem' }}>
          Want a deeper dive? <Link to="/how-to-play-briscola">Read the full Briscola guide →</Link>
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem' }}>
          Also enjoy: <Link to="/play-scopa-online">Play Scopa Online →</Link>
        </p>
      </section>

      {/* ── Intro paragraph ── */}
      <div className="page-briscola__intro">
        <p>
          Briscola is one of Italy's oldest and most beloved card games — a trick-taking
          classic played in homes, bars, and piazzas for centuries. This browser version
          lets you play Briscola online for free any time, against the computer, using a
          traditional 40-card Italian (Neapolitan) deck. No app, no account, no download.
        </p>
      </div>

      {/* ── SEO content ── */}
      <div className="seo-section">

        <h2>What is Briscola?</h2>
        <p>
          Briscola is a classic Italian trick-taking card game played with a traditional
          40-card deck. Unlike many trick-taking games, there is no requirement to follow
          suit — which means every single card in your hand can influence the outcome of
          any trick.
        </p>
        <p>
          The name "Briscola" refers to the trump suit, determined at the start of each
          game by turning up a card from the deck. That card's suit becomes the{' '}
          <strong>briscola</strong> — the trump suit whose cards beat all others when they
          are played.
        </p>
        <p>
          Briscola is typically played by two players (or four in partnerships), and a
          full game is 20 tricks. The player or team that accumulates more than 60 of
          the 120 available points wins. For a full rule walkthrough, see our{' '}
          <Link to="/how-to-play-briscola">How to Play Briscola guide</Link>.
        </p>

        <h2>How to Play Briscola</h2>
        <ul>
          <li>
            <strong>Setup:</strong> Shuffle the 40-card deck. Deal 3 cards to each
            player. Turn up the next card — its suit is the <em>briscola</em> (trump).
            Slide it face-up under the draw pile so it's visible until drawn last.
          </li>
          <li>
            <strong>Your turn:</strong> Play any card from your hand. There is no
            requirement to follow suit or play trump — you may play freely.
          </li>
          <li>
            <strong>Trick resolution:</strong>
            <ol style={{ paddingLeft: '1.25rem', marginTop: '0.4rem' }}>
              <li>If one card is trump (briscola) and the other is not, trump wins.</li>
              <li>If both cards are trump, the higher-ranked briscola card wins.</li>
              <li>If both cards share the same non-trump suit, the higher-ranked card wins.</li>
              <li>If they are different non-trump suits, the <em>lead card</em> wins.</li>
            </ol>
          </li>
          <li>
            <strong>Drawing:</strong> After each trick, the winner draws first, then
            the loser draws, restoring both hands to 3 cards. Continue until the deck
            and hands are empty (20 tricks total).
          </li>
          <li>
            <strong>Scoring:</strong> Count the points in your captured pile. The player
            with 61 or more out of 120 total wins the round.
          </li>
        </ul>

        <h2>Briscola Card Values</h2>
        <p>
          Only five ranks score points — the rest are worth nothing but serve as
          tactical tools to throw off your opponent or steal trump cards.
        </p>
        <div style={{ overflowX: 'auto', margin: '0.75rem 0' }}>
          <table style={{
            borderCollapse: 'collapse',
            fontSize: '0.92rem',
            width: '100%',
            maxWidth: '420px',
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '0.4rem 0.75rem 0.4rem 0', color: 'var(--text)' }}>Card</th>
                <th style={{ textAlign: 'left', padding: '0.4rem 0.75rem', color: 'var(--text)' }}>Points</th>
                <th style={{ textAlign: 'left', padding: '0.4rem 0', color: 'var(--text)' }}>Trick Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ace',   '11', '1st (strongest)'],
                ['Three', '10', '2nd'],
                ['King',  '4',  '3rd'],
                ['Knight','3',  '4th'],
                ['Jack',  '2',  '5th'],
                ['Seven', '0',  '6th'],
                ['Six',   '0',  '7th'],
                ['Five',  '0',  '8th'],
                ['Four',  '0',  '9th'],
                ['Two',   '0',  '10th (weakest)'],
              ].map(([card, pts, rank]) => (
                <tr key={card} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.35rem 0.75rem 0.35rem 0', color: 'var(--text-muted)' }}>{card}</td>
                  <td style={{ padding: '0.35rem 0.75rem', color: pts !== '0' ? 'var(--green-dark)' : 'var(--text-muted)', fontWeight: pts !== '0' ? '700' : '400' }}>{pts}</td>
                  <td style={{ padding: '0.35rem 0', color: 'var(--text-muted)' }}>{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The total points across all 40 cards is always <strong>120</strong>. You need
          at least <strong>61</strong> to win a round.
        </p>

        <h2>Basic Briscola Strategy</h2>
        <ul>
          <li>
            <strong>Protect your Aces and Threes.</strong> These are your highest-value
            cards (11 and 10 points each). Don't throw them into tricks you're likely to
            lose — save them for tricks you know you can win.
          </li>
          <li>
            <strong>Use low-value cards to fish for trump.</strong> When you lead with a
            zero-point card, you force your opponent to decide whether to waste a trump or
            surrender the lead. Watching their response tells you a lot.
          </li>
          <li>
            <strong>Count trump cards.</strong> There are 10 trump cards per suit. As
            the game progresses, tracking how many trump cards have been played tells you
            whether it's safe to play your trump Ace or Three.
          </li>
          <li>
            <strong>Lead with your King or Knight to bait a response.</strong> If your
            opponent plays a higher trump or their own King, you learn what they're holding.
            If they play a zero-point card, you've won a modest trick cheaply.
          </li>
          <li>
            <strong>The last tricks are the most important.</strong> Late in the game,
            every card played is visible to both sides. Use what you know about the remaining
            cards to time your high-value plays perfectly.
          </li>
        </ul>

        <h2>Briscola vs Scopa</h2>
        <p>
          Both Briscola and <Link to="/play-scopa-online">Scopa</Link> use the same
          traditional 40-card Italian deck, but they are very different games.
        </p>
        <ul>
          <li>
            <strong>Briscola</strong> is a trick-taking game — you play one card, your
            opponent plays one card, and the better card takes both. Points come from the
            values of the cards you capture over the course of 20 tricks.
          </li>
          <li>
            <strong>Scopa</strong> is a capture game — you play cards that match the sum
            of cards on a shared table, sweeping them into your pile. Points come from
            number of captures, Coins cards, and the special 7 of Coins (Settebello).
          </li>
          <li>
            Briscola is generally considered more accessible to beginners because you
            never have to calculate sums. Scopa rewards arithmetic and planning.
          </li>
          <li>
            Both games reward memory: in Briscola you track which trump cards are out, in
            Scopa you watch which cards remain on the table.
          </li>
        </ul>
        <p>
          See our <Link to="/scopa-rules">Scopa rules page</Link> for a full comparison,
          or try the <Link to="/scopa-strategy">Scopa strategy guide</Link> if you
          want to sharpen your skills in both games.
        </p>

        <h2>More Italian Card Games</h2>
        <p>
          Briscola and Scopa are the two most popular Italian card games, but the
          tradition runs deeper. Explore{' '}
          <Link to="/italian-solitaire">Italian Solitaire</Link> for a single-player
          experience with the same 40-card deck, or visit the{' '}
          <Link to="/rules">Italian card games rules page</Link> for an overview of
          the full tradition.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Can I play Briscola online for free?</h3>
        <p>
          Yes — this version runs entirely in your browser. No account, no app, and
          no download needed.
        </p>

        <h3>How many cards do you use in Briscola?</h3>
        <p>
          Briscola uses a standard 40-card Italian deck with four suits (Coins, Cups,
          Swords, Batons) and ten cards per suit (Ace through 7, Jack, Knight, King).
        </p>

        <h3>What is the briscola card?</h3>
        <p>
          At the start of each game, one card is turned face-up from the deck. That
          card's suit becomes the trump suit for the entire game — and those trump cards
          are collectively called the briscola.
        </p>

        <h3>How do you win Briscola?</h3>
        <p>
          Capture cards with a total point value greater than 60 (out of 120). The
          Ace (11 pts) and Three (10 pts) are the most valuable — securing even a
          handful of these gives you a strong foundation.
        </p>

        <h3>Is Briscola the same as Scopa?</h3>
        <p>
          No — both use the same 40-card deck but the mechanics are completely
          different. Briscola is a trick-taking game; Scopa is a capture/sum game.
          See our <Link to="/scopa-rules">Scopa rules</Link> for details.
        </p>

      </div>
    </div>
  );
}
