import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const isSignIn = JSON.parse(localStorage.getItem("isSignIn"));

  const handleLogOutClick = (e) => {
    navigate("/profile");
    localStorage.setItem("isSignIn", Boolean(false));
    localStorage.removeItem("isSignIn");
    localStorage.removeItem("setEmail")
  };
  return (
    <>
      <div className="head-container">
        <div className="container-left">
          <ul className="nav-link">
            <span className="main-logo">
              <NavLink to={"/"}>
                <img
                  className="logo-header"
                  src="https://www.starbucks.in/assets/icon/logo.png"
                  alt="kshit reload"
                />
              </NavLink>
            </span>

            <li className="link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="link">
              <NavLink to="Gift">Gift</NavLink>
            </li>
            <li className="link">
              <NavLink to="Order">Order</NavLink>
            </li>
            <li className="link">
              <NavLink to="Pay">Pay</NavLink>
            </li>
            <li className="link">
              <NavLink to="Store">Store</NavLink>
            </li>
          </ul>
        </div>
        <div className="container-right">
          <input
            className="input-search"
            type="text"
            placeholder="Looking for something specific?"
          />

          {isSignIn ? (
            <NavLink to={"/Profile"}>
              <button className="logOut-btn" onClick={(e) => handleLogOutClick(e)}>
                <span>Log Out</span>
              </button>
            </NavLink>
          ) : (
            <>
              <div id="user-icon">
                <NavLink to={"/Profile"}>
                  <a>
                    <LiaUserCircleSolid />
                  </a>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
