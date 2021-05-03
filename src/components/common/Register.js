import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { LeftOutlined } from "@ant-design/icons";

const Register = ({ ...props }) => {
  //const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const authListener = () => {};

  const normalSignup = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const mobile = e.target[2].value;
    const password = e.target[3].value;
    // Data validations
    if (!name) {
      const nameErr = "Name is missing!";
      setError(nameErr);
      return false;
    }
    if (!email) {
      const emailErr = "Email address is missing!";
      setError(emailErr);
      return false;
    }
    if (!mobile) {
      const mobErr = "Mobile number is missing!";
      setError(mobErr);
      return false;
    }
    if (!password) {
      const passErr = "Password is missing!";
      setError(passErr);
      return false;
    }
    if (password.length < 6) {
      const passErr = "Password should be at least 6 characters!";
      setError(passErr);
      return false;
    }

    setError(null);

    const data = {
      name,
      email,
      password,
      mobile,
    };

    // console.log(data);

    axios
      .post("/api/v1/auth/register", data)
      .then((res) => {
        const { history } = props;
        if (res.data) {
          console.log(res.data);
          if (res.data.success) {
            history.push("/login");
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;
          setError(message);
          // console.log(err.response);
        }
      });
  };

  useEffect(() => {
    authListener();
    //console.log(user);
  });

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
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
              <h3 className="text-center mb-4 color-dark">Create an account</h3>
              <form
                action="#"
                className="login-form"
                onSubmit={(e) => normalSignup(e)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Your name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Email address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Mobile"
                    required=""
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="error-msg">{error && error}</div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Register);
