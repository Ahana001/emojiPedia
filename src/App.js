import "./styles.css";

export default function App() {
  var likeCounter = 0;
  function likeEventHandler() {
    likeCounter = likeCounter + 1;
    console.log("liked", likeCounter);
  }
  return (
    <div className="App">
      <button onClick={likeEventHandler}>Like</button>
    </div>
  );
}
