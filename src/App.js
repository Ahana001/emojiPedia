import "./styles.css";

export default function App() {
  var UserName = "Ankita";
  var backgroundColor = "green";

  return (
    <div className="App">
      <h2 style={{ backgroundColor }}>Welcome</h2>
      <h1 style={{ color: "blue" }}>{UserName}</h1>
    </div>
  );
}
