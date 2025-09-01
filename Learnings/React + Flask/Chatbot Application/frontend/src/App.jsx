import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    // Add user message to chat
    setChat([...chat, { sender: "user", text: message }]);

    // Send message to Flask backend
    const res = await fetch("http://127.0.0.1:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    // Add bot reply to chat
    setChat((prevChat) => [...prevChat, { sender: "bot", text: data.reply }]);
    setMessage(""); // clear input
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h1>Chatbot</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {chat.map((c, index) => (
          <div key={index} style={{ textAlign: c.sender === "user" ? "right" : "left" }}>
            <b>{c.sender === "user" ? "You" : "Bot"}:</b> {c.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "70%", padding: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  );
}

export default App;
