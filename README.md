# Smart Business Idea Generator

> **IBM SkillsBuild Hackathon Project**
> Generate context-aware, fully-validated business ideas in minutes — powered by IBM Granite models on watsonx.ai.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Project Structure](#project-structure)
8. [API Reference](#api-reference)
9. [Demo Mode](#demo-mode)
10. [Deployment](#deployment)

---

## Overview

**IdeaForge AI** is a full-stack Next.js web application that turns a rough business concept into a comprehensive, investor-ready analysis in under five minutes. Users describe their idea in plain language (or via voice / file upload), and a multi-agent AI workflow powered by **IBM Granite** on **watsonx.ai** produces:

- A scored, structured business idea report
- SWOT analysis, competitor landscape, and market sizing
- Revenue model and Business Model Canvas
- Phased product roadmap and pitch scripts

The platform supports both **authenticated** use (ideas are persisted per-user) and a fully-functional **demo mode** that works without any IBM credentials.

---

## Features

| Feature | Description |
|---|---|
| 🤖 **Agentic AI Workflow** | 9 specialised AI agents (Research, Trend Analysis, Competitor, Feasibility, Business Model, Roadmap, Pitch, and more) collaborate to build each report |
| 🧠 **IBM Granite Integration** | Calls `ibm/granite-13b-chat-v2` via IBM watsonx.ai for enterprise-grade text generation |
| 🎤 **Multimodal Input** | Accepts text prompts, voice recordings, image uploads, and PDF documents |
| 📊 **Rich Analytics** | Market growth charts, revenue projections, competitor radar, and industry comparison — all built with Recharts |
| 🗺️ **Idea Map** | Visual node graph (React Flow) showing agent relationships and idea connections |
| 🖼️ **Business Model Canvas** | Auto-generated, fully populated canvas ready to export |
| 🎯 **Pitch Generator** | Elevator pitch, investor narrative, and LinkedIn post tailored to the idea |
| 📅 **Roadmap** | Phase-by-phase plan with milestones from prototype to global scale |
| 🔐 **Auth System** | JWT-based email / password authentication (bcrypt hashing, `jose` tokens) |
| 💾 **Persistent Storage** | File-based JSON store — no database setup required for development |
| 🌙 **Dark / Light Theme** | Full theme switching via `next-themes` |
| 📱 **Responsive Design** | Mobile-first layout with Tailwind CSS and Framer Motion animations |

---

## Tech Stack

**Frontend**
- [Next.js 16](https://nextjs.org/) — App Router, React Server Components
- [React 19](https://react.dev/) with TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) primitives
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Recharts](https://recharts.org/) — charts and data visualisation
- [React Flow](https://reactflow.dev/) — idea map node graph
- [Lucide React](https://lucide.dev/) — icons

**Backend / API**
- Next.js API Routes (Node.js runtime)
- [IBM watsonx.ai](https://www.ibm.com/watsonx) — `granite-13b-chat-v2` text generation
- [IBM Cloud IAM](https://cloud.ibm.com/docs/account?topic=account-iamoverview) — API key → access token exchange
- [jose](https://github.com/panva/jose) — JWT signing / verification
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — password hashing
- File-based JSON persistence (`/data/` directory)

---

## Architecture

```
User Input (text / voice / file)
        │
        ▼
┌───────────────────────────────────────────────┐
│          Next.js App Router (Frontend)        │
│  /generate → /processing → /results          │
│  /dashboard  /saved  /canvas  /roadmap  ...  │
└───────────────────────┬───────────────────────┘
                        │ POST /api/generate
                        ▼
┌───────────────────────────────────────────────┐
│           Next.js API Routes (Backend)        │
│                                               │
│  Auth:  /api/auth/signup  login  logout  me  │
│  Ideas: /api/ideas  /api/ideas/[id]           │
│  Gen:   /api/generate  ──────────────────┐   │
└──────────────────────────────────────────┼───┘
                                           │
                        ┌──────────────────▼──────────────────┐
                        │        IBM watsonx.ai               │
                        │  granite-13b-chat-v2                │
                        │  (IAM token exchange → generation)  │
                        └─────────────────────────────────────┘
                                           │
                                  JSON result merged
                                  with DEMO_RESULT shape
                                           │
                        ┌──────────────────▼──────────────────┐
                        │     File-based JSON store (/data/)  │
                        │   users.json   ideas.json           │
                        └─────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- **Node.js 18+** and **npm**
- *(Optional)* IBM Cloud account with watsonx.ai access for live AI generation

### Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd smart-business-idea-generator

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local — see Environment Variables section below

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Environment Variables

Copy [`.env.example`](.env.example) to `.env.local` and fill in the values:

```env
# JWT secret — use a long random string in production
JWT_SECRET=ideaforge-dev-secret-change-in-production

# IBM watsonx.ai credentials
# Leave blank to use Demo Mode (no IBM account required)
IBM_API_KEY=
IBM_PROJECT_ID=
```

| Variable | Required | Description |
|---|---|---|
| `JWT_SECRET` | Yes | Secret used to sign / verify JWT auth tokens |
| `IBM_API_KEY` | No | IBM Cloud API key (enables live Granite generation) |
| `IBM_PROJECT_ID` | No | watsonx.ai project ID |

> **Note:** If `IBM_API_KEY` or `IBM_PROJECT_ID` are absent, the app automatically falls back to [Demo Mode](#demo-mode).

---

Screenshot :
<img width="1536" height="697" alt="image" src="https://github.com/user-attachments/assets/f2e126b2-5b12-4a65-a3d2-df54fbb24a75" />
<img width="1528" height="693" alt="image" src="https://github.com/user-attachments/assets/f2a6a4ac-4d9d-4b12-978a-ee87a71c0e1c" />
<img width="1536" height="701" alt="image" src="https://github.com/user-attachments/assets/da560474-8a89-4195-9928-c0df6764728f" />
<img width="1536" height="697" alt="image" src="https://github.com/user-attachments/assets/173cc5d5-6a65-4cca-baec-9e175b9d1873" />
<img width="1536" height="697" alt="image" src="https://github.com/user-attachments/assets/2035347d-1efe-43ef-aa78-fbda846b47fc" />
<img width="1536" height="697" alt="image" src="https://github.com/user-attachments/assets/34ab900e-57b7-44b5-92a4-f09e7b024f8b" />
<img width="1536" height="643" alt="image" src="https://github.com/user-attachments/assets/7652eeb0-251f-40fd-86c0-9310d7153f19" />

---

## API Reference

### Authentication

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | `{ name, email, password }` | Register a new user |
| `POST` | `/api/auth/login` | `{ email, password }` | Login and receive JWT cookie |
| `POST` | `/api/auth/logout` | — | Clear auth cookie |
| `GET` | `/api/auth/me` | — | Return current authenticated user |

### Ideas

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `GET` | `/api/ideas` | — | List all ideas for the authenticated user |
| `POST` | `/api/ideas` | `{ name, tagline, … }` | Save a new idea |
| `DELETE` | `/api/ideas/[id]` | — | Delete an idea by ID |

### Generation

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/api/generate` | `{ prompt, industry?, budget?, audience?, market? }` | Generate a business idea analysis |

All endpoints require authentication (JWT cookie) except where noted.

---

## Demo Mode

When `IBM_API_KEY` / `IBM_PROJECT_ID` are not set, the `/api/generate` endpoint returns the pre-built `DEMO_RESULT` object from [`src/lib/demo-data.ts`](src/lib/demo-data.ts) enriched with the user's prompt. This lets the entire UI — charts, SWOT, canvas, roadmap, pitch — work without any external dependencies, making local development and demos seamless.

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set the environment variables (`JWT_SECRET`, `IBM_API_KEY`, `IBM_PROJECT_ID`) in the Vercel project settings dashboard.

> **Important:** The file-based JSON store (`/data/`) is ephemeral on serverless platforms. For production, replace [`src/lib/db.ts`](src/lib/db.ts) with a persistent database (PostgreSQL, MongoDB, Cloudant, etc.).

### Self-Hosted

```bash
npm run build
npm run start
```

Ensure the `data/` directory is writable by the Node.js process.

---

<p align="center">Tanmay Paul</p>

