import "./styles.css";
import { useState } from "react";

export default function App() {
  var [like, setLikeCounter] = useState(0);

  function likeEventHandler() {
    setLikeCounter(like + 1);
  }
  return (
    <div className="App">
      <button onClick={likeEventHandler}>Like</button>
      <h1>{like}</h1>
    </div>
  );
}
