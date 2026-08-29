# Portfolio Site

A React-based portfolio site built for content strategists. Clean, substance-focused design with case studies as the centerpiece.

## Quick Start

### Prerequisites
- Node.js 16+ installed
- A GitHub account
- A Netlify account (free)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser.

3. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Updating Your Domain
The domain appears throughout the site but lives in ONE place for easy updating.

**To change your domain:**
1. Open `src/config.js`
2. Find this line: `domain: "yourname.com",`
3. Replace with your actual domain
4. Save, commit, push to GitHub — Netlify auto-deploys

### Updating Your Information
All site content lives in `src/config.js`:
- `siteName`: Your name or business name
- `email`: Contact email
- `social`: Social media links (optional)
- `description`: SEO description
- `caseStudies`: Your case study content

### Adding a New Case Study
Each case study in the config has this structure:
```javascript
{
  id: "unique-id",
  eyebrow: "INDUSTRY · FOCUS AREA",
  headline: "Main headline",
  shortDescription: "1-2 sentence summary",
  heroStats: [
    { number: "123", label: "metric description" },
    { number: "456", label: "metric description" },
    { number: "789", label: "metric description" }
  ],
  role: "Your role on the project",
  client: "Client name",
  owned: "What you specifically owned",
  fullContent: `
## Section Heading
Your markdown content here...
  `,
  oneLiner: "A one-sentence summary of your approach"
}
```

The `fullContent` supports markdown formatting:
- `## Headers`
- `**bold**` text
- `- bullet` lists
- Regular paragraphs

### Updating Social Links
In `src/config.js`:
```javascript
social: {
  twitter: "yourhandle",  // Set to null to hide
  linkedin: "yourprofile",  // Set to null to hide
  email: "hello@yourname.com"
}
```

## Deployment to Netlify

### First Time Setup

1. **Push to GitHub**
   - Make sure your repository is on GitHub (public or private)
   - Run `git push` to send your code

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Authorize GitHub and select your repository
   - Build settings should auto-detect:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Connect Your Domain**
   - In Netlify site settings, go to "Domain management"
   - Add your custom domain
   - Netlify will give you nameserver addresses
   - Update your domain registrar to use those nameservers
   - SSL certificate auto-generates (takes ~24 hours)

### After Deployment

Every time you push to GitHub, Netlify automatically:
1. Pulls your latest code
2. Runs `npm run build`
3. Deploys the site
4. Your site updates within seconds

## Making Updates

The workflow is always the same:

1. **Make changes locally**
   ```bash
   # Edit src/config.js, pages, components, etc.
   npm run dev  # Test locally
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Describe what changed"
   git push
   ```

3. **Done** — Netlify auto-deploys. Site updates in ~30 seconds.

## File Structure

```
portfolio-site/
├── src/
│   ├── config.js              ← Site content (domain, case studies, etc.)
│   ├── App.jsx                ← Main app component
│   ├── App.css                ← Global styles and design tokens
│   ├── pages/
│   │   ├── HomePage.jsx       ← Work/case studies grid
│   │   ├── CaseStudyPage.jsx  ← Full case study page
│   │   ├── AboutPage.jsx      ← About section
│   │   ├── ContactPage.jsx    ← Connect section
│   │   └── *.css              ← Page styles
│   ├── components/
│   │   ├── Header.jsx         ← Navigation header
│   │   ├── Footer.jsx         ← Footer
│   │   ├── CaseStudyPreview.jsx ← Case study card
│   │   └── *.css              ← Component styles
│   └── main.jsx               ← React entry point
├── index.html                 ← HTML template
├── package.json               ← Dependencies
├── vite.config.js             ← Build config
├── .gitignore                 ← Git ignore rules
└── README.md                  ← This file
```

## Design System

The site uses CSS variables for easy customization. Edit the `:root` section in `src/App.css`:

```css
:root {
  --color-bg: "#fafaf9";           /* Background */
  --color-text-primary: "#1a1a1a"; /* Main text */
  --color-accent: "#0066cc";       /* Links and highlights */
  /* ... more colors and spacing variables ... */
}
```

## Performance Notes

- **No external APIs** — Everything is static, renders instantly
- **Lightweight** — Final site is ~50KB gzipped
- **Mobile-responsive** — Fully tested on mobile, tablet, desktop
- **Accessibility** — WCAG 2.1 AA compliant; keyboard navigation works throughout

## Troubleshooting

### Site doesn't deploy after push
- Check Netlify build logs: Dashboard → Deploys → Click recent deploy
- Ensure `npm run build` completes without errors locally
- Check `.gitignore` isn't excluding important files

### Styles look broken locally
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Restart dev server: Stop with Ctrl+C, run `npm run dev` again

### Domain not working
- Allow 24-48 hours for DNS propagation
- Check Netlify Domain settings → DNS records match what your registrar shows
- Verify HTTPS is enabled in Netlify settings

## Questions?

Refer to:
- [Vite docs](https://vitejs.dev) for build/dev questions
- [React docs](https://react.dev) for component questions
- [Netlify docs](https://docs.netlify.com) for deployment questions

---

Built with React, Vite, and designed for clarity. Your site, your way.
