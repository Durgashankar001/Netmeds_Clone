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
import { myPupularProduct } from './MostPopular_Product_Component';


//Functional component
const Swiper_Component = () => {
    return (
        <Box w={{ base: "100%", lg: "700px" }} h={{ base: "300px"  }}>
            <Text mb={"20px"} color='#151B3999' as='b' fontSize={'17px'} letterSpacing='1px' style={{ marginBottom: "8px" }}>MOST SELLING PRODUCTS</Text>
            <Swiper
                slidesPerView={3.6}
                slidesPerGroup={1}
                spaceBetween={"2%"}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={true}
                modules={[Navigation]}
                className="mySwiper"
                
            >
                {myPupularProduct &&
                    myPupularProduct.map((el, i) => {
                        return (
                            <SwiperSlide key={i} className="my_slider_cart">

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