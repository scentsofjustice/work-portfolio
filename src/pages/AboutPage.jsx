import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <article className="about-content">
        <header className="about-header">
          <h1>About</h1>
        </header>

        <section className="about-section">
          <h2>Content strategy for organizations at scale</h2>
          <p>
            I'm a content strategist who works at the intersection of information architecture, content design, and organizational systems. I help enterprises solve the structural problems that prevent content from working—the problems that no amount of better writing or prettier design can fix.
          </p>
        </section>

        <section className="about-section">
          <h2>The structural problem</h2>
          <p>
            Most organizations have a content problem masquerading as a design problem. They have thousands of pieces of content with no coherent structure, no agreed ownership, no shared taxonomy, and no governance framework. Content lives in isolation—in silos, duplicated across systems, inaccessible to the people who need it, invisible to the people who could benefit from it.
          </p>
          <p>
            Leadership wants to implement AI, personalization, or search. But you can't personalize what you can't structure. You can't automate discovery for what's not catalogued. You can't scale what's not governed.
          </p>
          <p>
            The fix is always the same: start with structure.
          </p>
        </section>

        <section className="about-section">
          <h2>What I do</h2>
          <p>
            I design the information architecture, taxonomy frameworks, content governance models, and publishing systems that let enterprises get control of their content and keep it over time. I work at the enterprise and product level—building systems that let organizations scale thoughtfully without centralizing all decisions.
          </p>
          <p>
            I pair this with the ways of working: the processes, templates, job aids, and measurement frameworks that let people execute at scale without constant oversight.
          </p>
        </section>

        <section className="about-section">
          <h2>Background</h2>
          <p>
            I started in advertising as a copywriter—learning how to make ideas clear and compelling under pressure. But I kept watching good content disappear into bad systems. A beautiful campaign would launch, live for a year, and vanish. Content teams would spend months on messaging and positioning, only to watch it get buried in navigation that didn't support it.
          </p>
          <p>
            That moved me from "how do we say this?" to "where does this belong, and why?" From copywriting to content strategy. From campaigns to systems. From temporary to sustainable.
          </p>
          <p>
            Now I work with enterprises who are trying to figure out the same thing: how do we build content systems that actually scale? How do we make decisions about what matters? How do we keep that working as organizations grow?
          </p>
        </section>

        <section className="about-section">
          <h2>Approach</h2>
          <p>
            I believe the best strategy is rooted in evidence, not opinions. I start by mapping how information actually flows—what exists, what's broken, what's missing, and why. I look for patterns in the chaos. Then I design systems simple enough to be adopted and flexible enough to adapt over time.
          </p>
          <p>
            Structure is a tool for clarity, not bureaucracy. A good governance model makes work easier for the people doing it, not harder. It should feel like scaffolding—something you build once and then barely think about.
          </p>
        </section>
      </article>
    </div>
  );
}
