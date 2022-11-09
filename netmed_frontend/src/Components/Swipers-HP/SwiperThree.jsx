
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


let obj = {
    name:"Netmeds 3 ply marks with nose pin Netmeds 3 ply marks with nose pin Netmeds 3 ply marks with nose pin",
    img:"https://www.netmeds.com/images/product-v1/150x150/977198/netmeds_3_ply_face_mask_with_nose_pin_100s_0_1.jpg",
    price:"782",
    off:"UPTO 60% off"
}
let arr = new Array(10).fill(0).map((el)=>el = obj);
// import required modules
import { Pagination, Navigation } from "swiper";
import Card from "./Card";

export default function SwiperThree() {
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
        {arr && arr.map((el,i)=>{
            return (<SwiperSlide key={i}>
                <Card key={i} {...el}/>
            </SwiperSlide>)
        })}
        <br />
      </Swiper>
    </>
  );
}
