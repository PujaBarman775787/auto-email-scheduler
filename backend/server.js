import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

if (process.env.VERCEL_ENV === undefined) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}

export default app;