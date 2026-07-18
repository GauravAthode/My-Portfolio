import dotenv from "dotenv";
dotenv.config();

import app from "./src/routers/indexRouter.js";
import { connectDb } from "./src/config/db.js";

const PORT = process.env.PORT || 4500;

connectDb().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});

