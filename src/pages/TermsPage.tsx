import { useEffect } from 'react';

const LAST_UPDATED = 'May 1, 2025';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Terms and Conditions for ItalianCardGames.com — free online Italian card games including Scopa and Briscola.';
    }
  }, []);

  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>
      <p className="legal-page__date">Last updated: {LAST_UPDATED}</p>

      <p>By using ItalianCardGames.com, you agree to the following terms.</p>

      <h2>Use of the Website</h2>
      <p>
        This website is provided for entertainment purposes only. You may use it for
        personal, non-commercial use.
      </p>

      <h2>No Guarantees</h2>
      <p>We make no guarantees regarding:</p>
      <ul>
        <li>Game performance</li>
        <li>Accuracy of information</li>
        <li>Availability of the website</li>
      </ul>
      <p>The site is provided "as is" without warranties of any kind.</p>

      <h2>Limitation of Liability</h2>
      <p>We are not liable for any damages or losses resulting from:</p>
      <ul>
        <li>Use of the website</li>
        <li>Inability to access the website</li>
        <li>Errors or interruptions</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including code, design, and text, is owned by
        ItalianCardGames.com unless otherwise stated.
      </p>
      <p>You may not copy, distribute, or reuse content without permission.</p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services such as analytics or advertising providers. We
        are not responsible for their content or behavior.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the site means you
        accept any changes.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, contact:{' '}
        <a href="mailto:info@italiancardgames.com">info@italiancardgames.com</a>
      </p>
    </div>
  );
}
