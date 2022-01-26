import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiWeKnow = {
    "🥺": "Pleading Face",
    "🥰": "Smiling Face with Hearts",
    "☺️": "Smiling Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😀": "Grinning Face",
    "😆": "Grinning Squinting Face",
    "😜": "Winking Face with Tongue"
  };
  var emojiArray = Object.keys(emojiWeKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    var currentMeaning = emojiWeKnow[e.target.value];
    if (currentMeaning === undefined) {
      currentMeaning = "we do not have thi in our database";
    }
    setmeaning(currentMeaning);
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
      <p>{meaning}</p>
      {emojiArray.map((item) => {
        return (
          <span style={{ marginLeft: "0.7rem", fontSize: "2rem" }}>{item}</span>
        );
      })}
    </div>
  );
}
