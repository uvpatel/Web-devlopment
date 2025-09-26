import React from "react";

const users = [
  { id: "U001", name: "John Doe", nationality: "USA", status: "Active" },
  { id: "U002", name: "Aarav Mehta", nationality: "India", status: "Active" },
  { id: "U003", name: "Maria Gonzalez", nationality: "Spain", status: "Inactive" },
];

const DigitalID = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Digital ID Management</h1>
        <p className="text-lg">
          Manage tourist identities securely with digital ID cards.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Total IDs</h2>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Active IDs</h2>
          <p className="text-2xl font-bold">
            {users.filter((u) => u.status === "Active").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Inactive IDs</h2>
          <p className="text-2xl font-bold">
            {users.filter((u) => u.status === "Inactive").length}
          </p>
        </div>
      </div>

      {/* Form Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Create / Update Digital ID</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Nationality"
            className="p-2 border rounded"
          />
          <select className="p-2 border rounded">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Digital ID
          </button>
        </form>
      </div>

      {/* List of IDs */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Existing Digital IDs</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Nationality</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="p-2 border">{u.id}</td>
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.nationality}</td>
                <td
                  className={`p-2 border font-semibold ${
                    u.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {u.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DigitalID;
