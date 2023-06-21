import React from "react";

import { AiOutlineSetting } from "react-icons/ai";
import { BiUserVoice, BiChevronRight } from "react-icons/bi";

import Footer from "../Footer";

import "./profile.css";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="setting-div">
          <span id="setting">
            <AiOutlineSetting />
          </span>
        </div>
        <div className="contain-profile">
          <img
            id="image-leaf"
            src="https://www.starbucks.in/assets/images/leaf_gold.svg"
            alt="kshit"
          />
        </div>
        <div className="login-container">
          <div className="contain-login">
            <img
              className="login-image"
              src="https://b.zmtcdn.com/data/pictures/chains/9/6503729/9b60e87fc9c1d60fbb4c2205ccdbd5ef.jpg"
              alt="kshit"
            />
          </div>
          <div className="welcome">
            <h1>Welcome to Starbucks</h1>
            <NavLink to={"/Login"}>
              {" "}
              <button className="login-or-signup-btn">Login or Sign Up</button>
            </NavLink>
          </div>
          <div id="right-cornar-image-div">
            <img
              className="right-image"
              src="https://www.starbucks.in/assets/images/dots_gold.svg"
              alt="kshit"
            />
          </div>
        </div>
      </div>

      <div className="help-container">
        <span className="help-icon">
          <BiUserVoice />
          <p className="help-text">HELP CENTER</p>
        </span>
        <div>
          <p className="help-svg">
            <BiChevronRight />
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
