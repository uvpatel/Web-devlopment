import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DB/connection.db.js";
import userRoutes from "./routes/user.routes.js"


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// connect MongoDB
connectDB();


// 🏠 Root route
app.use("/api/users", userRoutes)


// 👤 Root
app.post("/", async (req, res) => {
  res.send("Welcome to Taskly API")
});


// 🎧 Start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
