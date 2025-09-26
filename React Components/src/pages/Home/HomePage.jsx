import React from "react";
import Footer from "../../components/Footer";

const stats = [
  { id: 1, title: "Active Tourists", value: 1250 },
  { id: 2, title: "Safety Alerts", value: 12 },
  { id: 3, title: "AI Anomalies", value: 3 },
  { id: 4, title: "IoT Devices", value: 58 },
];

const notifications = [
  { id: 1, text: "New safety alert in Sector 5", time: "10 mins ago" },
  { id: 2, text: "AI anomaly detected in Central Park", time: "30 mins ago" },
  { id: 3, text: "IoT device disconnected at Airport", time: "1 hour ago" },
];

const HomePage = () => {
  return (
    <>
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Welcome to Smart Tourist Safety</h1>
        <p className="text-lg">Monitor, Protect, and Enhance Tourist Experience</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-gray-500">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Map / Charts Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
        Map / Charts Placeholder
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
        <ul className="space-y-2">
          {notifications.map((note) => (
            <li
            key={note.id}
            className="p-3 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              <p>{note.text}</p>
              <p className="text-sm text-gray-500">{note.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default HomePage;
