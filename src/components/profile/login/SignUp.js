import React from "react";

import "./signup.css";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="top-container">
          <div className="right-image-signup">
            <img
              src="https://www.starbucks.in/assets/icon/green_rleaf.svg"
              alt="kshit"
            />
          </div>

          <div className="left-image-signup">
            <img
              src="https://www.starbucks.in/assets/icon/green_ldots.svg"
              alt="kshit"
            />
          </div>
        </div>

        <section className="signup-second-section">
          <div className="bottom-container">
            <div className="signup-contain">
              <div className="processing-bar">
                <p>progress</p>
              </div>
              <div className="signup-title">
                <h1>Login to Starbucks</h1>
              </div>
            </div>
          </div>

          <div className="form-container-main">
            <form className="form-container">
              <div className="form-row">
                <div className="form-field">
                  <label className="lables-form">Email:</label>
                  <input type="email" placeholder="Enter Email ID" required />
                </div>
                <div className="form-field">
                  <label className="lables-form">Phone Number:</label>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="lables-form">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter Password! *"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="lables-form">Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="Re-enter Password *"
                    required
                  />
                </div>
              </div>
              <button id="signup-btn" type="submit">
                Continue
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
