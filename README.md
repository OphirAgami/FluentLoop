# 🗣️ FluentLoop

**From unfamiliar words and recurring mistakes to targeted English speaking practice.**

> In development. Current milestone: a React/TypeScript client connected to a Python/FastAPI backend.

## Why I'm Building FluentLoop

While improving my spoken English, I kept running into two problems:

- **Expanding my active vocabulary:** I needed a way to discover words beyond the ones I already knew and learn to use them naturally in conversation.
- **Making grammar corrections stick:** I could understand a correction and still repeat the same mistake later.

I'm building FluentLoop to turn these challenges into a personal practice plan. The planned experience starts with vocabulary decks: learners swipe through words, filter out familiar ones, and collect unfamiliar ones for practice. These words and recurring speaking mistakes then guide contextual exercises and follow-up questions.

The goal is to track whether learners can use new vocabulary and corrected grammar patterns independently, across different situations and learning sessions.

## Current Prototype

- [x] React/TypeScript frontend with Vite.
- [x] FastAPI backend with a JSON endpoint and local CORS configuration.
- [x] Frontend API request that displays the backend response.

Explore the [frontend API request](frontend/src/App.tsx) and the [backend endpoint](backend/main.py), or follow the local setup instructions below.

## Planned Learning Loop

1. **Discover:** Choose a target CEFR level (A1-C2), review vocabulary cards, and separate familiar words from unfamiliar ones.
2. **Practice:** Learn a small group of target words and optionally add a grammar pattern recommended by the system's priority queue of recurring errors. Answer a short speaking prompt that encourages use of the selected words and, when included, the grammar pattern.
3. **Review:** Receive vocabulary and grammar feedback after each spoken response, including corrected sentences and similar examples demonstrating the correct usage or grammar pattern. Recurring errors are linked to specific skills.
4. **Adapt:** Update practice priorities and select follow-up exercises based on the learner's errors, practice history, and prerequisite skills.
5. **Retest:** Use the target words or grammar pattern in a different context and save the result to the learner's progress record.

For example, a learner selects **"reluctant"** and **"opportunity"** for practice. The planned system introduces their meanings and asks about an opportunity the learner felt reluctant to accept. If the learner says **"I have went through this before,"** the feedback would show **"I have gone through this before"** and related examples such as **"She has written about this"** and **"We have seen this before."** Repeated errors in this pattern would raise its practice priority, allowing the system to recommend a present-perfect focus in a later session and check its use in a new context.

**Design principle:** a swipe is a self-assessment; progress should reflect performance across different practice contexts.

## Planned Engineering Design

| Engineering challenge | Planned approach and purpose |
| --- | --- |
| Keep progress persistent and specific to each learner | Store users, skills, and practice attempts in PostgreSQL. Check authorization on each read and write so learners can access their own records. |
| Decide what to practice next | Use a **priority queue** with an explicit scoring heuristic based on error frequency, severity, and prerequisite relationships to rank practice needs and recommend an optional grammar focus. |
| Identify gaps in foundational skills | Represent curated skill dependencies as a **directed acyclic graph (DAG)** and traverse prerequisite links to select follow-up checks. |
| Retrieve relevant practice contexts | Combine **PostgreSQL full-text search** with **`pgvector` similarity search**, filtering by CEFR level and target skill to match both wording and meaning. |
| Keep the interface responsive during audio processing | Run transcription and feedback analysis in **background workers**, exposing processing status to the client while it waits for results. |

These components are implementation targets. The next milestone below focuses on accounts and persistent progress.

## Technology

**In use:** React, TypeScript, Vite, Python, FastAPI.

**Planned:** PostgreSQL, `pgvector`, Whisper-based transcription, and language-model feedback.

**Later infrastructure milestones:** Docker, CI/CD, and deployment to Google Cloud Platform (GCP).

## Run the Current Prototype

Prerequisites: Node.js 24 LTS with npm, Python 3.11 or newer, and Git. The commands below are for macOS/Linux.

### 1. Clone the repository

```bash
git clone https://github.com/OphirAgami/FluentLoop.git
cd FluentLoop
```

### 2. Start the backend

From the repository root, in the first terminal:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install fastapi uvicorn
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

API documentation: <http://localhost:8000/docs>.

### 3. Start the frontend

Open a second terminal at the repository root:

```bash
cd frontend
npm ci
npm run dev -- --port 5173 --strictPort
```

Open <http://localhost:5173>. The page should display the message returned by the FastAPI backend.

## Next Milestone

Build the first learning flow with saved, per-user progress:

- [ ] User registration, login, and logout.
- [ ] CEFR level selection and a small vocabulary set for initial practice.
- [ ] Per-user vocabulary status and saved practice progress.
- [ ] A basic progress screen.

**Completion check:** two accounts retain different progress for the same word after logout and login, and requests to access another account's records are rejected.

Targeted practice, adaptive scheduling, speech processing, and the remaining engineering components follow this foundation. XP, streaks, and challenges will be added after the core learning flow works.

## Author

[Ophir Rephael Agami](https://github.com/OphirAgami) — a personal software engineering project inspired by my own English-learning experience.
