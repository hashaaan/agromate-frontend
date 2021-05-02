import React, { useState, useEffect } from "react";
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
  const [isAuthAdmin, setAuthAdmin] = useState(false);
  const [isAuthUser, setAuthUser] = useState(false);

  const checkAuth = () => {
    const user_id = localStorage.getItem("user_id");
    const user_type = localStorage.getItem("user_type");
    console.log(user_id, user_type);
    if (user_id && user_type) {
      if (user_type === "admin") {
        setAuthAdmin(true);
      } else {
        setAuthUser(true);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          path="/admin/dashboard"
          render={(props) =>
            isAuthAdmin ? <Dashboard {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/admin/farmers"
          render={(props) =>
            isAuthAdmin ? <Farmers {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/admin/divisions"
          render={(props) =>
            isAuthAdmin ? <Divisions {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/admin/messages"
          render={(props) =>
            isAuthAdmin ? <Messages {...props} /> : <Redirect to="/" />
          }
        />
        <Route path="/about" component={About} />
        <Route path="/latest-news" component={LatestNews} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
