
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


//import { topBrands } from "./SwiperArr";
// import required modules
import { Pagination, Navigation } from "swiper";
import CardThree from "./CardThree";

export default function SwiperFour({arr}) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr && arr.map((el, i) => {
          return (<SwiperSlide key={i}>
            
            <CardThree key={i} {...el} />
            
          </SwiperSlide>)
        })}
        <br />
      </Swiper>
    </>
  );
}
