import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style.css/Home.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function CenterMode() {
  // Sample data array containing image URLs
  const imageData = [
    "src/assets/images/93344267_10045035 1.png",
    "src/assets/images/93344267_10045035 1.png",
    "src/assets/images/93344267_10045035 1.png",
    "src/assets/images/93344267_10045035 1.png"
    // Add more image URLs as needed
  ];

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'1.2'}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        initialSlide={1} // Start with the second image (index 1)
        freeMode={true}
        loop={true} // Enable loop
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {/* Loop over imageData array and create SwiperSlide for each image */}
        {imageData.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-container">
              <div className="swiper-wraper">
                <div className="swiper-slider">
                  <div className={`image-${index + 1}`}>
                    <img src={imageUrl} alt={`Slide ${index}`} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CenterMode;
