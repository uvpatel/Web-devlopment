import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';  

// Pages
import Index from './Pages/Index/Index';
import Advisor from './Pages/Advisor/Advisor';
import Analyser from './Pages/Analyser/Analyser';
import Assesment from './Pages/Assesment/Assesment';
import Auth from './Pages/Auth/Auth';



function App() {
  return (
    <Router>
      <Navbar/>{
        <div style={{padding: "20px" }}>
          <Routes>
              {/* <Route path="/" element={</>} /> */}
              <Route path="/Advisor" element={<Advisor/>} />
              <Route path="/Analyser" element={<Analyser/>} />
              <Route path="/Assesment" element={<Assesment/>} />
              <Route path="/Auth" element={<Auth/>} />
            
          </Routes>

        </div>

      }
      <Footer/>
    </Router>
  )
}

export default App
