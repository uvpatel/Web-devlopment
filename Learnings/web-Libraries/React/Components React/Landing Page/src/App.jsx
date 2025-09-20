// // // import Hero from "./components/Hero";

// // // function App() {
// // //   return (
// // //     <>
// // //       <Hero
// // //         title="Level Up Your React Skills 🚀"
// // //         subtitle="Build fast, modern, and responsive websites with reusable components."
// // //         buttonText="Start Learning"
// // //         image="https://source.unsplash.com/600x400/?technology,code"
// // //       />
// // //     </>
// // //   );
// // // }

// // // export default App;

// // // 

// // /*
// // // Cards
// // import Card from "./components/Card";
// // function App() {
// //   const cards = [
// //     {
// //       image: "https://source.unsplash.com/600x400/?technology",
// //       title: "Tech Innovations",
// //       description: "Explore the latest trends in technology shaping the future.",
// //       buttonText: "Explore",
// //       buttonLink: "#tech",
// //     },
// //     {
// //       image: "https://source.unsplash.com/600x400/?coding",
// //       title: "Learn to Code",
// //       description: "Master React, Tailwind, and modern web development skills.",
// //       buttonText: "Start Learning",
// //       buttonLink: "#code",
// //     },
// //     {
// //       image: "https://source.unsplash.com/600x400/?business",
// //       title: "Business Growth",
// //       description: "Discover strategies to grow and scale your business.",
// //       buttonText: "Read More",
// //       buttonLink: "#business",
// //     },
// //   ];



// //   return (
// //     <>
// //       <Navbar />
// //       <div className="pt-20">
// //         <section id="home" className="h-screen flex items-center justify-center bg-gray-100">Home</section>
// //         <section id="about" className="h-screen flex items-center justify-center bg-gray-200">About</section>
// //         <section id="services" className="h-screen flex items-center justify-center bg-gray-300">Services</section>
// //         <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">Contact</section>
// //       </div>
// //        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-6 py-12">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
// //         {cards.map((card, index) => (
// //           <Card key={index} {...card} />
// //         ))}
// //       </div>
// //     </div>
// //     </>
// //   );
// // }

// // export default App;

// // */

// // // src/App.jsx
// // import Sidebar from "./components/Sidebar";

// // function App() {
// //   return (
// //     <div className="flex bg-gray-100 dark:bg-gray-800 min-h-screen">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <main className="flex-1 p-16 ml-0 md:ml-64 ">
// //         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
// //           Dashboard
// //         </h1>
// //         <p className="mt-4 text-gray-600 dark:text-gray-300">
// //           Welcome to your responsive dashboard with a collapsible sidebar 🚀
// //         </p>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.jsx
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Card from "./components/Card";

// function App() {
//   const cards = [
//     {
//       image: "https://source.unsplash.com/600x400/?analytics",
//       title: "Analytics",
//       description: "Track key metrics and performance in real time.",
//       buttonText: "View Reports",
//       buttonLink: "#analytics",
//     },
//     {
//       image: "https://source.unsplash.com/600x400/?team",
//       title: "Team Management",
//       description: "Manage team members, roles, and permissions.",
//       buttonText: "Manage Team",
//       buttonLink: "#team",
//     },
//     {
//       image: "https://source.unsplash.com/600x400/?security",
//       title: "Security",
//       description: "Protect your application with top security features.",
//       buttonText: "Check Security",
//       buttonLink: "#security",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Top Navbar */}
//       <Navbar />

//       <div className="flex flex-1 pt-16">
//         {/* Sidebar (left) */}
//         <Sidebar />

//         {/* Main content */}
//         <main className="flex-1 p-8 ml-0 md:ml-64 transition-all">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//             Dashboard
//           </h1>

//           {/* Card Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {cards.map((card, index) => (
//               <Card key={index} {...card} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatWidget from "./components/StatWidget";
import SalesChart from "./components/SalesChart";
import DataTable from "./components/DataTable";
import ProfileCard from "./components/ProfileCard";
import Toast from "./components/Toast";
import SettingsControls from "./components/SettingsControls";
import ActivityTimeline from "./components/ActivityTimeline";
import Modal from "./components/Modal";

import { Users, DollarSign, ShoppingCart } from "lucide-react";

function App() {
  const [toast, setToast] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Alice Brown", email: "alice@example.com" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-64 space-y-8">
          {/* Dashboard Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>

          {/* Stat Widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatWidget
              title="Users"
              value="12,345"
              icon={Users}
              color="bg-blue-500"
            />
            <StatWidget
              title="Revenue"
              value="$54,321"
              icon={DollarSign}
              color="bg-green-500"
            />
            <StatWidget
              title="Orders"
              value="1,234"
              icon={ShoppingCart}
              color="bg-yellow-500"
            />
          </div>

          {/* Charts + Profile Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>
            <ProfileCard
              name="JARVIS Patel"
              role="Admin"
              avatar="https://source.unsplash.com/100x100/?portrait"
            />
          </div>

          {/* Table + Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataTable data={users} />
            <ActivityTimeline
              activities={[
                { text: "User John logged in", time: "2 min ago" },
                { text: "Payment processed", time: "1 hr ago" },
                { text: "New user registered", time: "Yesterday" },
              ]}
            />
          </div>

          {/* Settings + Modal Example */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SettingsControls />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <button
                onClick={() =>
                  setToast({ message: "Settings saved!", type: "success" })
                }
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-3"
              >
                Show Toast
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Open Modal
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add User"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
