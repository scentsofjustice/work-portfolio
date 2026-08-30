import { siteConfig } from '../config';
import CaseStudyPreview from '../components/CaseStudyPreview';
import './HomePage.css';

export default function HomePage({ onCaseStudyClick, caseStudies }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">
            Content strategy focused on structure
          </h1>
          <p className="hero-subheadline">
            I help organizations decide what information matters, where it belongs, and how it stays useful over time.
          </p>
          <p className="hero-description">
            Working with enterprises to design information architecture, content governance, and publishing systems that scale.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="section-header">
          <h2>Recent Work</h2>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <CaseStudyPreview
              key={caseStudy.id}
              caseStudy={caseStudy}
              onClick={() => onCaseStudyClick(caseStudy.id)}
            />
          ))}
        </div>
      </section>

      {/* Methods Section */}
      <section className="methods-section">
        <div className="section-header">
          <h2>Approach</h2>
        </div>
        
        <div className="methods-grid">
          <div className="method-card">
            <h3>Understand Structure</h3>
            <p>
              Map how information actually flows. What matters? What's redundant? What's missing? Uncover patterns through research, not assumptions.
            </p>
          </div>
          
          <div className="method-card">
            <h3>Design Systems</h3>
            <p>
              Build scalable frameworks—information architecture, taxonomy, governance models—that let organizations maintain coherence as they grow.
            </p>
          </div>
          
          <div className="method-card">
            <h3>Enable Execution</h3>
            <p>
              Create the tools, templates, and processes that make systems work in practice. Content governance that doesn't require constant oversight.
            </p>
          </div>
          
          <div className="method-card">
            <h3>Measure Impact</h3>
            <p>
              Define what success looks like and build measurement into the system from the start. Improve what works, eliminate what doesn't.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
