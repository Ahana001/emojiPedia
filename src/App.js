import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiWeKnow = {
    "🥺": "Pleading Face",
    "🥰": "Smiling Face with Hearts",
    "😊": "Smiling Face with Smiling Eyes",
    "😀": "Grinning Face",
    "😆": "Grinning Squinting Face",
    "😜": "Winking Face with Tongue",
    "🤗": " Smiling Face with Open Hands",
    "🤔": " Thinking Face",
    "🤫": "Shushing Face",
    "😯": "Hushed Face",
    "🤪": "Zany Face",
    "😅": "Grinning Face with Sweat"
  };
  var emojiArray = Object.keys(emojiWeKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    let emoji = e.target.value;
    emoji = emoji.trim(" "); //remove extra space added in emoji
    var currentMeaning = emojiWeKnow[emoji];
    if (currentMeaning === undefined) {
      currentMeaning = "we do not have thi in our database";
    }
    setmeaning(currentMeaning);
  }

  function emojoClickEventHandler(emoji) {
    setmeaning(emojiWeKnow[emoji]);
  }
  return (
    <div className="App">
      <h1 id="heading">inside outttt</h1>
      <input
        placeholder="put an emoji here to know the meaning of it"
        onChange={(event) => inputEventHandler(event)}
        style={{
          fontSize: "1.5rem",
          padding: "0.5rem",
          cursor: "pointer",
          width: "80%"
        }}
      />
      <p id="meaning">{meaning}</p>
      <div
        style={{
          maxWidth: "50%",
          margin: "auto"
        }}
      >
        {emojiArray.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojoClickEventHandler(item)}
              style={{
                marginLeft: "0.7rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
