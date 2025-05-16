import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Gaming() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        freeMode={true}
        className="mySwiper main-swiper"
      >
        <SwiperSlide>
          <div className="inner-event-box ">
            <h2>4</h2>
          </div>
          <div className="sport-box">
            <img
              src="src/assets/svg/soccer-ball-variant 1.svg"
              className="game-soccer"
            />
            <h3>Soccer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="line"></div>
          <div className="inner-event-box ">
            <h2>2</h2>
          </div>
          <div className="sport-box">
            <img
              src="src/assets/svg/cricket-player-with-bat.svg"
              className="game-soccer height"
            />
            <h3>Cricket</h3>
          </div>
          <div className="line"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sport-box">
            <img src="src/assets/svg/tennis.svg" className="game-soccer" />
            <h3>Tennis</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sport-box">
            <img
              src="src/assets/svg/soccer-ball-variant 1.svg"
              className="game-soccer"
            />
            <h3>Soccer</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gaming;
