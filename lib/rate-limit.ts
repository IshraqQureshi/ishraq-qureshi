// Best-effort in-memory rate limiter. On Vercel serverless, function
// instances are ephemeral and not shared across regions/cold starts, so this
// caps abuse from a single warm instance rather than guaranteeing a hard
// global limit — acceptable for a low-volume lead form, not a substitute for
// a real store (Upstash/Redis) if abuse becomes a problem.
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
