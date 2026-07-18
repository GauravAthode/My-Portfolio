// Minimal in-memory rate limiter for the contact endpoint.
// Good enough for a single-instance portfolio API; swap for a
// Redis-backed limiter (or express-rate-limit) if this ever runs
// across multiple instances.
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

const hits = new Map();

export const contactRateLimiter = (req, res, next) => {
  const key = req.ip;
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(key, { start: now, count: 1 });
    return next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return res.status(429).json({ message: "Too many messages sent. Please try again later." });
  }

  entry.count += 1;
  next();
};
