import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactSuccessPage() {
  useEffect(() => {
    document.title = 'Message Sent | Italian Card Games';
  }, []);

  return (
    <div className="contact-page">
      <h1>Message Sent</h1>
      <p className="contact-page__intro">
        Thanks for your message. We'll get back to you if a reply is needed.
      </p>
      <Link to="/" className="contact-form__btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
        Return Home →
      </Link>
    </div>
  );
}
