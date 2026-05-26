import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScopaPage from './pages/ScopaPage';
import BriscolaPage from './pages/BriscolaPage';
import HowToPlayScopaPage from './pages/HowToPlayScopaPage';
import HowToPlayBriscolaPage from './pages/HowToPlayBriscolaPage';
import ScopaRulesPage from './pages/ScopaRulesPage';
import ItalianSolitairePage from './pages/ItalianSolitairePage';
import RulesPage from './pages/RulesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import ContactSuccessPage from './pages/ContactSuccessPage';
import ScopaStrategyPage from './pages/ScopaStrategyPage';
import BriscolaStrategyPage from './pages/BriscolaStrategyPage';

// ── Route map ────────────────────────────────────────────────────────────────
// Games live at /play-{game}-online; learning guides at /how-to-play-{game}.
// Keep URLs descriptive for SEO.

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play-scopa-online"      element={<ScopaPage />} />
          <Route path="/play-briscola-online"   element={<BriscolaPage />} />
          <Route path="/how-to-play-scopa"       element={<HowToPlayScopaPage />} />
          <Route path="/how-to-play-briscola"    element={<HowToPlayBriscolaPage />} />
          <Route path="/scopa-rules"             element={<ScopaRulesPage />} />
          <Route path="/scopa-strategy"          element={<ScopaStrategyPage />} />
          <Route path="/briscola-strategy"       element={<BriscolaStrategyPage />} />
          <Route path="/italian-solitaire"       element={<ItalianSolitairePage />} />
          <Route path="/rules"                   element={<RulesPage />} />
          <Route path="/privacy-policy"          element={<PrivacyPolicyPage />} />
          <Route path="/terms"                   element={<TermsPage />} />
          <Route path="/contact"                 element={<ContactPage />} />
          <Route path="/contact-success"         element={<ContactSuccessPage />} />
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
