import React from "react";

import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login-out-container">
        <div className="inner-login-out-container">
          <div className="contain">
            <div className="info-container-login">
              <div className="skip-div">
                <p className="skip-text">SKIP</p>
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
                    placeholder="Enter Email ID or Mobile Number"
                  />
                </div>
                <div className="password-div">
                  <label>PASSWORD</label> <br />
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="account-container">
                  <span className="dont-have-account">
                    Dont't have an account?
                    <a id="sign-up-link" href="">Sign Up</a>
                  </span>
                </div>
                <div className="log-btn-div">
                  <button className="log-btn">Login</button>
                </div>
                <div className="get-help-div">
                       <span className="get-help-text">Facing trouble logging in?<a href="">Get Help</a></span>
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
