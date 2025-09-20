import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// dotenv.config();
const app = express();

// app.use(cors());
// app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("MLSC API is running...");
});

// Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
