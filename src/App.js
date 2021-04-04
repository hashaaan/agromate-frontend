import React from "react";
import "./App.css";
import "./custom.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
