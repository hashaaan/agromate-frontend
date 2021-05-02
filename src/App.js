import React, { useState } from "react";
import "./App.css";
import "./custom.scss";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/common/Home";
import About from "./components/common/About";
import Dashboard from "./components/admin/Dashboard";
import Register from "./components/common/Register";
import Login from "./components/common/Login";
import LatestNews from "./components/common/LatestNews";
import Farmers from "./components/admin/Farmers";
import Divisions from "./components/admin/Divisons";
import Messages from "./components/admin/Messages";

function App() {
  const [isAuth, setAuth] = useState(true);
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/farmers" component={Farmers} />
        <Route path="/admin/divisions" component={Divisions} />
        <Route path="/admin/messages" component={Messages} />
        <Route path="/about" component={About} />
        <Route path="/latest-news" component={LatestNews} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
