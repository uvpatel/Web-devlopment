import React from "react";
import SignatureLoader from "./components/SignatureLoader";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <SignatureLoader />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
