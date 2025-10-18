import { useState } from "react";

const SearchBar = () => {
    const [query, setWuery] = useState("")
    return (
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..." 
        className="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

    )
}

export default SearchBar