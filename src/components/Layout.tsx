import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

// Wrap every page in this Layout so header/footer stay consistent.
// When you add a footer, put it here.
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Italian Card Games · Free to play · No download needed</p>
        <p className="site-footer__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms">Terms</Link>
        </p>
      </footer>
    </div>
  );
}
