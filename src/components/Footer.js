// in this code how can i add one button to footer and on click that button page should scrool to top smothly
import React, { useEffect, useState } from "react";

import { GrInstagram, GrFacebookOption, GrTwitter } from "react-icons/gr";

import "./footer.css";

const Footer = () => {
  const [showTopScroll, setShowTopScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = Window.pageYOffset || document.documentElement.scrollTop;
    setShowTopScroll(scrollTop > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <div className="top-btn">
      {showTopScroll && (
        <img
          className="Scroll-to-top-image"
          onClick={scrollToTop}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Eo_circle_green_arrow-up.svg/2048px-Eo_circle_green_arrow-up.svg.png"
          alt="kshit"
        />
      )}
      </div>
      <footer id="footer-body">
        <div className="footer-section-container">
          <div className="footer-top">
            <div className="image-slider-inner">
              <img
                id="footer-image"
                src="https://www.starbucks.in/assets/icon/logo.png"
                alt="kshit"
              />
            </div>

            <div className="about-links">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="https://www.google.com/">
                    Our Heritage
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Our Company
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Coffeehouse
                  </a>
                </li>
              </ul>
            </div>

            <div className="responsibility-links">
              <h3>Responsibility</h3>
              <ul>
                <li>
                  <a href="https://www.google.com/">
                    Community
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Ethical Sourcing
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Environment
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Diversity
                  </a>
                </li>
              </ul>
            </div>

            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="https://www.google.com/">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Season's Gifting
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <h3>SOCIAL MEDIA</h3>
              <div className="social-icon">
                <a
                  className="social-icon-insta"
                 
                  href="https://www.instagram.com/"
                >
                  <GrInstagram />
                </a>

                <a
                  className="social-icon-facebook"
                 
                  href="https://www.facebook.com/"
                >
                  <GrFacebookOption />
                </a>

                <a
                  className="social-icon-twitter"
                 
                  href="https://twitter.com/"
                >
                  <GrTwitter />
                </a>
              </div>
            </div>

            <div className="app-download-link">
              <a href="https://www.apple.com/in/app-store/">
                <img
                  src="https://www.starbucks.in/assets/images/appstoreiOS.png"
                  alt="kshit"
                />
              </a>{" "}
              <br />
              <a href="https://play.google.com/store/games">
                {" "}
                <img
                  src="https://www.starbucks.in/assets/images/appstoreAndroid.png"
                  alt="kshit"
                />
              </a>
            </div>
          </div>

          <div className="privacy-container">
            <div className="privacy-info">
              <ul className="footer-ul">
                <li className="footer-li">Web Accessiblity</li>
                <li className="footer-li">Privacy Statement</li>
                <li className="footer-li">Terms of Use</li>
                <li className="footer-li">Contact Us</li>
              </ul>
            </div>
            <div className="rights-container">
              <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
