# AI Product Factory (APF)

**Turn any idea, repo, or unfinished project into a market-ready, sellable product in under 30 minutes.**

APF is the missing **Productization Operating System** — the publisher layer that validates, positions, prices, packages, and launches your AI projects.

## 🚀 Vision
APF turns builders into founders by automating everything between “I shipped code” and “I’m earning revenue.”

## ✨ Features
- **Devil’s Advocate Validation Agent**: Scores and pivots your ideas early to avoid building the wrong thing.
- **Artifact Dependency Graph**: Composable, stale-aware intelligence that keeps your strategy in sync.
- **Feature-to-Benefit Translation**: Automatically translates technical features into outcomes that sell.
- **Mobile-first Review & Approval**: Designed for quick decision-making on the go.
- **Single ZIP Export**: Get a complete launch package (README, landing page, pricing, tweets, etc.) ready for Gumroad or Product Hunt.

## 🛠 Tech Stack
- **Frontend**: React 18, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Hono, Cloudflare Workers.
- **Storage**: Cloudflare Workers Assets + (Planned) Durable Objects with SQLite.
- **Orchestration**: (Planned) Inngest for durable workflows.

## 📦 Getting Started

### Prerequisites
- Node.js & npm
- Cloudflare Wrangler CLI (`npm install -g wrangler`)

### Installation
```bash
npm install
```

### Development
```bash
npx wrangler dev
```

### Deployment
```bash
npx wrangler deploy
```

## 🏗 Project Structure
- `/src/index.ts`: Hono API and Worker entry point.
- `/public/index.html`: Main React application (SPA).
- `wrangler.json`: Cloudflare Worker configuration.

## 📄 Documentation
- [Product Requirements Document (PRD)](./PRD.md)
- [Architecture & Design Strategy](./PRD.md#technical-architecture)
