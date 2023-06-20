// in this code i want if screen size reduce then slidepreview desrease accrding to screen size
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import "./multiSlider.css";

const MultiSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlidesPerView(1);
      } else if (screenWidth >= 768 && screenWidth < 1200) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="main-barista">
        <div className="container-barista">
          <h2>Barista Recommends</h2>
          <p>view Manu</p>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="multi-slide">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-squre">
                  <img
                    id="img-card"
                    src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112737.webp"
                    alt="kshit"
                  />
                </div>

                <div className="card-body">
                  <div className="new-item">
                    <div className="veg">
                      {" "}
                      <img
                        className="logo-veg"
                        src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png"
                        alt="kshit"
                      />
                    </div>
                  </div>
                  <h3 className="card-title">Three Dip Nachos</h3>
                  <div className="diet">
                    <h5 className="diet-text">
                      <span className="diet-text-span">
                        PER SERVE(180 g)-513 Kcal
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="left-footer">
                  <h4 id="price">262.50</h4>
                </div>
                <div className="left-item">
                  <button className="card-add-btn">add item</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="multi-slide">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-squre">
                  <img
                    id="img-card"
                    src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/113008.webp"
                    alt="kshit"
                  />
                </div>

                <div className="card-body">
                  <div className="new-item">
                    <div className="veg">
                      <img
                        className="logo-veg"
                        src="https://www.pngkit.com/png/detail/257-2579552_non-veg-symbol-non-veg-symbol-png.png"
                        alt="kshit"
                      />
                    </div>
                  </div>
                  <h3 className="card-title">Three Dip Nachos</h3>
                  <div className="diet">
                    <h5 className="diet-text">
                      <span className="diet-text-span">
                        PER SERVE(180 g)-513 Kcal
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="left-footer">
                  <h4 id="price">262.50</h4>
                </div>
                <div className="left-item">
                  <button className="card-add-btn">add item</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="multi-slide">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-squre">
                  <img
                    id="img-card"
                    src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112737.webp"
                    alt="kshit"
                  />
                </div>

                <div className="card-body">
                  <div className="new-item">
                    <div className="veg">
                      <img
                        className="logo-veg"
                        src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png"
                        alt="kshit"
                      />
                    </div>
                  </div>
                  <h3 className="card-title">Three Dip Nachos</h3>
                  <div className="diet">
                    <h5 className="diet-text">
                      <span className="diet-text-span">
                        PER SERVE(180 g)-513 Kcal
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="left-footer">
                  <h4 id="price">262.50</h4>
                </div>
                <div className="left-item">
                  <button className="card-add-btn">add item</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="multi-slide">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-squre">
                  <img
                    id="img-card"
                    src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112737.webp"
                    alt="kshit"
                  />
                </div>

                <div className="card-body">
                  <div className="new-item">
                    <div className="veg">
                      <img
                        className="logo-veg"
                        src="https://juststickers.in/wp-content/uploads/2015/12/Vegetarian1.png"
                        alt="kshit"
                      />
                    </div>
                  </div>
                  <h3 className="card-title">Three Dip Nachos</h3>
                  <div className="diet">
                    <h5 className="diet-text">
                      <span className="diet-text-span">
                        PER SERVE(180 g)-513 Kcal
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="left-footer">
                  <h4 id="price">262.50</h4>
                </div>
                <div className="left-item">
                  <button className="card-add-btn">add item</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="multi-slide">
            <div className="card">
              <div className="card-horizontal">
                <div className="img-squre">
                  <img
                    id="img-card"
                    src="https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112737.webp"
                    alt="kshit"
                  />
                </div>

                <div className="card-body">
                  <div className="new-item">
                    <div className="veg">
                      <img
                        className="logo-veg"
                        src="https://www.pngkit.com/png/detail/257-2579552_non-veg-symbol-non-veg-symbol-png.png"
                        alt="kshit"
                      />
                    </div>
                  </div>
                  <h3 className="card-title">Three Dip Nachos</h3>
                  <div className="diet">
                    <h5 className="diet-text">
                      <span className="diet-text-span">
                        PER SERVE(180 g)-513 Kcal
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="left-footer">
                  <h4 id="price">262.50</h4>
                </div>
                <div className="left-item">
                  <button className="card-add-btn">add item</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MultiSlider;
