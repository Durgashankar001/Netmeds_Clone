

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
function UptoProducts() {
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
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/932840/mamaearth_sleeping_mask_vitamin_c_100_gm_0_0.jpg" alt="" /><h1 className="boh1">Mamaearth Sleeping Mask - Vitamin C </h1><h2 className="boh2">Mkt: Reckitt Benckiser Healthcare India Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 449.15</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 599.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/933015/aroma_magic_face_wash_neem_tea_tree_50_ml_0_0.jpg " alt="" /><h1 className="boh1">Aroma Magic Face Wash - Neem</h1><h2 className="boh2">Mkt: Blossom Kochhar Beauty Products</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 80.75</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 100.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/923408/cetaphil_bright_healthy_radiance_brightness_reveal_creamy_cleanser_100gm_0_2.jpg" alt="" /><h1 className="boh1">Cetaphil Bright Healthy  Brightness</h1><h2 className="boh2">Mkt: Abbott Healthcare Pvt. Ltd.</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 616.00</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 700.30</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/829556/aroma_magic_mint_cleanser_200_gm_0.jpg" alt="" /><h1 className="boh1">Cetaphil Gentle Skin Cleanser </h1><h2 className="boh2">Mkt: Galderma India Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 268.40</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 305.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/1029275/cgg_cosmetics_rose_water_micellar_cleansing_water_4_in_1_skin_hydration_removing_makeup_for_all_skin_types_300_ml_423259_0_0.jpg " alt="" /><h1 className="boh1">Scalpe  Anti Dandruff Shampoo </h1><h2 className="boh2">Mkt: Glenmark Pharmaceuticals Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 238</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 280.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/946247/natures_cell_pore_refining_bxl_dandelion_serum_30_ml_0_1.jpg " alt="" /><h1 className="boh1">La Shield  Mineral Sunscreen Gel</h1><h2 className="boh2">Mkt: Glenmark Pharmaceuticals Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 210</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 280.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/923408/cetaphil_bright_healthy_radiance_brightness_reveal_creamy_cleanser_100gm_0_2.jpg " alt="" /><h1 className="boh1">Dettol Instant Hand Sanitizer</h1><h2 className="boh2">Mkt: Reckitt Benckiser India Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 242.50</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 250.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/1029311/cgg_cosmetics_aqua_bomb_watery_sunscreen_cream_spf_50_broad_spectrum_pa_protection_50_gm_423552_0_0.jpg " alt="" /><h1 className="boh1">Zyndet Bathing Bar 150 gm</h1><h2 className="boh2">Mkt: Curatio Health Care (I) Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 211.20</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 240.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
        <SwiperSlide ><Box className="bos1"><img className="boximg" src="https://www.netmeds.com/images/product-v1/150x150/829616/aroma_magic_glycolic_concentrate_2x10_ml_0_1.jpg " alt="" /><h1 className="boh1">Aroma Magic Glycolic Concentrate</h1><h2 className="boh2">Mkt: Blossom Kochhar Beauty Products Pvt Ltd</h2>  <Box className="bos2"><h3 className="bh3">Best price* </h3><h2 className="bh2"> Rs. 765.10</h2></Box>  <Box className="bos6"><h3 className="mh3"> MRP </h3><h4 className="mh4">Rs. 850.00</h4> </Box>   <button className="btn1">ADD TO CART</button></Box></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default UptoProducts
