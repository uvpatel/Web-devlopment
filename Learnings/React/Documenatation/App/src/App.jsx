// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/docs" element={<PageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
