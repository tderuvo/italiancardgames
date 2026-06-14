import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ItalianCardDecksByRegionPage() {
  useEffect(() => {
    document.title =
      'Italian Card Decks by Region – Sicilian, Neapolitan, Piacentine & More';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Discover the different regional Italian card decks including Sicilian, Neapolitan, Piacentine, Trevisane, and Sardinian cards. Learn their history, artwork, and traditions.';
    }

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://italiancardgames.com/italian-card-decks-by-region');

    return () => {
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
    };
  }, []);

  return (
    <div className="seo-section">

      <h1>Italian Card Decks by Region</h1>

      <p className="deck-page__subtitle">
        Discover why Italy has many different playing card designs and how each region
        developed its own traditions.
      </p>

      <p>
        Most countries settled on a single national deck of playing cards. Italy never did.
        Walk into a card shop in Naples, Palermo, or Venice and you will find completely
        different decks — different artwork, different colours, different regional
        characters — that all play the same traditional Italian card games. Understanding
        why Italy has so many regional decks, and what makes each one distinctive, is one
        of the most interesting entry points into Italian card culture.
      </p>

      <p>
        Italian playing cards have been produced regionally for centuries. The four suits —
        Coins, Cups, Swords, and Batons — appear on every deck, but the way those suits
        are illustrated varies dramatically from region to region. Sicilian cards have a
        bold, deeply coloured visual style influenced by centuries of Spanish rule.
        Neapolitan cards, probably the most internationally recognised Italian deck today,
        carry a warmth and character that reflects Southern Italian tradition. Piacentine
        cards from Emilia-Romagna have a cleaner, more structured look that has made them
        the dominant deck across much of the north.
      </p>

      <p>
        What makes regional Italian cards genuinely interesting is that the games they are
        used for — Scopa, Briscola, Tressette, and others — are largely the same across
        all of them. The rules do not change when you cross a regional boundary. What
        changes is the visual language, the feel of the cards in your hands, and the sense
        of place that comes with them. Many Italian families still use the deck associated
        with their home region, and recognising which deck someone plays with can tell you
        something about where they are from.
      </p>

      <p>
        This page covers the five major regional Italian card decks: Sicilian, Neapolitan,
        Piacentine, Trevisane, and Sardinian. Each section explains the deck's origins,
        visual character, and regional significance. Future updates will expand coverage
        to additional regional decks. If you want to jump straight into playing, all of
        the games described here are available free on this site.
      </p>

      {/* ── Why Italy Has Different Card Decks ── */}
      <h2>Why Italy Has Different Card Decks</h2>

      <p>
        The simplest explanation for Italy's regional card diversity is political history.
        For most of the last thousand years, the Italian peninsula was not a unified
        nation — it was a patchwork of independent city-states, republics, duchies, and
        kingdoms. Milan, Venice, Florence, Naples, and Palermo were not just different
        cities; they were different countries, each with their own governments, trade
        networks, and cultural identities. National unification only came in 1861, and
        even then it layered a new political structure onto communities that had been
        developing distinct local identities for centuries.
      </p>

      <p>
        Card printing followed the same pattern. Each region developed its own printing
        traditions, its own workshops, and its own visual conventions for representing the
        four suits. Spanish influence was strong in the south, where Sicily and Naples
        spent centuries under Aragonese and Habsburg rule. Northern regions developed
        their own styles independently, shaped by local craft traditions and the cultural
        preferences of the cities they served.
      </p>

      <p>
        The result is a remarkable variety of visual traditions, all built on the same
        underlying structure — four suits, ten cards each, 40 cards total. When Italy
        unified, there was no drive to standardise playing cards the way other aspects of
        civic life were standardised. Regional decks survived because people were attached
        to them, because local printing industries had a commercial interest in continuing
        them, and because the cards felt like a genuine expression of local identity. That
        attachment persists today.
      </p>

      {/* ── Sicilian Cards ── */}
      <h2>Sicilian Cards (Carte Siciliane)</h2>

      <figure className="deck-figure">
        <img
          src="/images/sicilian-deck.png"
          alt="Traditional Sicilian Italian playing cards"
          className="deck-figure__img"
        />
        <figcaption className="deck-figure__caption">
          Traditional Sicilian playing cards, commonly used for Scopa and Briscola.
        </figcaption>
      </figure>

      <p>
        Sicily's card tradition reflects the island's complex history as a crossroads of
        Mediterranean civilisations. Sicilian cards carry the visual weight of that
        history — bold outlines, deep saturated colours, and figures that draw on centuries
        of Spanish artistic influence. Sicily was under Aragonese and then Spanish rule
        from the thirteenth to the eighteenth century, and that influence shaped the local
        card tradition in ways that are still visible today.
      </p>

      <p>
        The Trinacria — the ancient three-legged symbol of Sicily — appears in regional
        imagery associated with the island's identity, and that same spirit of strong
        regional pride runs through Sicilian playing cards. To a Sicilian player, the
        local deck is not just a functional object; it carries a sense of place and
        belonging that a generic deck does not.
      </p>

      <p>
        Scopa and Briscola are the most commonly played games with Sicilian cards, and
        both are available to play on this site. The rules are identical to the standard
        versions — only the visual style of the deck differs.
      </p>

      <p>
        <strong>Play with a Sicilian-style deck:</strong>{' '}
        <Link to="/play-scopa-online">Play Scopa Online</Link> ·{' '}
        <Link to="/play-briscola-online">Play Briscola Online</Link>
      </p>

      {/* ── Neapolitan Cards ── */}
      <h2>Neapolitan Cards (Carte Napoletane)</h2>

      <figure className="deck-figure">
        <img
          src="/images/neapolitan-deck.png"
          alt="Traditional Neapolitan Italian playing cards"
          className="deck-figure__img"
        />
        <figcaption className="deck-figure__caption">
          Traditional Neapolitan playing cards — the most internationally recognised Italian regional deck.
        </figcaption>
      </figure>

      <p>
        The Neapolitan deck is probably the most internationally recognised Italian
        regional card design, and for good reason. Naples was for centuries the largest
        city in Italy and one of the great cities of Europe — capital of the Kingdom of
        the Two Sicilies, a major cultural and commercial hub, and the point of departure
        for millions of Italian emigrants who carried their card-playing traditions with
        them to the Americas and beyond. Wherever Southern Italian communities settled,
        Neapolitan cards went with them.
      </p>

      <p>
        The visual style is distinctive: warm earth tones, expressive faces on the court
        cards, and a particular quality of illustration that feels rooted in Southern
        Italian folk art rather than formal printing conventions. The Modiano brand, which
        has produced Neapolitan-style cards for generations, is the most widely recognised
        publisher of this deck style and can be found in Italian households and card shops
        around the world.
      </p>

      <p>
        Neapolitan cards are closely associated with Scopa, Briscola, and Tressette —
        the three most popular traditional Italian card games — all of which are played
        extensively across Campania and the broader Southern Italian diaspora. The deck
        used as the basis for this site follows the Neapolitan tradition in its suit
        structure and card character.
      </p>

      <p>
        <strong>Play with a Neapolitan-style deck:</strong>{' '}
        <Link to="/play-scopa-online">Play Scopa Online</Link> ·{' '}
        <Link to="/play-briscola-online">Play Briscola Online</Link> ·{' '}
        <Link to="/play-tressette-online">Play Tressette Online</Link>
      </p>

      {/* ── Piacentine Cards ── */}
      <h2>Piacentine Cards (Carte Piacentine)</h2>

      <div className="deck-placeholder" aria-label="Piacentine deck image placeholder">
        <span>📷</span>
        <p>Piacentine Deck — image coming soon</p>
      </div>

      <p>
        The Piacentine deck takes its name from Piacenza, a city in Emilia-Romagna at
        the northern edge of the Po Valley. This is one of the most widely used card
        styles across northern and central Italy, and many Italian players from these
        regions consider the Piacentine deck to be the natural standard — the deck they
        grew up with and associate with card games generally.
      </p>

      <p>
        Compared to the bold expressiveness of Sicilian and Neapolitan cards, the
        Piacentine style is more restrained. The suit symbols are clearly drawn, the
        figures on the court cards are upright and formal, and the overall design has a
        clean precision that makes the cards easy to read across the table. That clarity
        is likely part of why the Piacentine style spread so widely — it works well in
        practical play.
      </p>

      <p>
        Scopa and Briscola are the primary games played with Piacentine cards in
        Emilia-Romagna and the surrounding regions. The same rules apply as everywhere
        else in Italy — the deck is the difference, not the game.
      </p>

      {/* ── Trevisane Cards ── */}
      <h2>Trevisane Cards (Carte Trevisane)</h2>

      <div className="deck-placeholder" aria-label="Trevisane deck image placeholder">
        <span>📷</span>
        <p>Trevisane Deck — image coming soon</p>
      </div>

      <p>
        The Trevisane deck comes from Treviso, a city in the Veneto region of
        north-eastern Italy. Like the Piacentine style, it represents the northern
        Italian preference for cleaner, more structured card illustration over the
        warmer expressiveness of southern decks. The Trevisane visual style is among
        the more stylised of the regional traditions — the court card figures are
        distinctive and the overall design has an elegance that reflects the artistic
        sensibility of the Veneto.
      </p>

      <p>
        The deck is closely associated with card playing in the Veneto and the
        surrounding north-eastern regions. It is less widely distributed outside that
        area than the Piacentine or Neapolitan styles, which is part of what makes it
        a genuinely regional deck rather than a style that has spread across the country.
        For players from the Veneto, the Trevisane deck is simply the deck — the one
        that defines what Italian playing cards look like.
      </p>

      {/* ── Sardinian Cards ── */}
      <h2>Sardinian Cards (Carte Sarde)</h2>

      <div className="deck-placeholder" aria-label="Sardinian deck image placeholder">
        <span>📷</span>
        <p>Sardinian Deck — image coming soon</p>
      </div>

      <p>
        Sardinia occupies a unique position in Italian culture, and its card tradition
        reflects that distinctiveness. Sardinian cards are among the most visually
        individual of all Italian regional decks — the imagery draws on the island's
        own artistic heritage rather than the mainland Spanish-influenced traditions that
        shaped decks in Sicily and Naples, or the northern printing styles that produced
        the Piacentine and Trevisane patterns.
      </p>

      <p>
        The figures on Sardinian court cards often incorporate elements associated with
        traditional Sardinian costume and iconography, giving the deck a visual identity
        that is immediately recognisable to anyone familiar with the island's culture.
        Sardinian card games follow the same basic rules as mainland Italian games — Scopa,
        Briscola, and local variants of trick-taking games — but the deck in hand carries
        a sense of the island's distinct cultural identity that no mainland deck can
        replicate.
      </p>

      {/* ── Which Deck Is Best ── */}
      <h2>Which Italian Deck Is Best?</h2>

      <p>
        There is no single best Italian card deck — and the question itself reveals
        something about how regional deck traditions work. For most Italian players, the
        "best" deck is the one they grew up with, the one their family used, and the one
        that looks and feels right when they sit down to play. A Neapolitan player and a
        Piacentine player can sit at the same table, play the same game of Scopa with the
        same rules, and each privately feel that the other's deck looks slightly wrong.
        Both would be right by their own standard.
      </p>

      <p>
        The practical differences between regional decks are almost entirely visual. The
        suits are the same — Coins, Cups, Swords, Batons. The card values are the same —
        Ace through 7, Jack, Knight, King. The rules of Scopa, Briscola, Tressette, and
        other traditional games are the same regardless of which regional deck you use.
        What varies is the artwork, the colour palette, the style of the court card
        figures, and the feel of regional identity that each deck carries.
      </p>

      <p>
        If you are learning Italian card games for the first time, any regional deck will
        serve you well. If you have Italian heritage, you might find it rewarding to seek
        out the deck style associated with your family's region. And if you are simply
        drawn to beautiful card design, exploring the different regional traditions is a
        pleasure in its own right — each one is the product of a distinct artistic and
        cultural history.
      </p>

      {/* ── Games You Can Play Online ── */}
      <h2>Italian Card Games You Can Play Online</h2>

      <p>
        All of the games traditionally played with regional Italian decks are available
        free on this site, using a 40-card deck structured after the Italian tradition.
        No download or signup is required.
      </p>

      <ul>
        <li>
          <strong><Link to="/play-scopa-online">Scopa</Link></strong> — Italy's classic
          capture game. Play cards to capture matching values or combinations from a shared
          table. Points come from card count, Coins, the Settebello, and Primiera. One of
          the most widely played games across all regional deck traditions.
        </li>
        <li>
          <strong><Link to="/play-briscola-online">Briscola</Link></strong> — Italy's most
          popular trick-taking game, built around a trump suit. Each round of 20 tricks
          decides who captures enough points to win. Fast, competitive, and deeply
          satisfying once you understand trump management.
        </li>
        <li>
          <strong><Link to="/play-tressette-online">Tressette</Link></strong> — a classic
          trick-taking game with no trump suit. Follow suit strictly, track the unusual
          card ranking (3 is highest, not the Ace), and build points across 10 tricks.
          Especially popular in Southern Italy and associated with the Neapolitan deck
          tradition.
        </li>
        <li>
          <strong><Link to="/italian-solitaire">Italian Solitaire</Link></strong> — a
          guide to solo and patience-style games using the traditional 40-card Italian deck,
          plus an overview of other classic games worth knowing.
        </li>
      </ul>

      <p>
        To go deeper, each game has its own rules guide and strategy guide:
      </p>

      <ul>
        <li><Link to="/scopa-strategy">Scopa Strategy</Link> — table control, the Settebello, baiting, and card tracking</li>
        <li><Link to="/briscola-strategy">Briscola Strategy</Link> — trump timing, card values, and endgame planning</li>
        <li><Link to="/tressette-strategy">Tressette Strategy</Link> — suit tracking, partnership signals, and multi-trick planning</li>
      </ul>

      {/* ── Future expansion ── */}
      <h2>More Regional Decks — Coming Soon</h2>

      <p>
        This page currently covers the five major regional Italian card deck traditions.
        Future updates will expand coverage to additional regional styles, including:
      </p>

      <ul>
        <li><strong>Bergamasche</strong> — from Bergamo in Lombardy; a distinctive northern style</li>
        <li><strong>Bolognesi</strong> — from Bologna; closely associated with the Emilian card tradition</li>
        <li><strong>Romagnole</strong> — from Romagna; a variant of the Emilian tradition with distinct local character</li>
        <li><strong>Trentine</strong> — from Trentino; influenced by both Italian and German card traditions due to the region's history</li>
      </ul>

      <p>
        Each of these decks has its own visual style, regional history, and community of
        players who consider it the natural standard for Italian card games. Documenting
        them in full is part of building this site into a genuine resource for Italian card
        culture.
      </p>

      <p>
        <Link to="/">← Back to Italian Card Games</Link>
      </p>

    </div>
  );
}
