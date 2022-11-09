import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./main.css";

// import required modules
import { Pagination, Navigation } from "swiper";


export default function swipImage() {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584963_Personal_Care_Week_Wellness_web.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582739_Inatur_web.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667582893_Emami_web.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583050_Nivea_web.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583478_mamaearth-wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583684_La-Shield-wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583787_Scalpe-wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667583952_Satthuva_web.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584311_The-Body-Shop-wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667806703_Breath-Easy_wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1667584127_Nhea-wellness-main-banner.jpg" className="img1" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  )
}
