function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="🔎 Search notes or tags..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 border rounded-md dark:bg-gray-700"
      />
    </div>
  );
}

export default SearchBar;
