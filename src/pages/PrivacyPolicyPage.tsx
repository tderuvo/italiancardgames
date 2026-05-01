import { useEffect } from 'react';

const LAST_UPDATED = 'May 1, 2025';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        'Privacy Policy for ItalianCardGames.com — learn how we handle data, cookies, and third-party services.';
    }
  }, []);

  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-page__date">Last updated: {LAST_UPDATED}</p>

      <p>
        ItalianCardGames.com ("we", "us", or "our") operates this website to provide
        free online card games.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not collect personal information directly from users. However, we may
        collect limited data automatically through third-party services.
      </p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>Improve website functionality</li>
        <li>Understand how users interact with the site</li>
      </ul>

      <h2>Analytics</h2>
      <p>
        We may use services such as Google Analytics to collect anonymous usage data,
        including:
      </p>
      <ul>
        <li>Pages visited</li>
        <li>Time spent on site</li>
        <li>Device and browser type</li>
      </ul>
      <p>This data is used only to improve the website.</p>

      <h2>Advertising</h2>
      <p>
        In the future, we may use advertising services such as Google AdSense. These
        services may use cookies to show relevant ads based on your browsing activity.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Third-party services we use may collect information according to their own
        privacy policies. These may include:
      </p>
      <ul>
        <li>Google Analytics</li>
        <li>Google AdSense (when enabled)</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect information, but no method of transmission
        over the internet is 100% secure.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        This site is not directed at children under 13, and we do not knowingly collect
        personal data from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted on
        this page.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions, you can contact us at:{' '}
        <a href="mailto:info@italiancardgames.com">info@italiancardgames.com</a>
      </p>
    </div>
  );
}
