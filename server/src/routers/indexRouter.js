import express from "express";
import cors from "cors";

import contactRouter from "./contactRouter.js";

import { notFound, errorHandler } from "../middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.CLIENT_URL, // keep env also
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // Postman / server-to-server
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked: " + origin));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Important for preflight (OPTIONS)
app.options("*", cors());


app.get("/", (req, res) => res.send("✅ Portfolio API Running"));

app.use("/api/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
