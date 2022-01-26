import "./styles.css";
import { useState } from "react";

export default function App() {
  function inputEventHandler(e) {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <h1>inside outttt</h1>
      <input
        onChange={(event) => inputEventHandler(event)}
        style={{
          fontSize: "1.5rem",
          padding: "0.5rem",
          cursor: "pointer",
          width: "80%"
        }}
      />
    </div>
  );
}
