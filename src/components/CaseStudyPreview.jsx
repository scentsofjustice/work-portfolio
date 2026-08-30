import './CaseStudyPreview.css';

export default function CaseStudyPreview({ caseStudy, onClick }) {
  return (
    <button className="case-study-preview" onClick={onClick}>
      <article className="preview-card">
        <div className="preview-header">
          <span className="eyebrow">{caseStudy.eyebrow}</span>
          <h3 className="preview-headline">{caseStudy.headline}</h3>
        </div>
        
        <p className="preview-description">{caseStudy.shortDescription}</p>
        
        <div className="preview-stats">
          {caseStudy.heroStats.slice(0, 3).map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div className="preview-footer">
          <span className="read-more">Read case study →</span>
        </div>
      </article>
    </button>
  );
}
