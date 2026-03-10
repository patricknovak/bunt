# Bunt & Associates — Digital Transformation Platform

Modern website and AI-powered transportation planning tools for Bunt & Associates Engineering Ltd., Western Canada's leading transportation consulting firm.

**Live Site:** https://patricknovak.github.io/bunt/

## Features

- **Modern Website** — Next.js 14+, TypeScript, Tailwind CSS with 39 static pages
- **AI Tools** — 5 interactive, AI-powered transportation analysis tools (Claude API)
- **Project Portfolio** — 8 case studies with filterable gallery
- **Client Portal** — Demo project tracking dashboard
- **Blog Platform** — Insights/thought leadership content
- **GitHub Pages** — Automatic deployment via GitHub Actions

## AI-Powered Tools

| Tool | Description |
|------|------------|
| Traffic Simulator | Canvas-based intersection visualization + AI Level of Service analysis |
| Parking Analyzer | ITE-based demand forecasting with AI right-sizing recommendations |
| Safety Assessment | FHWA/TAC road safety screening with risk scoring |
| Trip Generator | ITE 11th Edition trip generation with TDM adjustments |
| Report Assistant | Professional report section generation |

## Getting Started

```bash
npm install
npm run dev       # Development server at http://localhost:3000
npm run build     # Static export to /out
npm run lint      # ESLint checks
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions.

### GitHub Pages Setup

1. Go to **Settings > Pages** in your GitHub repo
2. Set **Source** to "GitHub Actions"
3. Push to `main` — the workflow handles the rest

### AI Tools Configuration

The AI tools connect to the Anthropic Claude API. Users provide their own API key via the settings panel (gear icon). Keys are stored in localStorage only — never sent to any server.

## Tech Stack

- Next.js 14+ (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Leaflet (maps)
- Anthropic Claude API
- Lucide React (icons)
- GitHub Actions (CI/CD)

## Project Structure

```
src/
├── app/          # Pages (App Router)
├── components/   # React components
├── lib/
│   ├── ai/       # Claude API integration & prompts
│   ├── data/     # Project, service, office data
│   ├── simulation/ # Traffic simulation engine
│   └── utils/    # Helpers
└── styles/       # Global CSS
```
