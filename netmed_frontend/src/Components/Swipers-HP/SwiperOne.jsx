import one from "../../images-HP/kareena_1_nm.jpg"
import two from "../../images-HP/kareena_2_nm.jpg"
import three from "../../images-HP/cold_nm.jpg"
import four from "../../images-HP/aware_nm.jpg"
import five from "../../images-HP/kareena_3_nm.jpg"
//let x = "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832066_Web_Home_Bannercabbb.jpg"


import {Image,Box,} from "@chakra-ui/react";

let arr = [one, two, three, four, five];


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperOne() {
  return (
    <Box w="95%" m="auto">
      <Swiper
        spaceBetween={10}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {arr && arr.map((el, i) => {
          return (<SwiperSlide key={i} w="1130px">
            <Image w="1130px" src={el} alt={i} _hover={{cursor:"pointer"}}/>
        </SwiperSlide>)
        })}
      </Swiper>
    </Box>
  );
}
