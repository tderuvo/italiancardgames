import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | Italian Card Games';
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content = 'Send feedback, questions, or suggestions to the Italian Card Games team.';
    }
  }, []);

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-page__intro">
        Have feedback, questions, or suggestions? Send a message below.
      </p>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="/contact-success"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="contact-form__label">
          Name
          <input
            className="contact-form__input"
            type="text"
            name="name"
            required
          />
        </label>

        <label className="contact-form__label">
          Email
          <input
            className="contact-form__input"
            type="email"
            name="email"
            required
          />
        </label>

        <label className="contact-form__label">
          Message
          <textarea
            className="contact-form__textarea"
            name="message"
            rows={6}
            required
          />
        </label>

        <button className="contact-form__btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
