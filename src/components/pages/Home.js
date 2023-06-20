import React, { useState } from "react";

import Footer from "../Footer";
import LearnMore from "../learnmore/LearnMore";
import SingleSlider from "../sliders/SingleSlider";
import MultiSlider from "../sliders/MultiSlider";
import { NavLink } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <>
      <section className="main-container-guest">
        <div className="inner-guest">
          <div className="guest-panel">
            <p id="reward-para">Reward are pouring! Sign up now.</p>
            <a id="know-more" target="_blank" href="https://www.w3schools.com">
              Know More
            </a>
          </div>
        </div>
      </section>
      <section className="handcraft-section">
        <div className="handicraft-top">
          <h2 id="heading-handcraft">handcraft Curations</h2>
          <div className="handcraft-image">
            <div className="image-name">
              <NavLink to={"/BestSeller"}>
                {" "}
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Bestseller</p>
            </div>
            <div className="image-name">
              <NavLink to={"/Drinks"}>
                {" "}
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Drinks</p>
            </div>
            <div className="image-name">
              <NavLink to={"/Food"}>
                {" "}
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Food</p>
            </div>
            <div className="image-name">
              <NavLink to={"/Merchandise"}>
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Merchandise</p>
            </div>
            <div className="image-name">
              <NavLink to={"/CoffeeAtHome"}>
                {" "}
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Coffee At Home</p>
            </div>
            <div className="image-name">
              <NavLink to={"/ReadytoEat"}>
                <img
                  className="image-url"
                  src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg"
                  alt="kshit"
                />
              </NavLink>
              <p className="slider-inner-text">Ready to Eat</p>
            </div>
          </div>
        </div>
      </section>

      {/* ////////// sliders-start-from-below ////////////////*/}

      <SingleSlider />
      <MultiSlider />

      {/* ////////// Lear-more-section ////////////////*/}

      <LearnMore />

      {/* /////////// footer-star-from-below ////////////////*/}

      <Footer />
    </>
  );
};

export default Home;
