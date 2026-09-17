from pathlib import Path
import os
import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(Path(__file__).with_name(".env"))

app = FastAPI(title="FluentLoop")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        raise HTTPException(503, "DATABASE_URL is missing")

    try:
        with psycopg.connect(database_url, connect_timeout=3) as conn:
            conn.execute("SELECT 1").fetchone()
    except psycopg.Error:
        raise HTTPException(503, "Database unavailable") from None

    return {"status": "ok", "database": "connected"}