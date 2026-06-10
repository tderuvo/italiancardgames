import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TressetteTutorialVideo from '../components/TressetteTutorialVideo';

export default function TressetteRulesPage() {
  useEffect(() => {
    document.title =
      'Tressette Rules – How to Play Italy\'s Classic Trick-Taking Card Game';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn the rules of Tressette, one of Italy\'s most popular traditional card games. Understand card rankings, scoring, gameplay, and strategy basics.';
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://italiancardgames.com/tressette-rules');

    return () => {
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
    };
  }, []);

  return (
    <div className="seo-section">

      <h1>Tressette Rules – How to Play Italy's Classic Trick-Taking Card Game</h1>

      <p>
        Tressette is one of Italy's oldest and most respected card games — a true classic
        of the Italian card game tradition. Played with a traditional 40-card deck across
        four suits, it has been a fixture in Italian homes and social clubs for centuries,
        particularly in Southern Italy where it holds a cultural significance that few
        other games can match. If you are looking for a complete guide to Tressette rules,
        you are in the right place.
      </p>

      <p>
        Unlike many trick-taking games, Tressette is played without a trump suit. Every
        card is judged purely on its rank within the suit led, and following suit is
        mandatory. That single constraint pushes the entire game inward — the decisions
        happen in how you manage your hand, read what opponents are holding, and coordinate
        with your partner. Learning how to play Tressette means learning to think several
        tricks ahead.
      </p>

      <p>
        Tressette rewards memory and skill far more than luck. Because all 40 cards are
        dealt at the start of each round with no draw pile, every card you see played
        narrows the field of possibilities. Players who track what has been captured,
        anticipate what suits are running dry, and signal accurately to their partner
        consistently outperform those who simply react to what is in front of them. It is
        a game of skill in the truest sense.
      </p>

      <h2>What Is Tressette?</h2>

      <p>
        Tressette (sometimes written Tresette) is a classic Italian trick-taking card game
        with deep roots in Italian culture. Its origins are difficult to pin down precisely,
        but it has been documented in Italian households since at least the eighteenth
        century and remains one of the most-played games in the country today.
      </p>

      <p>
        The standard format is four players divided into two partnerships, with each pair
        of partners sitting across from each other. The two partners work together to
        capture scoring cards and out-manoeuvre the opposing pair. Two-player variants
        exist and follow a simplified set of rules, but the four-player partnership format
        is where the game is richest — the coordination between partners adds a layer of
        communication and shared strategy that makes Tressette genuinely unique.
      </p>

      <p>
        Many Italians consider Tressette the game of skill among card games. Briscola is
        exciting and Scopa is clever, but Tressette — with its no-trump constraint,
        mandatory suit-following, and the tradition of unspoken partner signals — is the
        one that separates casual players from experienced ones most clearly. If you want
        to explore the strategic depth further, our{' '}
        <Link to="/tressette-strategy">Tressette strategy guide</Link> covers partnership
        signals, suit control, and advanced play.
      </p>

      <h2>The Tressette Deck</h2>

      <p>
        Tressette is played with a standard 40-card Italian deck. The same deck is used
        for <Link to="/play-briscola-online">Briscola</Link>,{' '}
        <Link to="/play-scopa-online">Scopa</Link>, and most other traditional Italian
        card games, making it worth learning well. The deck is divided into four suits:
      </p>

      <ul>
        <li><strong>Coins (Denari)</strong> — depicted as gold discs</li>
        <li><strong>Cups (Coppe)</strong> — depicted as chalices or goblets</li>
        <li><strong>Swords (Spade)</strong> — depicted as curved blades</li>
        <li><strong>Batons (Bastoni)</strong> — depicted as clubs or sticks</li>
      </ul>

      <p>
        Each suit contains ten cards. The face cards in each suit are:
      </p>

      <ul>
        <li><strong>Ace (Asso)</strong> — the Ace ranks third in Tressette, which surprises most newcomers</li>
        <li><strong>King (Re)</strong> — fourth in the Tressette ranking</li>
        <li><strong>Knight (Cavallo)</strong> — fifth; depicted as a figure on horseback</li>
        <li><strong>Jack (Fante)</strong> — sixth; the lowest face card</li>
      </ul>

      <p>
        The remaining cards in each suit are the number cards: 7, 6, 5, and 4. There are
        no 8s, 9s, or 10s in the Italian 40-card deck. If you only have a standard
        French-suited 52-card deck, remove the 8s, 9s, and 10s to replicate the Italian
        deck.
      </p>

      <h2>Tressette Card Rankings</h2>

      <p>
        The card ranking in Tressette is one of the first things that surprises players
        coming from other card games. The Three is the highest card in every suit — not
        the Ace. The Two ranks second. The Ace, despite its importance in games like
        Briscola and most international card games, sits third. Understanding this ranking
        is essential because following suit is mandatory and the highest card of the led
        suit always wins the trick.
      </p>

      <table className="rules-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Card</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1 (Highest)</td><td><strong>3</strong></td><td>The most powerful card in the game</td></tr>
          <tr><td>2</td><td><strong>2</strong></td><td>Second only to the Three</td></tr>
          <tr><td>3</td><td><strong>Ace</strong></td><td>Highest in most games, but third here</td></tr>
          <tr><td>4</td><td><strong>King</strong></td><td>Highest face card</td></tr>
          <tr><td>5</td><td><strong>Knight</strong></td><td>The figure on horseback</td></tr>
          <tr><td>6</td><td><strong>Jack</strong></td><td>Lowest face card</td></tr>
          <tr><td>7</td><td><strong>7</strong></td><td>Highest number card</td></tr>
          <tr><td>8</td><td><strong>6</strong></td><td></td></tr>
          <tr><td>9</td><td><strong>5</strong></td><td></td></tr>
          <tr><td>10 (Lowest)</td><td><strong>4</strong></td><td>The weakest card in the deck</td></tr>
        </tbody>
      </table>

      <p>
        The ranking <strong>3 → 2 → Ace → King → Knight → Jack → 7 → 6 → 5 → 4</strong>{' '}
        applies identically across all four suits. Players who arrive from Briscola
        especially need to unlearn the instinct to lead Aces freely — in Tressette, your
        own Two or Three can lose to an opponent's Three of the same suit, and the Ace
        is genuinely vulnerable to both.
      </p>

      <h2>How Cards Are Dealt</h2>

      <p>
        Tressette is dealt out entirely at the start of each round. With four players at
        the table, the dealer distributes all 40 cards evenly — ten cards each. There is
        no draw pile, no reserve, and no community cards. Everything you will play in the
        round is in your hand from the moment dealing ends.
      </p>

      <ul>
        <li>Four players receive ten cards each (40 cards total — the full deck)</li>
        <li>Cards are typically dealt in batches of five, though regional customs vary</li>
        <li>There is no draw pile — hands are fixed from the start</li>
        <li>The entire hand is played before any scoring takes place</li>
        <li>The player to the dealer's right leads the first trick</li>
      </ul>

      <p>
        This fixed-hand structure is what makes card tracking so important. Since you can
        see your own ten cards and every card played is one fewer unknown, attentive
        players build an increasingly accurate picture of what opponents and partners are
        holding as the round progresses. See the{' '}
        <Link to="/tressette-strategy">Tressette strategy guide</Link> for how to use this
        information effectively.
      </p>

      <h2>How a Trick Is Won</h2>

      <p>
        Each trick in Tressette follows a strict set of rules. The player who wins the
        previous trick leads the next one by playing any card from their hand. Once a card
        is led, all other players must follow suit — they must play a card of the same
        suit if they have one. If a player has no cards of the led suit, they may play any
        card from their hand, but that card cannot win the trick regardless of its rank.
        There is no trump suit in traditional Tressette.
      </p>

      <p>
        The trick is won by the highest-ranking card of the suit that was led, using the
        3 → 2 → Ace → King → Knight → Jack → 7 → 6 → 5 → 4 order. The winner takes all
        four cards into their partnership's capture pile and leads the next trick.
      </p>

      <p>
        <strong>Example:</strong> The lead player plays the 6 of Coins. The second player
        follows with the Ace of Coins. The third player follows with the 3 of Coins. The
        fourth player has no Coins and plays the King of Swords. The 3 of Coins wins —
        it is the highest-ranked card of the led suit (Coins). The King of Swords, despite
        being a face card, cannot win because it is not in the led suit.
      </p>

      <h2>How Scoring Works</h2>

      <p>
        Points in Tressette come from capturing specific cards and from winning the final
        trick. At the end of each round, each partnership counts the scoring cards in their
        capture pile.
      </p>

      <p>
        The cards that carry point value — sometimes called <em>figure</em> cards — are:
      </p>

      <ul>
        <li><strong>Ace</strong> — worth 1/3 of a point</li>
        <li><strong>2</strong> — worth 1/3 of a point</li>
        <li><strong>3</strong> — worth 1/3 of a point</li>
        <li><strong>King</strong> — worth 1/3 of a point</li>
        <li><strong>Knight</strong> — worth 1/3 of a point</li>
        <li><strong>Jack</strong> — worth 1/3 of a point</li>
        <li><strong>4, 5, 6, 7</strong> — worth 0 points</li>
      </ul>

      <p>
        Because each figure card is worth 1/3 of a point, every three figure cards
        captured equal one full point. Across all four suits there are 24 figure cards
        (6 figure cards × 4 suits), giving a total of 8 points available from captured
        cards per deal. The partnership that wins the final trick earns a bonus of 1 point,
        bringing the maximum available per deal to 9 points.
      </p>

      <p>
        In practice, players count their thirds and round down to the nearest whole number
        at the end of the round. A game is typically played to <strong>21 points</strong>,
        though some regions play to 31. The partnership that reaches the target score first
        wins the match.
      </p>

      <h2>Common Tressette Terms</h2>

      <p>
        Tressette has a vocabulary that developed alongside centuries of regional play.
        Here are the most important terms a beginner needs to know:
      </p>

      <ul>
        <li>
          <strong>Busso</strong> — a declaration made when leading a card to signal to
          your partner that you hold the highest remaining card in that suit. It is a
          communication tool, not a game action, and its specific meaning and permitted
          usage vary by region.
        </li>
        <li>
          <strong>Striscio</strong> — a signal indicating that you hold one more card in
          the suit you just led. It invites your partner to return that suit when they get
          the lead.
        </li>
        <li>
          <strong>Volo</strong> — a declaration that you hold all remaining cards of that
          suit. The practical effect is that you cannot be beaten in it.
        </li>
        <li>
          <strong>Trick</strong> — one complete round of play in which each player plays
          one card. The highest card of the led suit wins the trick and all four cards go
          to the winning partnership's pile.
        </li>
        <li>
          <strong>Partnership</strong> — in four-player Tressette, two players sit across
          from each other and play as a team. Partners cannot speak directly but may use
          traditional signals to communicate strength and intent.
        </li>
      </ul>

      <h2>Beginner Mistakes</h2>

      <ul>
        <li>
          <strong>Forgetting the card rankings.</strong> Playing a King expecting it to
          win, only to be beaten by an opponent's Three or Two of the same suit, is the
          most common early mistake. Drill the ranking 3 → 2 → Ace before you sit down
          to play.
        </li>
        <li>
          <strong>Wasting high cards too early.</strong> Leading your Three or Two into a
          suit where an opponent also holds high cards often burns your most valuable
          resources for a trick that doesn't matter yet. Timing is everything.
        </li>
        <li>
          <strong>Ignoring what has already been played.</strong> Tressette rewards
          memory. Not tracking which figure cards — especially Threes, Twos, and Aces —
          have already been captured turns the mid- and late-game into a guessing exercise
          you will usually lose.
        </li>
        <li>
          <strong>Not thinking about partnership play.</strong> Playing Tressette as if
          it were a solo game ignores the most important dimension of strategy. Your
          partner's leads are signals — treat them as information, not coincidence.
        </li>
        <li>
          <strong>Focusing only on the current trick.</strong> Winning a trick that
          contains no figure cards costs you nothing if you concede it. The game is won
          across all ten tricks combined, not one at a time.
        </li>
      </ul>

      <TressetteTutorialVideo />

      <h2>Ready to Practice?</h2>

      <p>
        The best way to lock in these rules is to play a few hands. A free browser version
        of Tressette using a traditional 40-card Italian deck is coming to this site. No
        download or signup will be required — you will be able to jump straight into a
        game and apply everything covered on this page. Check back soon, or in the
        meantime sharpen your skills with{' '}
        <Link to="/play-briscola-online">Briscola</Link> or{' '}
        <Link to="/play-scopa-online">Scopa</Link>, both of which use the same deck.
      </p>

      <p>
        <Link to="/play-tressette-online" className="game-card__btn">
          Play Tressette Online (Coming Soon) →
        </Link>
      </p>

      <p>
        When you feel comfortable with the rules, the{' '}
        <Link to="/tressette-strategy">Tressette strategy guide</Link> is the natural next
        step — it covers partnership signals, suit control, card tracking, and how to
        think about the endgame.
      </p>

      <h2>More Italian Card Games</h2>

      <p>
        All games on this site use the same traditional 40-card Italian deck. Here is
        what else is available:
      </p>

      <ul>
        <li>
          <strong><Link to="/play-scopa-online">Play Scopa Online</Link></strong> — Italy's
          classic capture game. Capture cards from a shared table by matching values and
          sums, score points for Coins, card count, and the Settebello. Free in your
          browser now.
        </li>
        <li>
          <strong><Link to="/scopa-strategy">Scopa Strategy Guide</Link></strong> — table
          control, the Settebello, baiting, and the memory habits that separate good Scopa
          players from average ones.
        </li>
        <li>
          <strong><Link to="/play-briscola-online">Play Briscola Online</Link></strong> —
          Italy's most popular trick-taking game. Trump management, card values, and 20
          tricks to decide who reaches 61 points first. Free in your browser now.
        </li>
        <li>
          <strong><Link to="/briscola-strategy">Briscola Strategy Guide</Link></strong> —
          trump timing, card tracking, and endgame positioning. Useful background reading
          before diving into the no-trump complexity of Tressette.
        </li>
        <li>
          <strong><Link to="/how-to-play-briscola">How to Play Briscola</Link></strong> —
          the beginner's guide to Briscola covering setup, card values, trick resolution,
          and scoring from the ground up.
        </li>
        <li>
          <strong><Link to="/italian-solitaire">Italian Solitaire</Link></strong> —
          traditional single-player games using the same regional 40-card deck, for when
          you want to play solo.
        </li>
        <li>
          <strong><Link to="/play-tressette-online">Play Tressette Online</Link></strong> —
          a free browser version of Tressette is in development. Visit the page for
          background on the game while you wait for the playable version to launch.
        </li>
      </ul>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
