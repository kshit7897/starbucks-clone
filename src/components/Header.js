import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const isSignIn = JSON.parse(localStorage.getItem("isSignIn"));

  const handleClick = (e) => {
    navigate("/profile");
    localStorage.setItem("isSignIn", Boolean(false));
    localStorage.removeItem("isSignIn")
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
              <button onClick={(e) => handleClick(e)}>Log Out</button>
            </NavLink>
          ) : (
            <>
              <NavLink to={"/Profile"}>
                <button onClick={(e) => handleClick(e)}>Log In</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
