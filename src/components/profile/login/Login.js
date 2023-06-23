import React, { useState } from "react";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLogeedIn, setIsLoggedIn] = useState(false);

  //--------input text handler

  const handleInputEmailOrNumber = (e) => {
    setEmailOrPhone(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  //---------login handler

  const handleLogIN = async (e) => {
    e.preventDefault();
    try {
      let usersCredential;
      if (emailOrPhone.includes("@")) {
        usersCredential = await signInWithEmailAndPassword(
          auth,
          emailOrPhone,
          password
        );
      } else if (emailOrPhone === Number) {
        usersCredential = await signInWithPhoneNumber(
          auth,
          emailOrPhone,
          password
        );
      }
      alert("login succesful");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-out-container">
        <div className="inner-login-out-container">
          <div className="contain">
            <div className="info-container-login">
              <div className="skip-div">
                <NavLink to={"/"}>
                  <p className="skip-text">SKIP</p>{" "}
                </NavLink>
              </div>
              <div className="login-title">
                <h3 className="login-title-text"> LOGIN</h3>
              </div>
              <form onSubmit={handleLogIN} className="login-form-container">
                <div className="user-name-div">
                  <label id="username">USERNAME</label>
                  <input
                    className="input-field"
                    type="text"
                    value={emailOrPhone}
                    onChange={handleInputEmailOrNumber}
                    placeholder="Enter Email ID or Mobile Number"
                    required
                  />
                </div>
                <div className="password-div">
                  <label>PASSWORD</label> <br />
                  <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={handleInputPassword}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="account-container">
                  <span className="dont-have-account">
                    Dont't have an account?
                    <NavLink to={"/SignUp"}>
                      <a id="sign-up-link" href="/">
                        Sign Up
                      </a>
                    </NavLink>
                  </span>
                </div>
                <div className="log-btn-div">
                  <button className="log-btn">Login</button>
                </div>
                <div className="get-help-div">
                  <span className="get-help-text">
                    Facing trouble logging in?
                    <a id="get-help-link" href="/">
                      Get Help
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
