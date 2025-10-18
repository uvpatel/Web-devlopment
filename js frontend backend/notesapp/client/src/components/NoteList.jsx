import MarkdownPreview from "./MarkdownPreview";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0)
    return <p className="text-center text-gray-500">No notes yet 😅</p>;

  return (
    <div className="grid gap-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{note.title}</h2>
            <button
              onClick={() => onDelete(note._id)}
              className="text-red-500 hover:text-red-600 text-sm"
            >
              ✖ Delete
            </button>
          </div>
          <MarkdownPreview content={note.content} />
          <div className="flex flex-wrap gap-2 mt-2">
            {note.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 px-2 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
