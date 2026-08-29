import { useState } from 'react';
import { siteConfig } from './config';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);

  const handleCaseStudyClick = (id) => {
    setSelectedCaseStudyId(id);
    setCurrentPage('case-study');
    window.scrollTo(0, 0);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  let content;

  if (currentPage === 'home') {
    content = <HomePage onCaseStudyClick={handleCaseStudyClick} caseStudies={siteConfig.caseStudies} />;
  } else if (currentPage === 'case-study' && selectedCaseStudyId) {
    const caseStudy = siteConfig.caseStudies.find(cs => cs.id === selectedCaseStudyId);
    content = <CaseStudyPage caseStudy={caseStudy} onBack={() => handleNavClick('home')} />;
  } else if (currentPage === 'about') {
    content = <AboutPage />;
  } else if (currentPage === 'contact') {
    content = <ContactPage />;
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavClick={handleNavClick} />
      <main className="main-content">
        {content}
      </main>
      <Footer />
    </div>
  );
}
