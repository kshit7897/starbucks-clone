//in this code my setloggedin value in colsole shows undeined why and how to fix
import React, { useContext } from "react";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MainContext } from "../../context/MainContext";
import { NavLink, useNavigate } from "react-router-dom";

import "./login.css";
import { isSignIn } from "../../../common";

const Login = () => {
  const navigate = useNavigate();

  const {
    setIsLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(MainContext);
 
  React.useEffect(() => {
    if (isSignIn) {  
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      let usersCredential;
      if (email.includes("@")) {
        usersCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setIsLoggedIn(true);
        localStorage.setItem("isSignIn", JSON.stringify(true)); // Persist isLoggedIn state in local storage
        navigate("/");
      } else {
        setIsLoggedIn(false);
        localStorage.setItem("isSignIn", JSON.stringify(false)); // Persist isLoggedIn state in local storage
        navigate("/login");
      }
    } catch (error) {
      setIsLoggedIn(false);
      localStorage.setItem("isSignIn", JSON.stringify(false)); // Persist isLoggedIn state in local storage
    }
  }

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
                <h3 className="login-title-text">LOGIN</h3>
              </div>
              <form className="login-form-container">
                <div className="user-name-div">
                  <label id="username">USERNAME</label>
                  <input
                    className="input-field"
                    type="text"
                    value={email}
                    onChange={handleEmail}
                    placeholder="Enter Email ID"
                    required
                  />
                </div>
                <div className="password-div">
                  <label>PASSWORD</label> <br />
                  <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="account-container">
                  <span className="dont-have-account">
                    Dont't have an account?
                    <NavLink id="sign-up-link" to={"/SignUp"}>
                      Sign Up
                    </NavLink>
                  </span>
                </div>
                <div className="log-btn-div">
                  <button className="log-btn" onClick={(e) => handleClick(e)}>Login</button>
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
