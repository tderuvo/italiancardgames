import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ScopaStrategyPage() {
  useEffect(() => {
    document.title = 'Scopa Strategy Guide | Tips to Win at Scopa';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn practical Scopa strategy tips including table control, card tracking, protecting the Settebello, and planning scopas.';
    }
  }, []);

  return (
    <div className="seo-section">

      <h1>Scopa Strategy Guide</h1>

      <p>
        Scopa is easy to pick up — but once you start paying attention to what's on the
        table, what's been played, and what your opponent is likely holding, the game opens
        up in a completely different way. This guide covers the practical thinking that
        separates a player who wins occasionally from one who wins consistently. If you
        haven't played before, try{' '}
        <Link to="/play-scopa-online">Play Scopa Online</Link> to get a feel for the
        mechanics first.
      </p>

      <h2>Think Before Capturing</h2>
      <p>
        The instinct to grab a card the moment you can is strong — but it's often the wrong
        move. Before you capture, ask yourself what you're leaving behind. Taking one card
        now might gift your opponent an easy combination on their next turn. Sometimes the
        smarter play is to place a card on the table and let the position build in your
        favour. Patience is a real weapon in Scopa.
      </p>
      <p>
        This is especially true when you're deciding between two possible captures. One
        might score you a point now; the other might deny your opponent a point later. The
        second one usually wins.
      </p>

      <h2>Control the Table</h2>
      <p>
        A strong Scopa player is always thinking about what the table looks like for their
        opponent. If you leave a 3 and a 4 on the table, you've handed your opponent a free
        capture with any 7. Try to leave combinations that are hard to match — odd totals,
        spread-out values, or cards that require your opponent to use something they might
        not have.
      </p>
      <p>
        When you have a choice, leave the table in a position that forces awkward plays.
        Crowding the table with low-value cards your opponent can't use is also a valid
        tactic — it limits their options and can push them into placing cards instead of
        capturing.
      </p>

      <h2>Watch Which Cards Have Been Played</h2>
      <p>
        Card tracking is one of the highest-value skills you can develop. There are only 40
        cards in the deck, and once you know the structure — four suits, Ace through 7 plus
        Jack, Knight, and King — you can start keeping a rough mental tally of what's gone.
        If three 5s have already been captured, you know only one remains. That changes how
        you play cards that would normally target a 5.
      </p>
      <p>
        You don't need a perfect memory. Focus on the cards that matter most: the 7 of
        Coins, the high Coins cards, and cards that complete dangerous combinations. As the
        deck gets smaller, knowing what's left becomes critical.
      </p>

      <h2>Protect the Settebello</h2>
      <p>
        The 7 of Coins (Settebello) scores a point on its own — no category needed, no
        comparison required. That makes it the most individually valuable card in the game.
        When it appears on the table, don't leave it sitting there unless you genuinely
        have no way to take it.
      </p>
      <p>
        But protecting the Settebello isn't only about capturing it. It's also about not
        setting up a situation where your opponent captures it easily. If the Settebello is
        on the table and you play a card that doesn't take it, make sure you're not also
        giving your opponent the exact card they need to grab it next turn. For the full
        scoring picture, review the{' '}
        <Link to="/scopa-rules">Scopa Rules</Link>.
      </p>

      <h2>Plan Future Captures</h2>
      <p>
        Think two or three moves ahead, not just one. If you play a 3 onto the table now
        and your opponent has nothing to match it, you might be setting up a future capture
        with your own 3 from another round — or using the 3 as bait for a combination you
        control.
      </p>
      <p>
        Scopa traps work the same way. If you can arrange the table so that no matter what
        your opponent plays, you get to clear it, that's a free Scopa point. These setups
        take practice to spot, but you'll start to recognize them once you're thinking a
        move ahead. Don't just react to the table — try to shape it.
      </p>

      <h2>Learn Opponent Habits</h2>
      <p>
        People fall into patterns. Some players always grab the highest-value card
        available. Others avoid placing cards on the table and take any capture they can
        find, even a bad one. Some chase Scopas aggressively even when it costs them
        Coins.
      </p>
      <p>
        Once you notice a tendency, you can use it. If your opponent always grabs the
        Coins cards first, you can use that predictability to control which cards they take
        — and which ones they leave for you. Against the computer, the same applies: learn
        the patterns, then exploit them.
      </p>

      <h2>Beginner Mistakes</h2>
      <ul>
        <li>
          <strong>Capturing immediately without checking the table.</strong> Always pause
          before grabbing a card. Ask what you're leaving and whether it helps your
          opponent.
        </li>
        <li>
          <strong>Ignoring the Settebello.</strong> Newer players sometimes overlook the 7
          of Coins because they're focused on counting cards. It's worth a point by itself
          — never ignore it.
        </li>
        <li>
          <strong>Chasing Scopas at the wrong moment.</strong> A Scopa earns a bonus
          point, but not if it costs you control of the Coins or lets your opponent dominate
          the endgame. Pick your moments.
        </li>
        <li>
          <strong>Placing powerful cards for no reason.</strong> When you can't capture,
          think carefully about which card you put on the table. Placing a high Coins card
          is often a costly mistake.
        </li>
        <li>
          <strong>Forgetting what's been played.</strong> Even rough card tracking is much
          better than none. Start with just watching the Coins suit and the 7s — it will
          immediately sharpen your decisions.
        </li>
      </ul>

      <p>
        If you want to review the basics before going deeper,{' '}
        <Link to="/how-to-play-scopa">How to Play Scopa</Link> covers everything from
        setup through scoring in plain language.
      </p>

      <h2>Practice Your Strategy</h2>
      <p>
        The best way to improve at Scopa is to play regularly and learn to read the table
        over time. Strategy clicks when you've seen a situation enough times to recognise
        it — and the only way to get there is reps.
      </p>
      <p>
        <Link to="/play-scopa-online" className="game-card__btn">
          Play Scopa Online →
        </Link>
      </p>

      <p style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
