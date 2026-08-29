import { siteConfig } from '../config';
import './Header.css';

export default function Header({ currentPage, onNavClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <button 
          className="logo-button"
          onClick={() => onNavClick('home')}
        >
          <span className="logo">{siteConfig.siteName}</span>
        </button>
        
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavClick('home')}
          >
            Work
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => onNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => onNavClick('contact')}
          >
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
}
