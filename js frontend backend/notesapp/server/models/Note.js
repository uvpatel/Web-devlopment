import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Note", noteSchema);
