// ============================================================
// SITE CONFIG — Single source of truth for domain and metadata
// ============================================================
// TO UPDATE DOMAIN: Change the value below, push to GitHub, Netlify auto-deploys
// All references throughout the site pull from this config

export const siteConfig = {
  // Core identity
  domain: "theotherdionwarrick.com", // ← CHANGE THIS TO YOUR DOMAIN
  siteName: "The Other Dion Warrick",
  siteUrl: "https://theotherdionwarrick.com",
  
  // Contact
  email: "hello@yourname.com",
  
  // Social (optional—used in footer)
  social: {
    twitter: null, // e.g., "@yourhandle"
    linkedin: null, // e.g., "yourprofile"
    email: "hello@yourname.com"
  },
  
  // SEO and Open Graph
  description: "Content strategist focused on structural content design. I help organizations decide what information matters, where it belongs, and how it stays useful over time.",
  
  // Case studies (ordered as they appear)
  caseStudies: [
    {
      id: "m365-governance",
      eyebrow: "ENTERPRISE M365 · GOVERNANCE",
      headline: "Transforming sprawl into scalable knowledge management",
      shortDescription: "How I shaped a governance model for business units to improve content ownership, findability and risk management.",
      heroStats: [
        { number: "865+ sites", label: "audited and evaluated" },
        { number: "1 IA for all", label: "standardized for Sites, Teams, and Libraries" },
        { number: "24+ aids", label: "self-service transformation assets delivered" }
      ],
      role: "Content Strategist – Structured Content Lead",
      client: "Enterprise reinsurance",
      owned: "IA, taxonomy, metadata framework, content operations design",
      fullContent: `
## The Challenge
M365 growth outpaced governance. Teams and SharePoint sites sprawled independently, content duplicated across platforms, and no one enforced ownership or review cycles. Leadership needed to scale governance so business units could remediate own sites and content with minimal help from a small IT team. The baseline: zero sensitivity labels, no lifecycle policies, ad-hoc naming, and search that consistently surfaced the wrong document version.

## What I Did
- Mapped 60+ pain points from user journey analysis and discovery findings
- Designed three-tier IA: separated enterprise-facing knowledge, project content, and team collaboration—each with distinct governance
- Built minimal metadata framework: three required fields (Content Type, Status, Owner) with clear rules for which content requires what
- Structured federated governance: enterprise layer enforces standards; team layer maintains flexibility
- Authored scalable toolkit: job aids and playbooks so BU leads could execute without centralized escalation
- Defined 12-KPI measurement baseline across four categories (health, discoverability, lifecycle, risk) with reporting sources

## The System
The model does not govern everything. Enterprise content (policies, templates, board materials) gets strict controls: named owners, mandatory metadata, quarterly reviews, sensitivity labels. Team content stays loose—teams choose their own structure as long as they honor site purpose.

Each BU receives the same toolkit: a playbook showing how to classify their content, apply the metadata schema, designate owners, and set review cycles. A scorecard tracks four outcomes: owners named? Metadata complete? Stale content archived? Sensitivity labels in place?

It scales because new BUs follow the pattern, not reinvent it.

## The Tradeoff
No workshops or client interviews were possible under scope. So I reverse-engineered the problem from artifacts: user journey documentation, admin center reports, and feedback on prior attempts. This forced pragmatism. Recommendations solve acute pain (duplication, lost documents, unclear ownership) without proposing technology rework. They are immediately implementable—which matters when bandwidth is tight.

## Result
Established a governance baseline where none existed. The company now has defined taxonomy and metadata schema for enterprise content, a federated governance model ready for rollout, and a 12-KPI measurement framework structured across four categories with reporting sources and cadence.
      `,
      oneLiner: "“Your partnership helped create alignment among team members, making it easier to coordinate efforts, share information, and stay connected on key priorities.” —Change Management Lead" 

    },
    {
      id: "centene-medicaid",
      eyebrow: "HEALTHCARE / MEDICAID · INFORMATION ARCHITECTURE & SEO STRATEGY",
      headline: "Turning 32 disconnected Medicaid sites into one findable system",
      shortDescription: "Led IA and SEO strategy behind a unified navigation model replacing 32 independently-built structures with one task-based system.",
      heroStats: [
        { number: "4,653", label: "pages analyzed across 32 states" },
        { number: "84%", label: "content overlap with no shared structure" },
        { number: "0%", label: "IA standardization going in" }
      ],
      role: "IA & SEO Strategy",
      client: "Centene Public Medicaid Sites",
      owned: "Information architecture model, navigation redesign, SEO framework",
      fullContent: `
## The Challenge
Every state built its Medicaid site on its own, with no shared standard. The result: members hit 4–5 clicks to reach basic tasks like pharmacy or provider search, a 22-topic "Resources" catch-all buried real content, and only half of sites even surfaced "Find a Doctor" in primary navigation. On the search side, generic page titles, missing meta descriptions, and a 72%-PDF link footprint meant Google couldn't tell pages apart or index them well.

## What I Did
- Audited navigation and content structure across 32 sites to quantify where high-value tasks were buried
- Defined six IA design principles—task-based labels, plain language, one place to manage a plan—to guide every structural decision
- Designed an 80/20 governance model: ~80% of IA, templates, and taxonomy standardized enterprise-wide; ~20% left state-configurable
- Restructured primary navigation—elevated Find a Provider to L1, cut Pharmacy from 4 clicks to 2, decomposed the 22-topic Resources dump into 3 purpose-driven sections
- Built the SEO remediation framework—prioritized fixing duplicate titles, missing metadata, and PDF dependency, and defined a phased keyword and schema strategy

## The System
The model isn't a one-time redesign—it's a standard other states can plug into. 80% of the IA (nav structure, page templates, URL patterns, content taxonomy) is fixed and enterprise-owned; the remaining 20% flexes for state-specific plans and compliance content. Corporate owns the platform and standards; states own their content within it—so any new state health plan launches inside the same structure instead of inventing its own.

## The Tradeoff
Standardizing navigation meant some states lost structures they'd built and were used to. We prioritized the 15 topics that showed up in 84%+ of states as the shared foundation first, and left room for state-specific programs rather than forcing full uniformity on day one.

## Result
The framework and phased rollout plan (pilot state, then scale to all 32 sites with AEM templates and redirects) is defined and approved for implementation. Pilot-stage outcomes are ahead.
      `,
      oneLiner: "I turn fragmented, duplicative enterprise sites into one findable, searchable system—without erasing what already works."
    },
    {
      id: "reliance-intranet",
      eyebrow: "INSURANCE · INFORMATION ARCHITECTURE, TAXONOMY & CONTENT GOVERNANCE",
      headline: "Giving a modern intranet a spine",
      shortDescription: "Led information architecture, taxonomy, and content governance that turned a fragmented SharePoint estate into a coherent employee experience.",
      heroStats: [
        { number: "Global", label: "user-centered IA" },
        { number: "Hybrid", label: "governance—full RACI" },
        { number: "Platform-wide", label: "UI copy standards" }
      ],
      role: "Content Lead — IA, taxonomy & governance",
      client: "Reliance Matrix (insurance)",
      owned: "SharePoint modernization, IA, taxonomy, governance",
      fullContent: `
## The Challenge
Reliance Matrix wanted a modern intranet—but a redesign alone wouldn't fix the real issue. Content had no shared structure, no agreed ownership, and no consistent voice, so any new SharePoint site would drift back into the same fragmentation. The structure had to come before the skin.

## What I Did
- Led taxonomy and governance strategy for the modernized intranet
- Delivered a user-centered global information architecture on an audience/content continuum
- Defined classification frameworks and scalable UI copy standards adopted across the platform
- Facilitated workshops and design-thinking sessions that aligned cross-functional teams and component leads
- Authored the content governance model and RACI (people, process, policy)

## The System
I organized the IA around what employees need to do, not the org chart—so structure doubles as intuitive navigation and metadata supports deeper search. Taxonomy and classification frameworks keep content consistent and reusable; a hybrid governance model (central committee sets standards, departments own and enforce them) keeps it healthy across its full lifecycle; and UI copy standards hold the voice together as the platform scales.

## The Tradeoff
A fully centralized model is cleaner on paper. I recommended hybrid so departments would actually own and enforce standards in a distributed organization—and when client-side budget compressed timelines, I prioritized the frameworks that let the client continue the work themselves.

## Result
Delivered a user-centered global IA, taxonomy and classification frameworks, a hybrid governance model with full RACI, and platform-wide UI copy standards—plus facilitated the workshops that aligned cross-functional teams.

**Testimonial:** “Dion has demonstrated exceptional leadership in the Experience workstream, delivering a user-centered global information architecture. The ability to facilitate design thinking sessions, define scalable content models, and navigate complex stakeholder dynamics has been critical to our success.” — Lead Modern Workplace Software Architect
      `,
      oneLiner: "I give enterprise content a spine—the information architecture, taxonomy, and governance that make a modern intranet coherent and keep it that way."
    },
    {
      id: "ecolab-personalization",
      eyebrow: "CHEMICALS / B2B · CONTENT PERSONALIZATION & EXPERIENCE STRATEGY",
      headline: "Making a B2B chemical giant feel like a retail brand",
      shortDescription: "Built content models and personalization strategy behind Ecolab's global commercial-reinvention program.",
      heroStats: [
        { number: "8", label: "weeks—discovery to roadmap" },
        { number: "14", label: "workshops—alignment sessions" },
        { number: "Multi-phase", label: "program greenlit March 2025" }
      ],
      role: "B2B Content Personalization Strategy Lead",
      client: "Ecolab",
      owned: "Content personalization framework, ways of working model, technology blueprint",
      fullContent: `
## The Challenge
Ecolab wanted to grow revenue through personalized, tailored experiences—but the foundation wasn't there. Content, data, and technology were siloed, with no shared model for planning, creating, and delivering content across channels at scale. You can't personalize what you can't assemble.

## What I Did
- Delivered the personalization framework and content models that anchor the future-state experience
- Defined the content operating and ways-of-working model
- Contributed to the future-state vision with strategy, marketing, technology, and executive stakeholders
- Informed the roadmap and OKRs with structured, phase-based delivery plan

## The System
The work centered on content modeled for assembly, not one-size-fits-all pages—the structural prerequisite for personalization and cross-channel connection. That paired with new ways of working to analyze, plan, create, and deliver content across every marketing channel, and a path toward a best-of-breed composable stack (Sitecore, AEM, marketing automation) so the models could go live in production.

## The Tradeoff
In an 8-week window the temptation is to design screens. I invested in content models and ways of working first—because personalization only holds at scale if the foundation does.

## Result
Discovery closed with an aligned cross-functional vision, a personalization framework and content models, a technology blueprint and readiness assessment, a change-management program, and defined OKRs/KPIs with a multi-stage roadmap and executive read-out. The program was greenlit and kicked off March 2025, with client accolades on both work quality and team culture.
      `,
      oneLiner: "I build the content models and personalization strategy that let enterprises deliver retail-grade, tailored experiences at scale."
    }
  ]
};
