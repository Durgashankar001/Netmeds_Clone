import one from "../../images-HP/kareena_1_nm.jpg"
import two from "../../images-HP/kareena_2_nm.jpg"
import three from "../../images-HP/cold_nm.jpg"
import four from "../../images-HP/aware_nm.jpg"
import five from "../../images-HP/kareena_3_nm.jpg"


import {Image,Box} from "@chakra-ui/react";

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
import { useNavigate } from "react-router-dom"

export default function SwiperOne() {
  const nav = useNavigate();
  return (
    <Box w="95%" m="auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
          return (<SwiperSlide key={i}>
            <Box _hover={{cursor:"pointer"}} onClick={()=>nav("/product")}>
              <Image src={el} alt={i}/>
            </Box>
          </SwiperSlide>)
        })}
      </Swiper>
    </Box>
  );
}
