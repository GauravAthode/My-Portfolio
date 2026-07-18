import { Router } from "express";
import { sendMessage } from "../controllers/contactController.js";
import { contactRateLimiter } from "../middlewares/rateLimitMiddleware.js";

const router = Router();

// Public portfolio contact form. Rate-limited since there's no auth
// gate on this endpoint — it's the only open write path on the API.
router.post("/", contactRateLimiter, sendMessage);

export default router;
