# 🗣️ FluentLoop (In Development)

**AI-Driven, Gamified English Speaking Platform (CEFR A1-C2)**

> *Note: This project is currently under active development as part of my 2026/2027 portfolio.*

## 📖 Overview
FluentLoop redefines language acquisition by bridging the gap between discovering new vocabulary and mastering active, real-world speech. Unlike traditional apps that rely on passive memorization and fleeting corrections, FluentLoop transforms completely unfamiliar words and actual conversational errors into a continuous, personalized practice loop. A skill is never marked as "learned" until the user successfully deploys it in a novel, dynamic context.

## ✨ The FluentLoop Method (User Journey)
1. **Curate (Active Discovery):** Users select their target CEFR level and intuitively swipe through vocabulary decks (Tinder-style). This active filtering isolates true knowledge gaps, instantly building a high-yield, personalized practice queue.
2. **Speak (Contextual Generation):** The engine dynamically synthesizes voice-based prompts designed to seamlessly elicit the target vocabulary in real-world scenarios. Users respond via raw, unscripted speech.
3. **Analyze (AI-Powered Diagnostics):** Audio is transcribed and semantically analyzed in real-time. The system delivers actionable, granular diagnostics on grammar integrity, vocabulary precision, and pronunciation clarity.
4. **Adapt (Granular Error Mapping):** Mistakes aren't just highlighted; they are structurally mapped by error type (e.g., subject-verb agreement, improper tense). The system prioritizes these specific weaknesses, adapting future prompts to target exact lexical or grammatical failures.
5. **Play (Gamified Retention):** To drive daily habit-building, the learning loop is reinforced with dynamic micro-challenges, mastery points, and progression streaks, ensuring that overcoming linguistic hurdles feels highly rewarding.

## ⚙️ Engineering Highlights (Under The Hood)
FluentLoop is architected to solve complex scheduling and data-routing challenges at scale:

* **Prerequisite-Based Skill Graph (DAG):** Models language acquisition as a Directed Acyclic Graph. If a user struggles with the "Past Perfect" node, the algorithm automatically traverses back to verify mastery of the "Past Simple" prerequisite.
* **Algorithmic Error Triage (Priority Queue):** Not all mistakes carry the same weight. A custom priority-queue scheduler ranks recurring errors based on severity, historical frequency, and prerequisite impact, deterministically computing the optimal next-practice scenario.
* **Context-Aware Hybrid Retrieval:** Leverages PostgreSQL (`pgvector`) for high-dimensional semantic search, dynamically fetching the most relevant, engaging conversational contexts tailored to the user’s immediate skill gaps.
* **Asynchronous AI Pipeline:** Heavy-compute tasks like OpenAI Whisper transcription and NLP diagnostics are entirely decoupled from the main UI thread via background workers, guaranteeing a zero-latency, non-blocking user experience.

## 🛠️ Tech Stack
* **Frontend:** React, TypeScript, Vite (PWA architecture for a fluid, gamified UI)
* **Backend:** Python, FastAPI (High-performance, async REST APIs)
* **Database:** PostgreSQL with `pgvector` (Relational integrity + Vector embeddings)
* **AI / NLP:** OpenAI Whisper, Semantic Analysis Models
* **Infrastructure:** Docker, CI/CD Pipelines, Google Cloud Platform (GCP)

## 🚀 Current Status
- [x] System Architecture & Database Schema Design
- [x] Initial React/Vite + FastAPI setup (Monorepo)
- [ ] Core gamification UI (Swipe mechanics & Dashboard)
- [ ] AI Audio processing integration
- [ ] Skill Graph (DAG) & Priority Queue algorithms implementation
