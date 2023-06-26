import React, { useContext } from "react";

import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./signup.css";
import { MainContext } from "../../context/MainContext";

const SignUp = () => {
  const {
    email,
    setEmail,
    signpassword,
    setSignPassword,
    confirmPassword,
    setConfirmPassword,
    phone,
    setPhone,
  } = useContext(MainContext);
  const navigate = useNavigate();

  //---------signUp input text handler

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handlePassword = (e) => {
    setSignPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //---------- sign-up form handler

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signpassword !== confirmPassword) {
      // setConfirmPassword("Password Do Not Match");
      alert("Password Do Not Match");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, signpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/Login");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

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
            <form onSubmit={handleSignUp} className="form-container">
              <div className="form-row">
                <div className="form-field">
                  <label className="lables-form">Email:</label>
                  <input
                    value={email}
                    type="email"
                    placeholder="Enter Email ID"
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="lables-form">Phone Number:</label>
                  <input
                    value={phone}
                    type="tel"
                    placeholder="Enter Mobile Number"
                    onChange={handlePhone}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="lables-form">Password:</label>
                  <input
                    value={signpassword}
                    type="password"
                    placeholder="Enter Password! *"
                    onChange={handlePassword}
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="lables-form">Confirm Password:</label>
                  <input
                    value={confirmPassword}
                    type="password"
                    placeholder="Re-enter Password *"
                    onChange={handleConfirmPassword}
                    autoComplete="on"
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
