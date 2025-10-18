import { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/api/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAdd = async (note) => {
    await axios.post("http://localhost:5000/api/notes", note);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">📝 Markdown Notes</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <NoteForm onAdd={handleAdd} />
        <NoteList notes={filteredNotes} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
