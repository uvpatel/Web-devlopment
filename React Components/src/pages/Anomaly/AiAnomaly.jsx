import React from "react";

const anomalies = [
  { id: "A001", type: "Unauthorized Access", severity: "Critical", status: "Active" },
  { id: "A002", type: "Unusual Login Time", severity: "Medium", status: "Resolved" },
  { id: "A003", type: "Data Breach Attempt", severity: "Critical", status: "Active" },
  { id: "A004", type: "Multiple Failed Logins", severity: "Low", status: "Resolved" },
];

const AIAnomaly = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">AI Anomaly Detection</h1>
        <p className="text-lg">
          Detect unusual activities and prevent security breaches using AI.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Total Alerts</h2>
          <p className="text-2xl font-bold">{anomalies.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Critical Alerts</h2>
          <p className="text-2xl font-bold text-red-600">
            {anomalies.filter((a) => a.severity === "Critical").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Resolved Alerts</h2>
          <p className="text-2xl font-bold text-green-600">
            {anomalies.filter((a) => a.status === "Resolved").length}
          </p>
        </div>
      </div>

      {/* Form Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Run Anomaly Check</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter User ID / Activity"
            className="p-2 border rounded"
          />
          <select className="p-2 border rounded">
            <option>Select Severity</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Critical</option>
          </select>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Run Detection
          </button>
        </form>
      </div>

      {/* Table of Anomalies */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Anomaly Logs</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Severity</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {anomalies.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="p-2 border">{a.id}</td>
                <td className="p-2 border">{a.type}</td>
                <td
                  className={`p-2 border font-semibold ${
                    a.severity === "Critical"
                      ? "text-red-600"
                      : a.severity === "Medium"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  }`}
                >
                  {a.severity}
                </td>
                <td
                  className={`p-2 border font-semibold ${
                    a.status === "Resolved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {a.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AIAnomaly;
