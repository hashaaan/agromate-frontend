import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Firebase } from "../../lib/firebase";

function Register() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const normalSignup = (e) => {
    e.preventDefault();
    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const mobile = e.target[3].value;
    const password = e.target[4].value;
    // Validations
    if (!firstname) {
      console.error("First name is missing!");
      return false;
    }
    if (!lastname) {
      console.error("Last name is missing!");
      return false;
    }
    if (!email) {
      console.error("Email address is missing!");
      return false;
    }
    if (!mobile) {
      console.error("Monile number is missing!");
      return false;
    }
    if (!password) {
      console.error("Password is missing!");
      return false;
    }
    if (password.length < 6) {
      console.error("Password should be at least 6 characters!");
      return false;
    }
    console.log(e.target[0].value);

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user", user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    authListener();
    console.log(user);
  });

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">
              <Link to="/">AGROMATE - SRI LANKA</Link>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <h3 className="text-center mb-4">Create an account</h3>
              <form
                action="#"
                className="login-form"
                onSubmit={(e) => normalSignup(e)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control rounded-left"
                    placeholder="First name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Last name"
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
}

export default Register;
