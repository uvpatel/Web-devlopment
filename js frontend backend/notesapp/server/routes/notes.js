import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a note
router.post("/", async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
});

// DELETE a note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
