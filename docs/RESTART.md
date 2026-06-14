# ItalianCardGames.com - RESTART

Purpose:
This file allows a brand-new AI assistant or developer to become productive on the project within 5 minutes.

Always read:

1. /docs/RESTART.md
2. /docs/DECISIONS.md

before making significant changes.

---

## Project Overview

ItalianCardGames.com is building toward becoming the internet's destination for traditional Italian card games.

The project combines:

* Playable browser games
* Rules guides
* Strategy guides
* Italian card culture
* Historical content
* Traditional deck information

The focus is authenticity, simplicity, and long-term topical authority.

---

## Current Tech Stack

Frontend:

* React
* TypeScript
* Vite

Hosting:

* Netlify

SEO:

* Google Search Console connected
* Auto-generated sitemap
* Canonical URLs on major pages

Repository Structure:

```
/src
/public
/scripts
/docs
```

---

## Important Documentation

/docs/DECISIONS.md

Contains architectural decisions and project rationale.

Read before making structural changes.

---

## Current Site Structure

### Scopa

Playable:

* /play-scopa-online

Content:

* /how-to-play-scopa
* /scopa-rules
* /scopa-strategy

Status:
COMPLETE (v1)

---

### Briscola

Playable:

* /play-briscola-online

Content:

* /how-to-play-briscola
* /briscola-strategy

Status:
COMPLETE (v1)

---

### Tressette

Playable:

* /play-tressette-online

Content:

* /tressette-rules
* /tressette-strategy

Status:
ACTIVE DEVELOPMENT

Goal:
Bring Tressette to parity with Scopa and Briscola.

---

### Other

* /italian-solitaire
* /rules
* /contact
* /privacy-policy
* /terms

---

## Shared Architecture

Games should reuse:

* CardView
* Italian deck utilities
* Shared game styling (.sg-* classes)
* Fullscreen functionality
* Score displays
* Common UI patterns

Avoid creating duplicate card engines.

The long-term goal is a shared Italian card game engine.

---

## Sitemap Notes

The sitemap is generated automatically.

Important:

```
scripts/generate-sitemap.js
```

is the source of truth.

Do NOT manually edit sitemap.xml and assume the changes will persist.

Any new page must be added to the route list used by:

```
scripts/generate-sitemap.js
```

After updating routes:

* regenerate sitemap
* verify sitemap.xml
* deploy
* submit updated sitemap in Google Search Console

---

## SEO Workflow

When a new page is created:

1. Add route
2. Add internal links
3. Add canonical URL
4. Add to sitemap generator
5. Deploy
6. Verify live sitemap
7. Submit sitemap in Search Console
8. Request indexing for important new pages

---

## Design Principles

Gameplay-first pages:

* H1
* Short helper sentence
* Game
* Rules/Strategy links
* Educational content

Do not bury playable games beneath long introductions.

Rules pages:
Learning-first.

Strategy pages:
Learning-first.

Play pages:
Gameplay-first.

---

## Current Priorities

1. Finish Tressette gameplay experience
2. Improve card presentation
3. Build authority pages
4. Expand Italian card game library

---

## Planned Authority Pages

High Priority:

* Italian Card Decks by Region
* History of Italian Playing Cards
* Italian Card Games Explained

Future:

* Regional deck comparisons
* Card symbolism
* Family traditions
* Italian café card culture

---

## Long-Term Vision

ItalianCardGames.com is not intended to be a single-game website.

The goal is:

> "The internet's destination for Italian card games."

Every major Italian card game should eventually include:

* Play
* Rules
* Strategy

supported by cultural and historical content.

---

## Before Starting Any New Work

Review:

* Current sitemap
* Internal linking
* Existing clusters
* /docs/DECISIONS.md

Avoid duplicate pages.

Prefer strengthening existing clusters before launching entirely new topics.
