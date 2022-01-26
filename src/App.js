import "./styles.css";

export default function App() {
  function likeEventHandler() {
    console.log("liked");
  }
  return (
    <div className="App">
      <button onClick={likeEventHandler}>Like</button>
    </div>
  );
}
