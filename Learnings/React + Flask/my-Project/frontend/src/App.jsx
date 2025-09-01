// src/App.js
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const sendData = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Jarvis" }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={sendData}>Send Data to Flask</button>
    </div>
  );
}

export default App;
