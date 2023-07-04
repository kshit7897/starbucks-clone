import React from "react";

import "./gift.css";
import { NavLink } from "react-router-dom";
import Feature from "./Feature";
const Gift = () => {
  return (
    <>
      <div className="container-gift">
        <div className="gift-contain">
          <section className="gift-page slider-inner-container gift-page-banner ">
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Shining_Pastel_Bannr_Icon_3_21af9aed58.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text">
              <p className="slider-text-inner">Sparkle Up Your Day</p>
              <h2>Shining Pastel Collection</h2>
              <p className="slider-text-inner">
                Prepare to dazzle and make everyday extra-ordinary with our
                latest Merchandise.
              </p>
              <p>
                <span className="slider-text-inner">for</span> <br /> 2300.oo$
              </p>
            </div>
          </section>
        </div>

        <div className="category-wise">
          <div className="category-info">
            <ul className="category-ul">
              <NavLink exact to={"/Feature"}>
                <li className="category-li">FEATURE</li>
              </NavLink>
              <NavLink exact to={"/Anytime"}>
                <li className="category-li">ANYTIME</li>
              </NavLink>
              <NavLink exact to={"/Congratulation"}>
                <li className="category-li">CONGRATULATIONS</li>
              </NavLink>
              <NavLink exact to={"/thankyou"}>
                <li className="category-li">THANK YOU</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <Feature />
      </div>
    </>
  );
};

export default Gift;
