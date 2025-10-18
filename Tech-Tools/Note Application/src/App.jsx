import { useState, useEffect } from "react";
import supabase from "./utils/supabase";
import ReactMarkdown from "react-markdown";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");

  // Fetch notes from Supabase
  async function fetchNotes() {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setNotes(data);
  }

  // Add a new note
  async function addNote() {
    const tagsArray = tags.split(",").map(tag => tag.trim()); // convert string to array
    const { data, error } = await supabase
      .from("notes")
      .insert([{ title, content, tags: tagsArray }])
      .select();

    if (error) console.error(error);
    else {
      setNotes([data[0], ...notes]); // prepend new note
      setTitle("");
      setContent("");
      setTags("");
    }
  }

  // Delete a note
  async function deleteNote(id) {
    const { error } = await supabase.from("notes").delete().eq("id", id);
    if (error) console.error(error);
    else setNotes(notes.filter(note => note.id !== id));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  // Filter notes by search
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()) ||
      note.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Supabase Notes App</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {/* Note Form */}
      <div className="border p-4 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Content (Markdown supported)"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="grid gap-4">
        {filteredNotes.map(note => (
          <div key={note.id} className="border p-4 rounded shadow">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">{note.title}</h2>
              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
            <div className="text-gray-600 mb-2 text-sm">
              {note.tags?.join(", ")}
            </div>
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
