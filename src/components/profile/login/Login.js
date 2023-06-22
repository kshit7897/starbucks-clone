import React, { useState } from "react";

import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //--------input text handler

  const handleInputEmailOrNumber = (e) => {
    console.log("Email or number-->", e.target.value);
    setEmailOrPhone(e.target.value);
  };
  const handleInputPassword = (e) => {
    console.log("Password-->", e.target.value);
    setPassword(e.target.value);
  };

  // --------Login handler

  //   const handleLogin = () => {
  //     if(emailOrPhone === "example@gmail.com")
  //   }

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
              <form>
                <div className="user-name-div">
                  <label id="username">USERNAME</label>
                  <input
                    className="input-field"
                    type="text"
                    value={emailOrPhone}
                    onChange={handleInputEmailOrNumber}
                    placeholder="Enter Email ID or Mobile Number"
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
                  />
                </div>
                <div className="account-container">
                  <span className="dont-have-account">
                    Dont't have an account?
                    <NavLink to={"/SignUp"}>
                      <a id="sign-up-link" href="">
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
                    <a id="get-help-link" href="">
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
