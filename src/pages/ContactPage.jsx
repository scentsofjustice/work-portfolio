import { siteConfig } from '../config';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <article className="contact-content">
        <header className="contact-header">
          <h1>Connect</h1>
          <p className="contact-intro">
            I'm open to conversations about content strategy, information architecture, content governance, and organizational systems. 
          </p>
        </header>

        <section className="contact-section">
          <h2>Email</h2>
          <p>
            The best way to reach me is email. I try to respond within a day.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="email-link">
            {siteConfig.email}
          </a>
        </section>

        {siteConfig.social.linkedin && (
          <section className="contact-section">
            <h2>LinkedIn</h2>
            <p>
              You can also find me on LinkedIn if you prefer to connect there first.
            </p>
            <a 
              href={`https://linkedin.com/in/${siteConfig.social.linkedin}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              View profile →
            </a>
          </section>
        )}

        <section className="contact-section about-inquiries">
          <h2>What I'm interested in</h2>
          <ul className="inquiry-list">
            <li>Information architecture and taxonomy design</li>
            <li>Content governance and operating models</li>
            <li>Enterprise content system strategy</li>
            <li>Publishing and content ops workflows</li>
            <li>Content personalization and modularity</li>
            <li>Cross-functional content alignment</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
