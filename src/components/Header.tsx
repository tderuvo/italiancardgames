import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          🃏 Italian Card Games
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          <NavLink
            to="/play-scopa-online"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Play Scopa
          </NavLink>
          <NavLink
            to="/play-briscola-online"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Briscola
          </NavLink>
          <NavLink
            to="/italian-solitaire"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Italian Solitaire
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Rules
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
