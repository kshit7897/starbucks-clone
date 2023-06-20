import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import "./singleSlider.css";

const SingleSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: "#d7b78f" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Frappuccino_banner_1_4_722ac7022a.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text">
              <p className="slider-text-inner">Beat The Heat With</p>
              <h2>Bottled Frappuccino</h2>
              <p className="slider-text-inner">
                Buy any one Bottled & get FLAT 50% off on the second bottle of
                any variant. Offer Applicable at the checkout
              </p>
              <p>
                <span className="slider-text-inner">for</span> <br /> 350.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: " rgb(225 161 17)" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7_1_793a1d6e49.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text">
              <p className="slider-text-inner">Indulge Today!</p>
              <h2>Love At First Bite</h2>
              <p className="slider-text-inner">
                Embark on a delectable journey of bite-sized delights
              </p>
              <p>
                <span className="slider-text-inner">for</span> <br /> 160.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: "rgb(241 204 25 / 70%)" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/3_2_9509ea1720.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text">
              <p className="slider-text-inner">Attention starbucks Fans!</p>
              <h2>Signature Milkshakes</h2>
              <p className="slider-text-inner">
                Statisfy your sweet tooth with our sugnature milkshakes. Indulge
                today in these coffee-free versions.
              </p>
              <p>
                <span className="slider-text-inner">Starting From</span> <br />{" "}
                300.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: " rgb(10 94 55)" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Image_35_ff2c5f9905.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text" style={{ color: "white" }}>
              <p className="slider-text-inner">Go Desi With!</p>
              <h2>Masala Chai</h2>
              <p className="slider-text-inner">
                Enjoy traditional masala chai with abundance of strong indian
                spices and flavourful handpicked tea.
              </p>
              <p>
                <span className="slider-text-inner">For</span> <br /> 283.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: "coral" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/freshly_baked_cropped_c365e34a66.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text">
              <p className="slider-text-inner">Presenting</p>
              <h2>Freshly Assembled</h2>
              <p className="slider-text-inner">
                Savor the taste of our new handcraft sandwiches. Freshness never
                tasted so good.
              </p>
              <p>
                {" "}
                <span className="slider-text-inner">
                  Starting From
                </span> <br /> 350.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className="slider-inner-container"
            style={{ backgroundColor: " rgb(10 94 55)" }}
          >
            <div className="image-slider-inner">
              <img
                id="slider-image"
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Bonus_Stars_2d6733cfde.png"
                alt="kshit"
              />
            </div>
            <div className="slider-text" style={{ color: "white" }}>
              <p className="slider-text-inner">Special Offer</p>
              <h2>DOUBLE STARS</h2>
              <p className="slider-text-inner">
                Double Your Stars on first 3 order placed through the app. Order
                from the wide menu range and enjoy!
              </p>
              <p>
                <span className="slider-text-inner">Starting From </span> <br />{" "}
                250.oo$
              </p>
            </div>
            {/* <button className="order-now-btn">Order Now</button> */}
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SingleSlider;


