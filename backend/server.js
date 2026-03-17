import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

// Only listen locally
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}

// Export app for Vercel serverless
export default app;