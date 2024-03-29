import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Switch } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const Login = ({ ...props }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setUserType] = useState(false);
  const [error, setError] = useState(null);

  const normalSignin = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // Data validations
    if (!email) {
      const emailErr = "Email address is missing!";
      setError(emailErr);
      return false;
    }
    if (!password) {
      const passErr = "Password is missing!";
      setError(passErr);
      return false;
    }

    setError(null);

    const data = {
      email,
      password,
      type: isAdmin ? "admin" : "user",
    };

    axios
      .post("/api/v1/auth/login", data)
      .then((res) => {
        const { history } = props;
        if (res.data) {
          console.log(res.data);
          if (res.data.success) {
            const { user, token } = res.data;
            let user_id = null;
            let user_type = null;
            if (user) {
              setUser(user);
              if (isAdmin) {
                user_id = user.a_id;
                user_type = "admin";
              } else {
                user_id = user.u_id;
                user_type = "user";
              }
              console.log(`${user_id} ${user.name} ${user_type}`);
              localStorage.setItem("user_id", user_id);
              localStorage.setItem("user_type", user_type);
              localStorage.setItem("user_name", user.name);
              if (token) {
                localStorage.setItem("token", token);
              }
            }
            if (isAdmin) {
              history.push("/admin/dashboard");
            } else {
              history.push("/user/dashboard");
            }
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;
          setError(message);
          // console.log(message);
        }
      });

    // console.log(data);
  };

  useEffect(() => {
    console.log("user", user);
  });

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-3">
            <h4 className="heading-section">
              <Link to="/">
                <LeftOutlined /> AGROMATE - HOME
              </Link>
            </h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center bg-primary">
                <span className="fa fa-user-o"></span>
              </div>
              <h3 className="text-center mb-4 color-dark">Agromate Login</h3>
              <form className="login-form" onSubmit={(e) => normalSignin(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    autoComplete="username"
                    className="form-control rounded-left"
                    placeholder="Email address"
                    required=""
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    autoComplete="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  I'm an Admin User
                  <Switch
                    onChange={(type) => {
                      setUserType(type);
                    }}
                    style={{ float: "right" }}
                  />
                </div>
                <div className="error-msg">{error && error}</div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    LOGIN
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">
                      Remember Me
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="#">Forgot Password ?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Login);
