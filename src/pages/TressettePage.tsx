import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TressetteTutorialVideo from '../components/TressetteTutorialVideo';

export default function TressettePage() {
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    document.title = 'Play Tressette Online – Traditional Italian Card Game';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn how to play Tressette online with a traditional Italian 40-card deck. Explore rules, strategy, scoring, and gameplay basics.';
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://italiancardgames.com/play-tressette-online');

    return () => {
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
    };
  }, []);

  return (
    <div className="seo-section">

      <h1>Play Tressette Online – Traditional Italian Card Game</h1>

      <p>
        Tressette is one of Italy's oldest and most respected card games — a classic
        trick-taking game played with a traditional 40-card Italian deck. Where Briscola
        rewards individual aggression and trump timing, Tressette is a game of
        partnership, memory, and disciplined restraint. It has been played in Italian
        homes and clubs for centuries, and remains especially popular in Southern Italy,
        where it carries a deeper cultural weight than almost any other card game.
      </p>

      <p>
        Unlike many trick-taking games, Tressette has no trump suit. Every card competes
        on its own merit within the suit that was led, and following suit is mandatory.
        That constraint pushes the strategy inward: the decisions happen in how you manage
        your hand, signal your partner, and read what the opponents are holding — not in
        choosing which powerful trump to drop.
      </p>

      <p>
        A playable version of Tressette is coming soon to Italian Card Games. In the
        meantime, this page covers how the game works, what makes it strategically
        interesting, and how it fits into the broader Italian card game tradition. If you
        want to play something now, try{' '}
        <Link to="/play-briscola-online">Briscola</Link> or{' '}
        <Link to="/play-scopa-online">Scopa</Link> — both use the same 40-card deck
        and are available free in your browser today.
      </p>

      {/* ── Coming Soon banner ── */}
      <div className="tressette-soon-banner">
        <span className="tressette-soon-badge">Coming Soon</span>
        <p>
          A free browser version of Tressette is in development. No download or signup
          will be required.
        </p>
        {notified ? (
          <p className="tressette-notified">
            ✓ Thanks — we'll add it to the site soon.
          </p>
        ) : (
          <button
            className="game-card__btn"
            onClick={() => setNotified(true)}
          >
            Notify Me When It's Ready
          </button>
        )}
      </div>

      <h2>What is Tressette?</h2>

      <p>
        Tressette (sometimes spelled Tresette) is a classic Italian trick-taking card
        game most commonly played by four players in two partnerships. Each partnership
        sits across from each other at the table, and the two partners work together to
        capture scoring cards and out-manoeuvre the opposing pair. The game is won not
        just by holding good cards, but by understanding what your partner holds — and
        communicating that understanding in the subtle, traditional ways the game allows.
      </p>

      <p>
        The game is deeply rooted in Italian card culture, particularly in the south —
        Campania, Sicily, Calabria, and Sardinia all have strong Tressette traditions.
        In many communities it has been the social game of choice for generations, played
        at slow pace over long evenings with a seriousness that reflects how much skill
        it genuinely rewards. Unlike some card games that can be played casually and still
        enjoyed, Tressette rewards players who pay close attention from the very first
        card dealt.
      </p>

      <p>
        The name itself is thought to derive from <em>tre</em> (three) and <em>sette</em>{' '}
        (seven), reflecting two of the game's most important cards — though the exact
        etymology is debated. What's not debated is its standing as one of the most
        strategically rich games in the Italian tradition. It sits alongside{' '}
        <Link to="/play-briscola-online">Briscola</Link> and{' '}
        <Link to="/play-scopa-online">Scopa</Link> as one of the three games you're
        most likely to encounter anywhere card games are played in Italy.
      </p>

      <h2>How Tressette Is Played</h2>

      <p>
        Tressette is played with a full 40-card Italian deck — Coins, Cups, Swords, and
        Batons, ten cards each. All 40 cards are dealt out, giving each of the four
        players a hand of ten cards. There is no draw pile and no trump suit. Every card
        you'll play in the round is in your hand from the very start.
      </p>

      <p>
        The player to the dealer's right leads the first trick by playing any card from
        their hand. Once a suit is led, the other three players must follow suit if they
        are able. If a player has no cards of the led suit, they may play any card —
        but unlike trump games, that card cannot win the trick. The trick is always won
        by the highest-ranking card of the suit that was led.
      </p>

      <p>
        After a trick is won, the winning player leads the next trick, and play continues
        until all ten tricks have been played and all cards are exhausted. At that point,
        each partnership counts the scoring cards in their captured pile and records
        their total for the round.
      </p>

      <p>
        One of the most distinctive elements of Tressette is the tradition of partnership
        communication. Players cannot speak to their partners directly, but a rich set of
        traditional signals has developed over centuries — including ways to indicate
        strength in a suit, the presence of high-ranking cards, or an invitation for your
        partner to lead a particular suit. These signals are part of the game's culture
        and vary slightly by region. Learning to read and send them is what separates
        casual Tressette players from experienced ones.
      </p>

      <h2>Tressette Card Ranking</h2>

      <p>
        Tressette uses an unusual card ranking that surprises almost every new player.
        The Three is the highest card in each suit — not the Ace. The full ranking,
        from strongest to weakest, is:
      </p>

      <p>
        <strong>3 → 2 → Ace → King → Knight → Jack → 7 → 6 → 5 → 4</strong>
      </p>

      <p>
        The Three ranks first. The Two ranks second. The Ace — which is the strongest
        card in Briscola and the most valuable card in many other games — sits third.
        The face cards (King, Knight, Jack) follow in their usual order, and then the
        number cards from 7 down to 4.
      </p>

      <p>
        This ranking shapes everything about how the game is played. In Briscola, holding
        an Ace means holding the most powerful non-trump card in the game. In Tressette,
        an Ace can be beaten by the Two or the Three of the same suit. That changes how
        you think about leading, how you protect your high cards, and how you interpret
        what your opponents are signalling when they lead a particular card.
      </p>

      <p>
        The scoring cards — the ones that contribute points to your total — are the Ace,
        the Two, and the Three. Each is worth one-third of a point, and across all four
        suits they account for the majority of the scoring in a round. Capturing an
        opponent's Three is one of the most rewarding plays in the game, precisely because
        it simultaneously removes the highest-ranking card from that suit and denies them
        a scoring card.
      </p>

      <h2>Tressette Strategy Basics</h2>

      <p>
        Tressette is a memory game as much as a card game. Because all 40 cards are dealt
        at the start and there is no draw, every card played is one less to track. Players
        who keep a mental record of which high cards — especially the Threes, Twos, and
        Aces — have been captured can make much better decisions in the middle and late
        game. In Briscola, you can be somewhat reactive; in Tressette, you need to be
        building a picture of the remaining cards from the very first trick.
      </p>

      <p>
        Protecting strong suits is a core strategic principle. If you hold two or three
        high-ranking cards of the same suit, leading that suit repeatedly can be powerful
        — you force opponents to follow with lower cards while you capture with your
        higher ones, gradually depleting their holdings and running out their lower
        cards before you commit your scoring cards. This kind of suit management is
        far more important in Tressette than in trick-taking games that use trump.
      </p>

      <p>
        Partnership awareness separates competent Tressette players from strong ones.
        You need to track not only what your opponents are holding but also what your
        partner needs. If your partner leads a particular suit, they are likely doing
        so because they hold strength there — or because they want you to lead back into
        that suit. Understanding the intent behind each card your partner plays, and
        responding in a way that maximises your combined position, requires attention and
        experience that develops over many games.
      </p>

      <p>
        Patience matters, too. The temptation early in a Tressette hand is to play your
        strongest cards quickly — to win tricks and accumulate points. But experienced
        players know that timing a high card for the right moment, when it captures a
        key scoring card or opens a line for your partner, is worth more than playing it
        early and cleanly. The endgame, when hands are thin and every card is
        consequential, is where strategic patience pays off most clearly.
      </p>

      <TressetteTutorialVideo />

      <h2>Tressette vs Briscola</h2>

      <p>
        Both Tressette and <Link to="/play-briscola-online">Briscola</Link> are Italian
        trick-taking games played with the same 40-card deck, and at a surface level they
        look similar. Both involve playing cards, winning tricks, and capturing points. But
        the feel of the two games is completely different.
      </p>

      <p>
        Briscola is built around the trump suit. It's a two-player duel (or four-player
        variant), and the central tension is in trump management — when to play your trump
        cards, how to bait your opponent into using theirs, and how to time the endgame
        with the cards you've protected. It's an aggressive game at heart.
      </p>

      <p>
        Tressette is a partnership game with no trump. The aggression is replaced by
        coordination. You win in Tressette by working with your partner to control suits,
        establish long suits, and read each other's signals accurately. The pace is
        more measured, the decisions are more interdependent, and the communication
        tradition gives the game a social dimension that Briscola doesn't share.
      </p>

      <p>
        If you enjoy Briscola and want a greater strategic challenge, Tressette is a
        natural next step. The transition involves unlearning trump instincts and
        replacing them with partnership awareness — a rewarding process that tends
        to deepen appreciation for both games. See our{' '}
        <Link to="/briscola-strategy">Briscola strategy guide</Link> for a detailed
        look at how trump thinking works before you move into the no-trump world of
        Tressette.
      </p>

      <h2>Tressette vs Scopa</h2>

      <p>
        Tressette and <Link to="/play-scopa-online">Scopa</Link> share the same deck but
        represent very different styles of card game. Scopa is a <em>capture</em> game —
        players capture cards from a shared table by matching sums, and the scoring comes
        from categories like most cards, most Coins, and the coveted 7 of Coins. Tressette
        is a <em>trick-taking</em> game — players compete trick by trick for the scoring
        cards distributed across the deck.
      </p>

      <p>
        The pacing is noticeably different. Scopa can feel reactive and quick — you see
        the table, you calculate your captures, you play. Tressette is more deliberate.
        With ten cards in hand and a partner to coordinate with, each decision carries
        more weight and requires a longer view of the round.
      </p>

      <p>
        Scopa rewards arithmetic and table control; Tressette rewards memory and
        partnership communication. Both games are worth learning, and players who
        understand both develop a much richer intuition for the Italian card game
        tradition as a whole. If you're new to Italian card games, Scopa is typically
        the easier entry point. The{' '}
        <Link to="/scopa-strategy">Scopa strategy guide</Link> covers the key concepts
        for that game.
      </p>

      <h2>Play Tressette Online Soon</h2>

      <p>
        A playable browser version of Tressette is coming to Italian Card Games. It will
        use a traditional 40-card deck, run in your browser without any download or signup,
        and follow the standard Tressette rules described on this page.
      </p>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        Want to learn before the playable version launches?{' '}
        <a
          href="https://www.youtube.com/watch?v=73t4yReh4TM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch a quick tutorial →
        </a>
      </p>

      {notified ? (
        <p className="tressette-notified">✓ You're on the list — thanks for your interest!</p>
      ) : (
        <>
          <p>
            While you wait, both of the currently playable games use the same Italian deck
            and share strategic DNA with Tressette:
          </p>
          <p style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
            <Link to="/play-briscola-online" className="game-card__btn">
              Play Briscola →
            </Link>
            <Link to="/play-scopa-online" className="game-card__btn" style={{ background: 'var(--green-dark)' }}>
              Play Scopa →
            </Link>
          </p>
          <p>
            <button
              className="tressette-notify-btn"
              onClick={() => setNotified(true)}
            >
              Notify Me When Tressette Is Ready
            </button>
          </p>
        </>
      )}

      <h2>More Italian Card Games</h2>

      <p>
        All games on this site use the traditional 40-card Italian deck. Here is what's
        available now:
      </p>

      <ul>
        <li>
          <strong><Link to="/play-scopa-online">Play Scopa Online</Link></strong> — Italy's
          classic capture game. Capture cards from the table by matching sums, score points
          for Coins, card count, and the Settebello. Free in your browser.
        </li>
        <li>
          <strong><Link to="/play-briscola-online">Play Briscola Online</Link></strong> —
          Italy's most popular trick-taking game. Trump management, card values, and 20
          tricks to decide who reaches 61 points first.
        </li>
        <li>
          <strong><Link to="/briscola-strategy">Briscola Strategy Guide</Link></strong> — how
          to think about trump timing, card tracking, and endgame positioning in Briscola.
          Useful background before tackling the no-trump complexity of Tressette.
        </li>
        <li>
          <strong><Link to="/scopa-strategy">Scopa Strategy Guide</Link></strong> — table
          control, the Settebello, baiting, and the memory habits that separate good Scopa
          players from average ones.
        </li>
        <li>
          <strong><Link to="/italian-solitaire">Italian Solitaire</Link></strong> —
          single-player games using the same regional deck, for when you want to play solo.
        </li>
      </ul>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
