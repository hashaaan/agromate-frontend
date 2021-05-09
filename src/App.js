import React from "react";
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
import Register from "./components/common/Register";
import Login from "./components/common/Login";
import LatestNews from "./components/common/LatestNews";
// Admin authenticated components
import Dashboard from "./components/admin/Dashboard";
import Farmers from "./components/admin/Farmers";
import Divisions from "./components/admin/Divisons";
import Messages from "./components/admin/Messages";
// User authenticated components
import UDashboard from "./components/user/UDashboard";
import UMessages from "./components/user/UMessages";
import UProfile from "./components/user/UProfile";
import USurvey from "./components/user/USurvey";
import URequests from "./components/user/URequests";

function App() {
  const checkAuth = (component, type) => {
    const user_id = localStorage.getItem("user_id");
    const user_type = localStorage.getItem("user_type");
    console.log(user_id, user_type);
    if (user_id && user_type) {
      if (user_type === type) {
        return component;
      }
    }
    return <Redirect to="/" />;
  };

  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          path="/admin/dashboard"
          render={(props) => checkAuth(<Dashboard {...props} />, "admin")}
        />
        <Route
          path="/admin/farmers"
          render={(props) => checkAuth(<Farmers {...props} />, "admin")}
        />
        <Route
          path="/admin/divisions"
          render={(props) => checkAuth(<Divisions {...props} />, "admin")}
        />
        <Route
          path="/admin/messages"
          render={(props) => checkAuth(<Messages {...props} />, "admin")}
        />
        <Route
          path="/user/dashboard"
          render={(props) => checkAuth(<UDashboard {...props} />, "user")}
        />
        <Route
          path="/user/profile"
          render={(props) => checkAuth(<UProfile {...props} />, "user")}
        />
        <Route
          path="/user/messages"
          render={(props) => checkAuth(<UMessages {...props} />, "user")}
        />
        <Route
          path="/user/survey"
          render={(props) => checkAuth(<USurvey {...props} />, "user")}
        />
        <Route
          path="/user/requests"
          render={(props) => checkAuth(<URequests {...props} />, "user")}
        />
        <Route path="/about" component={About} />
        <Route path="/latest-news" component={LatestNews} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
