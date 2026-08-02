// src/sanity/env.ts

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}\n\n` +
        `Please add it to your .env.local file (or your deployment environment) and restart the server.`
    )
  }

  return value
}

export const apiVersion = getEnv(
  "NEXT_PUBLIC_SANITY_API_VERSION",
  "2026-08-02"
)

export const dataset = getEnv("NEXT_PUBLIC_SANITY_DATASET")

export const projectId = getEnv("NEXT_PUBLIC_SANITY_PROJECT_ID")