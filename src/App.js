import logo from "./logo.svg";
import "./App.css";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Agriculture Field Support and Guidance System</p>
        <div className="App-link">Agromate - Sri Lanka</div>
      </header>
    </div>
  );
}

export default App;
