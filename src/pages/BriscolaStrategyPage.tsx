import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BriscolaTutorialVideo from '../components/BriscolaTutorialVideo';

export default function BriscolaStrategyPage() {
  useEffect(() => {
    document.title = 'Briscola Strategy – Tips to Win at Italy\'s Classic Card Game';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn Briscola strategy, card management, trump timing, and scoring tactics to improve your game and win more tricks.';
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://italiancardgames.com/briscola-strategy');

    return () => {
      const c = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (c) c.remove();
    };
  }, []);

  return (
    <div className="seo-section">

      <h1>Briscola Strategy – Tips to Win at Italy's Classic Card Game</h1>

      <p>
        Briscola is one of the most widely played card games in Italy, and its reputation
        as a beginner-friendly game is well earned. The rules take about five minutes to
        learn. But the players who win consistently aren't the ones who got lucky — they're
        the ones who understand what's actually being contested each time a card hits the table.
      </p>

      <p>
        At its core, Briscola is a game about 120 points distributed across 40 cards. Your job
        is to capture more than 60 of them before your opponent does. That framing changes
        everything. You're not trying to win every trick — you're trying to win the valuable
        ones while giving up the ones that don't matter. Experienced players think in terms of
        points, not tricks. They know exactly which cards carry weight and plan accordingly.
      </p>

      <p>
        This guide assumes you already know the rules. If you're still learning the mechanics,
        start with the <Link to="/how-to-play-briscola">Briscola rules guide</Link> first, then
        come back here. If you want to put these ideas into practice right away, you can{' '}
        <Link to="/play-briscola-online">play Briscola online</Link> directly in your browser.
      </p>

      <h2>Learn the Value of Every Card</h2>

      <p>
        The most important thing a new Briscola player can do is memorise the point values.
        Not approximately — exactly. The scoring system in Briscola is unusual compared to most
        card games, and beginners who haven't internalised it make costly mistakes without
        realising it.
      </p>

      <p>
        Here are the values you need to know:
      </p>

      <ul>
        <li><strong>Ace — 11 points.</strong> The single most valuable card in the game.</li>
        <li><strong>Three — 10 points.</strong> Just as dangerous as the Ace, and often overlooked by beginners.</li>
        <li><strong>King — 4 points.</strong> Worth capturing; worth protecting.</li>
        <li><strong>Knight — 3 points.</strong> Modest value but contributes meaningfully late in the game.</li>
        <li><strong>Jack — 2 points.</strong> The lowest face card; still worth something.</li>
        <li><strong>7, 6, 5, 4, 2 — 0 points.</strong> These cards win tricks but score nothing.</li>
      </ul>

      <p>
        Total points in the deck: 120. You need 61 or more to win a round.
      </p>

      <p>
        Notice something about that distribution. The Ace and the Three together are worth 21
        points — more than a quarter of the total in just two cards. Across all four suits,
        those eight cards account for 84 of the 120 points in play. The game is largely decided
        by who captures Aces and Threes — in trump and out of it.
      </p>

      <p>
        The practical mistake beginners make is treating all cards as roughly equal. They'll
        throw a Three at a low-value trick because they want to win the hand, or lead their Ace
        of a non-trump suit without thinking about whether a trump card might take it. Once you
        see the deck as a collection of scoring weights rather than a collection of ranks, your
        whole approach to decision-making shifts.
      </p>

      <h2>Don't Waste Your Briscola</h2>

      <p>
        The trump suit — the briscola — gives you a powerful tool, and most beginners overuse
        it. The logic feels sound in the moment: you have trump cards, trump cards win tricks,
        so play them and collect points. But this thinking ignores what trump is actually worth.
      </p>

      <p>
        Each suit has ten cards. Your trump suit is one of those ten, which means ten of your
        forty cards are trump. That's a significant resource. A trump Ace or Three is
        simultaneously worth maximum points in scoring <em>and</em> capable of beating any
        non-trump card in any trick. Playing a trump card unnecessarily — on a trick worth zero
        points — is one of the most expensive mistakes in the game.
      </p>

      <p>
        The right time to play trump is when the trick contains points worth taking: an
        opponent's Ace, Three, or King sitting in a non-trump suit that you couldn't otherwise
        beat. The wrong time is to chase a 7, a 6, or any zero-value card just because you want
        the trick. Let your opponent have those. Trades that cost you a trump card to capture
        nothing are often the reason a 60–60 game tilts the wrong way.
      </p>

      <p>
        There's also a defensive dimension. If your opponent leads with a high non-trump card —
        say an Ace of Swords when the briscola is Coins — they may be hoping to flush out your
        trump. Throwing a low trump to beat it looks like a win but may cost you the trump card
        you need to capture their trump Ace two tricks later. Sometimes the smarter play is to
        concede the trick entirely and preserve your resources.
      </p>

      <h2>Track High Cards</h2>

      <p>
        There are 40 cards in the deck and 20 tricks in a full game. By the halfway point, you
        should have a rough sense of which high-value cards have already been played or captured.
        This isn't about memorising the whole deck — it's about tracking the cards that decide
        the outcome.
      </p>

      <p>
        Start with the Aces. There are four of them, worth 11 points each. Every time an Ace
        is captured — by you or your opponent — make a mental note. By the end of the game, if
        you've captured two Aces and you know your opponent captured one, the fourth is still
        unaccounted for. If it's in their hand, playing into them carelessly is expensive.
        If it hasn't appeared yet, it might be sitting in the draw pile waiting to be dealt.
      </p>

      <p>
        The same logic applies to the Threes. Four Threes, 10 points each, 40 points total.
        Knowing how many are still in play tells you how much the endgame scoring can still
        shift. If three Threes are already captured and split evenly, the fourth one is the
        last major swing available, and both players know it.
      </p>

      <p>
        Tracking also reveals opponent tendencies. If your opponent leads with low cards
        consistently, they're likely holding high cards they're protecting. If they suddenly
        switch to leading trump, they may be running out of points and trying to change the
        dynamic. Reading those patterns helps you decide when to hold back and when to commit.
      </p>

      <h2>Force Bad Decisions</h2>

      <p>
        Briscola has no follow-suit requirement. You can play any card you like in response to
        any lead. This is what makes the game strategically interesting — and what separates
        thoughtful players from reactive ones. The freedom to play anything means you can use
        your cards to shape your opponent's choices, not just respond to them.
      </p>

      <p>
        The simplest version of this is the weak lead. You start a trick with a zero-value card
        — a 6, a 5, a 2 — not because you expect to win anything, but because you want
        information. Your opponent has to respond. If they play a high card to take the trick,
        they've spent something real to capture nothing. If they throw away a low card, you've
        confirmed they might be protecting something good. Either way, you've learned something
        at minimal cost.
      </p>

      <p>
        The more advanced version is baiting. You lead with a non-trump card that looks
        tempting — a Jack or Knight in a suit where your opponent might hold the matching Ace.
        If they take it, you've drawn out one of their better cards in exchange for a small
        loss. If they don't take it, the card sits on the table for a future trick. This kind of
        play is most effective late in the game when both hands are thinner and each card
        represents a larger proportion of remaining options.
      </p>

      <p>
        Protecting valuable cards until later follows the same logic in reverse. If you hold a
        trump Ace and lead early with your other trump cards, you're thinning the field and
        building toward a position where that Ace is the most powerful card left in the game.
        Patience is a real tactical resource — the player who plays their strongest card at
        exactly the right moment usually wins.
      </p>

      <h2>Think About the Last Few Tricks</h2>

      <p>
        In Briscola, the final three or four tricks carry disproportionate weight. By that
        point the draw pile is empty, both hands are small, and every card played is one of a
        very limited remaining set. The players who reach the endgame with the right cards in
        hand tend to win — not because they were luckier, but because they managed their hand
        to get there.
      </p>

      <p>
        Early in the game, it's tempting to treat every trick as equally important. It isn't.
        A trick won in the first five rounds usually carries fewer total points than a trick
        won in the last three, simply because experienced players preserve their high-value
        cards. The early tricks are often a series of low-value exchanges — both players feeling
        out the position, discarding their blanks, watching each other.
      </p>

      <p>
        As the deck empties and hands shrink, the dynamic shifts. There are fewer surprises.
        If you know the remaining cards — even approximately — you can reason through what the
        last few tricks will look like and plan accordingly. Holding back a trump Three, for
        example, becomes very powerful when your opponent has already played their trump Ace:
        that Three is now the strongest card left in trump, and if the opponent still has
        high-value non-trump cards, you can capture them freely.
      </p>

      <p>
        The players who struggle in the endgame are usually the ones who spent their trump cards
        too early, or who chased zero-value tricks when they should have been conserving. Going
        into the final three tricks with the right cards, against an opponent who's already
        used up their resources, is where Briscola is actually decided.
      </p>

      <h2>Beginner Mistakes</h2>

      <ul>
        <li>
          <strong>Burning trump cards too early.</strong> Using trump on zero-point tricks
          wastes your most powerful resource. Save trump for tricks where real points are at
          stake.
        </li>
        <li>
          <strong>Chasing every trick.</strong> Winning more tricks than your opponent is
          meaningless on its own — only points matter. Letting your opponent win a trick
          full of 6s and 4s costs you nothing.
        </li>
        <li>
          <strong>Wasting Aces and Threes.</strong> These cards are worth 11 and 10 points
          respectively. Playing them into tricks you're likely to lose, or leading them before
          you've assessed the threat from remaining trump, is the most expensive single-card
          mistake in the game.
        </li>
        <li>
          <strong>Ignoring card tracking.</strong> Not keeping rough count of which Aces and
          Threes have been played makes the endgame a guessing game. Even partial tracking —
          "I know they've captured at least one Ace" — improves your decision-making.
        </li>
        <li>
          <strong>Focusing only on immediate captures.</strong> Reacting to what's in front of
          you turn-by-turn, without thinking about what you're setting up for your opponent,
          leads to positions where you've captured many tricks but lost the scoring.
        </li>
        <li>
          <strong>Playing trump to "confirm" a win.</strong> Once you're comfortably ahead,
          new players sometimes keep playing trump out of habit. There's no prize for the
          margin — 61 points wins exactly the same as 90 points. Conserving trump to
          block a comeback is often more valuable than extending your lead.
        </li>
      </ul>

      <BriscolaTutorialVideo />

      <h2>Practice Briscola Online</h2>

      <p>
        Briscola strategy develops through repetition. The tips in this guide describe
        recognisable patterns — trump overuse, chasing low-value tricks, poor endgame
        positioning — but reading about them and recognising them in a live game are two
        different things. The fastest way to improve is to play regularly and pay deliberate
        attention to what's costing you points.
      </p>

      <p>
        You can <Link to="/play-briscola-online">play Briscola online for free</Link> directly
        on this site — no download, no signup required. It uses a traditional 40-card Italian
        deck and runs in your browser. Play a few games and try to apply one thing from this
        guide at a time. Protecting trump cards is a good place to start. Once that becomes
        natural, add card tracking. The layers build on each other.
      </p>

      <p>
        <Link to="/play-briscola-online" className="game-card__btn">
          Play Briscola Online →
        </Link>
      </p>

      <h2>More Italian Card Games</h2>

      <p>
        If you enjoy Briscola, here are the other games and guides on this site:
      </p>

      <ul>
        <li>
          <strong><Link to="/play-scopa-online">Play Scopa Online</Link></strong> — Italy's
          other classic 40-card game. Where Briscola rewards trump management, Scopa rewards
          table control and arithmetic. Free to play in your browser.
        </li>
        <li>
          <strong><Link to="/scopa-strategy">Scopa Strategy Guide</Link></strong> — the same
          depth of analysis applied to Scopa. If you want to understand how strategic thinking
          differs between the two games, this is the place to start.
        </li>
        <li>
          <strong><Link to="/how-to-play-briscola">How to Play Briscola</Link></strong> — the
          beginner's guide covering setup, card values, trick resolution, and scoring from
          the ground up.
        </li>
        <li>
          <strong><Link to="/italian-solitaire">Italian Solitaire</Link></strong> — traditional
          single-player games using the same regional 40-card deck.
        </li>
      </ul>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
