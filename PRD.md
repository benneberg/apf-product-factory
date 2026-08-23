# Product Requirements Document (PRD) - AI Product Factory (APF)

**Version:** 2.1  
**Status:** Production-Ready Blueprint  
**Positioning:** The Publisher, Not the Author  
**Tagline:** Turn any idea, repo, or unfinished project into a market-ready, sellable product in under 30 minutes.

---

## 1. Executive Summary

### Core Thesis
Everyone builds AI that writes code. Nobody builds AI that turns that code into businesses. APF is the missing **Productization Operating System** — the publisher layer that validates, positions, prices, packages, and launches.

### One-Line Pitch
Upload a repo or idea → Get a complete, revenue-ready product package.

### Key Differentiators
- **Devil’s Advocate Validation Agent**: Early kill/pivot scoring.
- **Artifact Dependency Graph**: Composable, stale-aware intelligence.
- **Feature-to-Benefit Translation**: Tech → Outcomes.
- **Mobile-first review & approval**: Strategic review on the go.
- **Model-agnostic routing**: Strategic use of different LLMs (Claude, GPT, etc.).

---

## 2. Vision & Principles

### Vision
APF turns builders into founders by automating everything between “I shipped code” and “I’m earning revenue.”

### Core Principles
1. **Outcome Obsessed**: Optimize for revenue, not code elegance.
2. **Publisher Mindset**: Decide, refine, package (never just generate).
3. **Devil’s Advocate First**: Kill weak ideas early.
4. **Artifact-First Architecture**: Versioned, dependency-aware, human-in-the-loop (HITL).
5. **Mobile-First Decisioning**: Heavy input on desktop, strategic review on mobile.
6. **Compounding Intelligence**: Portfolio-level learning.

---

## 3. Target Users
- **Primary**: Indie hackers, solo AI builders, open-source maintainers.
- **Secondary**: Agencies, product teams, startup studios.

---

## 4. Agents (V1 Core Set)
1. **Validation Agent (Devil’s Advocate)**: Scores & pivots.
2. **Technical Context Agent**: Lightweight code analysis.
3. **Feature-to-Benefit Mapper**: Tech → Outcomes.
4. **Market Intelligence Agent**: Competitors, demand.
5. **Product Strategist**: Positioning, concept.
6. **Naming Agent**: Names, taglines.
7. **Pricing Agent**: Tiers, bundling.
8. **Documentation Agent**: README, guides.
9. **Sales Page Agent**: Landing copy, objections.
10. **Asset Agent**: Visual prompts.
11. **Distribution Agent**: Launch content per channel.

---

## 5. Scoring System
Every project gets a **Productization Score (0-100)** based on:
- Market Demand
- Competition
- Build Effort
- Support Burden
- Distribution Fit
- Revenue Potential

*Note: A score < 60 triggers strong pivot recommendations.*

---

## 6. Golden Path Workflow (V1)
1. **Input**: `npx apf push`, GitHub webhook `[APF-Launch]`, or manual idea.
2. **Validation**: Scores + pivots (mobile notification).
3. **User Decisions**: Audience, name, pricing tweaks.
4. **Artifact Graph Execution**: Parallel/dependent agent runs.
5. **HITL Review**: Accept / Reject+Regenerate / Edit.
6. **Export**: Single ZIP launch package (ready for Gumroad).

### ZIP Contents
- `README.md`
- `landing-page.md`
- `pricing.json`
- Launch tweets/threads
- Asset prompts + generated images
- Strategy docs
- Productization Scorecard

---

## 7. Artifact Dependency Graph
- Directed graph of versioned artifacts.
- Automatic stale flagging on upstream changes.
- Visual graph in UI.
- Supports surgical regeneration.

### Schema (Key Fields)
- `id`, `project_id`, `type`, `version`, `content (JSONB)`, `score`, `is_stale`, `depends_on[]`, `agent_id`.

---

## 8. Technical Architecture
- **Frontend**: Next.js 14 (or React SPA) + Tailwind + shadcn/ui + PWA.
- **Backend**: Supabase (Postgres, Auth, Storage, Edge Functions) or Cloudflare Workers.
- **Orchestration**: Inngest (durable workflows).
- **LLM**: Vercel AI SDK with smart routing.
- **Database**: Projects, Artifacts, Agent Runs tables.

---

## 9. Revenue Model
- **Free**: 3 projects/mo, watermarked.
- **Pro ($29/mo)**: Unlimited, full features.
- **Studio ($99/mo)**: Teams, API, white-label.

---

## 10. Roadmap
- **V1 (6-8 weeks)**: Golden Path + Graph + CLI + Mobile + ZIP.
- **V2**: Portfolio Intelligence, deeper analysis, asset gen.
- **V3**: Autonomous publishing.
- **V4**: Full autonomous factory.
