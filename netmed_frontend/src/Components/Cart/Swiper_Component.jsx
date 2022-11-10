//Import module from dependency

import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Single_Card_Component from './Single_Card_Component';

//Import Styles or required module from swiper dependency

// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


//Creating or getting  Objects for swiper

const obj = {
    img: "https://www.netmeds.com/images/product-v1/150x150/977198/netmeds_3_ply_face_mask_with_nose_pin_100s_0_1.jpg",
    name: "BD Ultra Fine Nano Pen 5's",
    price: 500,
    cross_price: 500,
}
const arr = new Array(10).fill(0).map((el) => el = obj)



//Functional component
const Swiper_Component = () => {
    return (
        <Box w={{ base: "100%", lg: "750px" }} h={{ base: "300px" }}>
            <Text mb={"20px"} color='#151B3999' as='b' fontSize={'17px'} letterSpacing='1px' style={{ marginBottom: "8px" }}>MOST SELLING PRODUCTS</Text>
            <Swiper
                slidesPerView={3.5}
                slidesPerGroup={1}
                spaceBetween={"2%"}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={true}
                modules={[Navigation]}
                className="mySwiper"
                
            >
                {arr &&
                    arr.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>

                                {/* import card component */}
                                <Single_Card_Component key={i} {...el} />
                            </SwiperSlide>
                        );
                    })}
                <br />
            </Swiper>
        </Box>
    )
}

export default Swiper_Component