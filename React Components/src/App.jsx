// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

// function App() {
//   const [activeTab, setActiveTab] = useState("digital-id");
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//       />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         <Navbar onOpen={() => setIsOpen(true)} />
//         <div className="p-6 flex-1 bg-gray-100">
//           <h2 className="text-gray-700 text-lg mb-4">Active Tab: {activeTab}</h2>
//           <p>
//             This is the main content area. Click the menu button to toggle the sidebar.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import HomePage from "./components/Home/HomePage";

// function App() {
//   const [activeTab, setActiveTab] = useState("home");
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <Router>
//       <div className="flex h-screen">
//         <Sidebar
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           isOpen={isOpen}
//           onClose={() => setIsOpen(false)}
//         />

//         <div className="flex-1 flex flex-col">
//           <Navbar onOpen={() => setIsOpen(true)} />

//           <div className="flex-1 overflow-auto bg-gray-100">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/digital-id" element={<div className="p-6">Digital ID Content</div>} />
//               <Route path="/mobile-app" element={<div className="p-6">Mobile App Content</div>} />
//               <Route path="/ai-anomaly" element={<div className="p-6">AI Anomaly Content</div>} />
//               <Route path="/dashboard" element={<div className="p-6">Tourism Dashboard Content</div>} />
//               <Route path="/iot" element={<div className="p-6">IoT Integration Content</div>} />
//               <Route path="/multilingual" element={<div className="p-6">Multilingual Support Content</div>} />
//               <Route path="/privacy" element={<div className="p-6">Privacy & Security Content</div>} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import DigitalID from "./pages/DigitalID/DigitalID";
import AiAnomaly from "./pages/Anomaly/AiAnomaly";
import Dashboard from "./pages/Dashboard/Dashboard";

import SplitText from "./components/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(true);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <>
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar onOpen={() => setIsOpen(true)} />

          <div className="flex-1 overflow-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/digital-id" element={<DigitalID />} />
              <Route path="/ai-anomaly" element={<AiAnomaly />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>



<SplitText
  text="Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
  
    </>
  );
}

export default App;
