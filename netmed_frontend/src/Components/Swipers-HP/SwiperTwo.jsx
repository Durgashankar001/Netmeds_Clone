import {Image,Box} from "@chakra-ui/react"
import a from "../../images-HP/trend_one.jpg";
import b from "../../images-HP/trend_two.jpg"
import c from "../../images-HP/trend_three.jpg"
import d from "../../images-HP/trend_four.jpg"
import e from "../../images-HP/trend_five.jpg"
import f from "../../images-HP/trend_six.jpg"
import g from "../../images-HP/trend_seven.jpg"
import h from "../../images-HP/trend_eight.jpg"
import i from "../../images-HP/trend_nine.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//let arr;
let arr = [a,b,c,d,e,f,g,h,i];
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function SwiperTwo() {
  const nav = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
            return (<>
                <SwiperSlide>
                    <Box>
                        <Image onClick={()=>nav("/product")} borderRadius={"10px"} src={el} alt={i} _hover={{cursor:"pointer"}}/>
                    </Box>
                </SwiperSlide>
            </>)
        })}
      </Swiper>
    </>
  );
}
