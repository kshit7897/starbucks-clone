import React from "react";

import "./learnmore.css";  

const LearnMore = () => {
  return (
    <section className="main-learn">
      <div className="container-learn">
        <h2>Learn more about the world of coffee!</h2>
        <p>Discover More</p>
      </div>

      <div className="banner-bottom">
        <div className="img-banner-container">
          <div className="coffee-culter-div">
            <p className="coffee-culter-text">Coffee Culture</p>
          </div>
          <div className="banner-footer-container">
          <div className="container-info">
            <h1 className="banner-title">The Art And Science OF Sampling Coffee</h1>
            <p className="banner-para">
              Explore the world of coffee sampling at StarBucks and uncover the
              are and science behind creating the perfact cup
            </p>
          </div>
        </div>
        </div>
    
      </div>
    </section>
  );
};

export default LearnMore;
