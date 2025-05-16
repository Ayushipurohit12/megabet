import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function View() {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={45}
    style={{filter:"none"}}
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
    freeMode= {true}
    className="mySwiper main-swiper"
  >
    <SwiperSlide>
      <div className="casino-game-box">
        <img src='src/assets/svg/Rectangle 397 (2).svg' />
        <h3>Teen patti</h3>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="casino-game-box">
    <img src='src/assets/svg/Rectangle 398.svg' />
    <h3>Teen patti</h3>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="casino-game-box">
     <img src='src/assets/svg/Rectangle 397 (1).svg' />
    <h3>Teen patti</h3>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="casino-game-box">
        <img src='src/assets/svg/Rectangle 397.svg' />
    <h3>Teen patti</h3>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default View;