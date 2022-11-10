

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./product.css";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@chakra-ui/react";

function productswiper() {
  return (
    <div>
       <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/1045847/lizol_disinfectant_surface_floor_cleaner_liquid_lavender_2_litre_416520_0_0.jpg" alt="" /><h1 className="boh1">Lizol Disinfectant Surface  Cleaner </h1><h2 className="boh2">Mkt: Reckitt Benckiser Healthcare India Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 339.15</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 399.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/1058752/the_body_shop_satsuma_shower_gel_250_ml_499917_0_1.jpg" alt="" /><h1 className="boh1">The Body Shop Satsuma Shower Gel 250ml</h1><h2 className="boh2">Mkt: Quest Retail Pvt. Ltd.</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 327.75</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 345.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/346480/tvaksh_face_care_face_wash_60_gm_0_1.jpg" alt="" /><h1 className="boh1">Tvaksh Face Care Face Wash 60 gm</h1><h2 className="boh2">Mkt: Abbott Healthcare Pvt. Ltd.</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 279.00</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 350.30</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/406895/cetaphil_gentle_skin_cleanser_for_all_skin_types_125ml_0.jpg" alt="" /><h1 className="boh1">CETAPHIL GENTLE SKIN CLEANSER </h1><h2 className="boh2">Mkt: Galderma India Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 268.40</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 305.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg" alt="" /><h1 className="boh1">Scalpe  Anti Dandruff Shampoo </h1><h2 className="boh2">Mkt: Glenmark Pharmaceuticals Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 238</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 280.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/952462/la_shield_pollution_protect_mineral_sunscreen_gel_spf_50_50_gm_0_0.jpg" alt="" /><h1 className="boh1">La Shield  Mineral Sunscreen Gel</h1><h2 className="boh2">Mkt: Glenmark Pharmaceuticals Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 210</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 280.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/914707/dettol_instant_hand_sanitizer_original_500_ml_0_1.jpg" alt="" /><h1 className="boh1">Dettol Instant Hand Sanitizer</h1><h2 className="boh2">Mkt: Reckitt Benckiser India Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 242.50</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 250.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/915834/zyndet_bathing_bar_150_gm_0_0.jpg" alt="" /><h1 className="boh1">Zyndet Bathing Bar 150 gm</h1><h2 className="boh2">Mkt: Curatio Health Care (I) Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 211.20</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 240.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/824822/mamaearth_milky_soft_baby_face_cream_with_muru_muru_butter_50_gm_0.jpg" alt="" /><h1 className="boh1">SEBAMED CLEAR FACE CLEANSING </h1><h2 className="boh2">Mkt: Honasa Consumer Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 179.10</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 199.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default productswiper
