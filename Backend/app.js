import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import connectDB from "./db/db.js";
import { MailtrapClient } from "mailtrap";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/v1", authRoutes);
connectDB();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

export const mailTrapClient = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTEN AT ${PORT}`);
});
