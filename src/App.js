import "./styles.css";
import { useState } from "react";

export default function App() {
  var [emoji, setEmoji] = useState("");

  function inputEventHandler(e) {
    setEmoji(e.target.value);
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
      <h1>{emoji}</h1>
    </div>
  );
}
