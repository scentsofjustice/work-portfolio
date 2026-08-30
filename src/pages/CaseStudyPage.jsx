import './CaseStudyPage.css';
import ReactMarkdown from 'react-markdown';

export default function CaseStudyPage({ caseStudy, onBack }) {
  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="case-study-page">
      <button className="back-button" onClick={onBack}>
        ← Back to work
      </button>
      
      <article className="case-study-article">
        {/* Header */}
        <header className="case-study-header">
          <span className="eyebrow">{caseStudy.eyebrow}</span>
          <h1 className="headline">{caseStudy.headline}</h1>
          <p className="subheadline">{caseStudy.shortDescription}</p>
        </header>

        {/* Hero Stats */}
        {caseStudy.heroStats && (
          <section className="hero-stats">
            <div className="stats-grid">
              {caseStudy.heroStats.map((stat, index) => (
                <div key={index} className="stat-block">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Snapshot */}
        <section className="snapshot">
          <div className="snapshot-content">
            <div className="snapshot-item">
              <span className="snapshot-label">Role</span>
              <span className="snapshot-value">{caseStudy.role}</span>
            </div>
            <div className="snapshot-item">
              <span className="snapshot-label">Client</span>
              <span className="snapshot-value">{caseStudy.client}</span>
            </div>
            <div className="snapshot-item">
              <span className="snapshot-label">Owned</span>
              <span className="snapshot-value">{caseStudy.owned}</span>
            </div>
          </div>
        </section>

        {/* Full Content */}
        <div className="case-study-content">
          <ReactMarkdown>{caseStudy.fullContent}</ReactMarkdown>
        </div>

        {/* One-liner */}
        {caseStudy.oneLiner && (
          <section className="one-liner">
            <p className="one-liner-text">"{caseStudy.oneLiner}"</p>
          </section>
        )}
      </article>
    </div>
  );
}
