# 🗣️ FluentLoop (In Development)
**Adaptive English Speaking Platform**

> **Note:** This project is currently under active development.

FluentLoop is an end-to-end platform that transforms spoken-English mistakes into a personalized practice plan, verifying mastery through novel-context retesting.

## 🛠️ Tech Stack
* **Frontend:** React, TypeScript, Vite
* **Backend:** Python, FastAPI
* **Database:** PostgreSQL (pgvector)
* **AI / NLP:** OpenAI Whisper, Semantic Hybrid Retrieval
* **Infrastructure:** Docker, GCP

## ⚙️ Core Architecture (Planned)
* **Prerequisite-Based Skill Graph:** Maps out the user's language gaps.
* **Hybrid Exercise Retrieval Engine:** Finds the most relevant practice scenarios.
* **Priority-Queue Scheduler:** Schedules practice based on error severity and recurrence.
* **Asynchronous Audio Pipeline:** Handles speech-processing decoupled from the main UI.