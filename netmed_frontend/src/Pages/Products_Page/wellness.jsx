import { Box } from '@chakra-ui/react'
import React from 'react'
import SwipImage from "./swipImage"
import Productsswiper from "./productswiper"
import UptoProducts from './UptoProducts'

function well() {
  return (
    <div className='bo'>
  
     <Box className='bsw1'> <SwipImage/></Box>
     <h1 className='gh1'>Popular Categories</h1>
    <Box className='bsw2'>
        <Box className='bsw3'><img className='img12' src="https://www.netmeds.com/images/category/v1/3902/thumb/face_personal_care.jpg" alt="" /> <h1 className='h1'>Face Personal Care</h1></Box>
        <Box className='bsw3'><img className='img12' src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg" alt="" /> <h1 className='h1'>Body Care</h1></Box>
        <Box className='bsw3'><img className='img12' src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg" alt="" /> <h1 className='h1'>Hair Care</h1></Box>
        <Box className='bsw3'><img className='img12' src="https://www.netmeds.com/images/category/v1/562/thumb/oral_care.jpg" alt="" /> <h1 className='h1'>Oral Care</h1></Box>
        <Box className='bsw3'><img className='img12' src="https://www.netmeds.com/images/category/v1/3772/thumb/home_health.jpg" alt="" /> <h1 className='h1'>Home & Health</h1></Box>
    </Box>


<Box className='pr'><h4 className='uh4'>UNDER-399</h4><Productsswiper/></Box>


<Box className='pr'><h4 className='uh4'>UPTO 65% OFF</h4><UptoProducts/></Box>



    {/* Health Concerns */}
    <h1 className='gh1'>Health Concerns</h1>
    <Box className='bsw2'>
        <Box className='bsw3'><img className='img121' src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" alt="" /> <h1 className='h1'>Lung Care</h1></Box>
        <Box className='bsw3'><img className='img121' src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" alt="" /> <h1 className='h1'>Weight Care</h1></Box>
        <Box className='bsw3'><img className='img121' src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" alt="" /> <h1 className='h1'>Women's Care</h1></Box>
        <Box className='bsw3'><img className='img121' src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" alt="" /> <h1 className='h1'>Bone And Joint Pain</h1></Box>
        <Box className='bsw3'><img className='img121' src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1" alt="" /> <h1 className='h1'>Cold And Fever</h1></Box>
    </Box>
    </div>
  )
}

export default well
