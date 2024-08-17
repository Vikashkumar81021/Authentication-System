import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import connectDB from "./db/db.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("ap1/v1", authRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`SERVER IS LISTEN AT ${PORT}`);
});
