import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScopaPage from './pages/ScopaPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// ── Route map ────────────────────────────────────────────────────────────────
// To add Briscola: import BriscolaPage and add a Route below.
// To add Solitaire: same pattern.
// Keep URLs descriptive for SEO (/play-briscola-online, /italian-solitaire, etc.)

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play-scopa-online" element={<ScopaPage />} />
          <Route path="/privacy-policy"   element={<PrivacyPolicyPage />} />
          <Route path="/terms"            element={<TermsPage />} />
          {/* Future routes:
            <Route path="/play-briscola-online" element={<BriscolaPage />} />
            <Route path="/italian-solitaire"    element={<SolitairePage />} />
            <Route path="/rules"                element={<RulesPage />} />
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>Page not found</h1>
      <p><a href="/">Back to home</a></p>
    </div>
  );
}
