// src/components/DataTable.jsx
import { useState } from "react";

const DataTable = ({ data }) => {
  const [search, setSearch] = useState("");

  const filtered = data.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Users</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i} className="border-b dark:border-gray-600">
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
