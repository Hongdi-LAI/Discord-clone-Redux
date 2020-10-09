import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar.js";

function App() {
  useEffect(() => {
    document.title = "Discord - Clone";
  }, []);
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
