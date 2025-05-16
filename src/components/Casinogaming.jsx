import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function Casinogaming() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={45}
      style={{ filter: "none" }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        "@1.5": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      loop={true}
      freeMode={true}
      className="mySwiper main-swiper"
    >
      <SwiperSlide>
        <div className="casino-box border   d-flex justify-content-center align-items-center">
          <img
            src="src/assets/svg/carbon_collapse-all.svg"
            className="casino-icon"
          />
          <h3>All</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="casino-box border mx-2  d-flex justify-content-center align-items-center">
          <h3 className="casino-boxed">Top Games</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="casino-box border mx-2 d-flex justify-content-center align-items-center">
          <h3>Poker</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="casino-box border mx-2  d-flex justify-content-center align-items-center">
          <h3>Baccarat</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Casinogaming;
