import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SlideShow.css'



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Slide from "../slide/Slide";

export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
      </Swiper>
    </>
  );
}
