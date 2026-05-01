import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          🃏 Italian Card Games
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          {/* ── Active game links ── */}
          <NavLink
            to="/play-scopa-online"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Play Scopa
          </NavLink>

          {/* ── Placeholder links for future games ── */}
          {/* TODO: replace href with /play-briscola-online when Briscola is built */}
          <span className="nav-link nav-link--soon">
            Briscola <em>(soon)</em>
          </span>

          {/* TODO: replace href with /italian-solitaire when Solitaire is built */}
          <span className="nav-link nav-link--soon">
            Solitaire <em>(soon)</em>
          </span>

          {/* TODO: replace href with /rules when Rules page is built */}
          <span className="nav-link nav-link--soon">
            Rules <em>(soon)</em>
          </span>
        </nav>
      </div>
    </header>
  );
}
