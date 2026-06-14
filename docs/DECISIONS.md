# ItalianCardGames.com – Decisions Log

Purpose:
This document records important project decisions and, more importantly, WHY those decisions were made. Future developers, AI assistants, and Future Tony should consult this file before making major changes.

---

## Decision: Build an Italian Card Game Ecosystem

Date: June 2026

Decision:
ItalianCardGames.com is not a Scopa site.

The long-term goal is to become the internet's destination for Italian card games.

Reason:
A single-game site has limited topical authority and expansion opportunities. A collection of games creates a stronger brand, stronger SEO footprint, and a more defensible position.

Implications:
Every major Italian card game should eventually have:

* Play
* Rules
* Strategy

Pages should interlink naturally.

---

## Decision: Authenticity Over Generic Gaming

Date: June 2026

Decision:
The site should feel Italian.

Reason:
Most card game websites are generic, casino-themed, or purely functional.

ItalianCardGames should differentiate itself through:

* Traditional Italian decks
* Regional card traditions
* Cultural context
* Café atmosphere
* Family game traditions

Implications:
Future design choices should favor authenticity over flashy gaming aesthetics.

---

## Decision: Play Pages Are Utility Pages

Date: June 2026

Decision:
Gameplay appears above the fold.

Reason:
Visitors searching "Play Scopa Online" or "Play Briscola Online" have high gameplay intent.

They should reach the game immediately.

Implications:
Play pages should follow:

1. H1
2. Brief helper text
3. Playable game
4. Rules/Strategy links
5. Educational content

Gameplay should never be buried beneath long introductions.

---

## Decision: Every Game Uses a Shared Card Engine

Date: June 2026

Decision:
Scopa, Briscola, Tressette, and future games should reuse common components whenever possible.

Reason:
Reduces maintenance.
Improves consistency.
Speeds future game launches.

Implications:
Prefer shared:

* CardView
* Italian deck utilities
* Game layout components
* Score displays
* Fullscreen functionality

Avoid duplicate implementations.

---

## Decision: Traditional Italian Deck First

Date: June 2026

Decision:
Use traditional Italian cards rather than standard poker cards.

Reason:
Authenticity.
Differentiation.
Stronger cultural identity.

Implications:
Future card artwork should eventually replace placeholder graphics.

Traditional suits:

* Coins
* Cups
* Swords
* Batons

remain the default.

---

## Decision: Strategy Pages Are Mandatory

Date: June 2026

Decision:
Every major game receives a strategy page.

Reason:
Rules explain how to play.
Strategy explains how to improve.

Strategy pages strengthen topical authority and provide a better user experience.

Implications:
Future games should receive:

* Rules page
* Strategy page

before advanced features are built.

---

## Decision: Complete Clusters Before Expanding

Date: June 2026

Decision:
Finish game clusters before launching many new games.

Reason:
Depth creates authority.

Preferred structure:

* Play
* Rules
* Strategy

before moving to the next game.

Implications:
Future launches should follow this sequence whenever possible.

---

## Decision: Culture Pages Are Phase Two

Date: June 2026

Decision:
Cultural and historical content supports the platform.

Reason:
These pages help establish authority and differentiate the site.

Examples:

* Italian Card Decks by Region
* History of Italian Playing Cards
* Italian Card Games Explained
* Regional Card Traditions

Implications:
These pages should be built after core gameplay clusters exist.

---

## Decision: SEO Is Farming

Date: June 2026

Decision:
The site will be managed through steady, long-term improvements rather than constant monitoring.

Reason:
Authority compounds slowly.

Implications:

Weekly review:

* Search Console
* Sitemap health
* New queries
* New content opportunities

Avoid daily ranking checks and reactive changes.

Focus on building the orchard.
