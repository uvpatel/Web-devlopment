import React from "react";

const locations = [
  { id: 1, name: "Statue of Unity", visitors: 12000, revenue: "$45,000" },
  { id: 2, name: "Goa Beaches", visitors: 8500, revenue: "$32,000" },
  { id: 3, name: "Jaipur Forts", visitors: 6400, revenue: "$28,500" },
  { id: 4, name: "Kerala Backwaters", visitors: 7200, revenue: "$31,200" },
];

const TourismDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Tourism Dashboard</h1>
        <p className="text-lg">
          Monitor visitor statistics, revenue, and location performance.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Total Visitors</h2>
          <p className="text-2xl font-bold text-blue-600">34,100</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Active Locations</h2>
          <p className="text-2xl font-bold text-green-600">{locations.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold text-purple-600">$136,700</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center">
        <p className="text-gray-500">[Chart Placeholder - Visitor Trends]</p>
      </div>

      {/* Locations Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Top Locations</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Visitors</th>
              <th className="p-2 border">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc.id} className="hover:bg-gray-50">
                <td className="p-2 border">{loc.id}</td>
                <td className="p-2 border">{loc.name}</td>
                <td className="p-2 border">{loc.visitors}</td>
                <td className="p-2 border font-semibold text-green-600">{loc.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourismDashboard;
