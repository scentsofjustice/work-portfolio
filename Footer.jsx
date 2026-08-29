import { siteConfig } from '../config';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Connect</h3>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>
          
          {siteConfig.social.linkedin && (
            <div className="footer-section">
              <h3>LinkedIn</h3>
              <p>
                <a href={`https://linkedin.com/in/${siteConfig.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {siteConfig.social.linkedin}
                </a>
              </p>
            </div>
          )}
          
          {siteConfig.social.twitter && (
            <div className="footer-section">
              <h3>Twitter</h3>
              <p>
                <a href={`https://twitter.com/${siteConfig.social.twitter}`} target="_blank" rel="noopener noreferrer">
                  {siteConfig.social.twitter}
                </a>
              </p>
            </div>
          )}
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {year} {siteConfig.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
