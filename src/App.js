import logo from "./logo.svg";
import "./App.css";
import "./custom.scss";
import CustomNavbar from "./components/layout/CustomNavbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Agriculture Field Support and Guidance System</p>
        <div className="App-link">Agromate - Sri Lanka</div>
      </header>
    </div>
  );
}

export default App;
