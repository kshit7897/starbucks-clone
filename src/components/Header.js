import React from "react";

import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

import "./header.css";

const Header = () => {
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

          <span className="user-icon">
            <NavLink to={"/Profile"}>
              {" "}
              <BiUserCircle />{" "}
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
