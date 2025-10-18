import { useState } from "react";
import MarkdownPreview from "./MarkdownPreview";

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
    };
    onAdd(newNote);
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-2xl mb-6">
      <h2 className="text-xl font-semibold mb-2">Create New Note</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md dark:bg-gray-700"
        />
        <textarea
          rows={6}
          placeholder="Write in Markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border rounded-md dark:bg-gray-700"
        ></textarea>
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="p-2 border rounded-md dark:bg-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Save Note
        </button>
      </form>

      {/* Markdown Preview */}
      {content && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Preview:</h3>
          <MarkdownPreview content={content} />
        </div>
      )}
    </div>
  );
}

export default NoteForm;
