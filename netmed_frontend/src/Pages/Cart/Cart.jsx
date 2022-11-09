import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import Product_component from '../../Components/Cart/Product_component';
import SaveToLater_Component from '../../Components/Cart/SaveToLater_Component';
import EmptyCart_Component from '../../Components/Cart/EmptyCart_Component';
import "./Cart.css"
import CardSlider_Component from '../../Components/Cart/CardSlider/CardSlider_Component';
import Promocode_Component from '../../Components/Cart/Promocode_Component';



let saveLaterData = [
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    },
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    },
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    }
]
let myCartData = [
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    },
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    },
    {
        img: "https://www.netmeds.com/images/product-v1/75x75/410529/cetaphil_baby_daily_lotion_400ml_52341_0_3.jpg",
        title: "Cetaphil Baby Daily Lotion 400ml",
        man: "Galderma India Pvt Ltd",
        price: "562.10",
        dis_price: "770.00"
    }
]

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [mypromo, setPromo] = useState(false)


    const handlePromocodeINput = () => {
        setPromo(!mypromo)
    }

    return (
        <Box position={'relative'} bg='#F6F6F7'>
            {
                myCartData.length === 0 ?
                   <EmptyCart_Component saveLaterData={saveLaterData}/> :
                    <Box>
                        {
                            loading  && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                        }
                        <Box w={{ base: "95%", lg: "80%" }} m="auto">
                            <Heading as='h4' color='black' pt='20px' fontSize='25px' fontWeight={'600'} style={{ fontWeight: "bold", marginBottom: "15px", marginLeft: "15px" }}>Order Summary</Heading>
                        </Box>
                       
                        <Box display={{ base: 'block', lg: 'flex' }} w={{ base: "95%", lg: "80%" }} m='auto' gap='25px' mt='30px'>

                            <Box w='100%'>
                                <Product_component myCartData={myCartData} />
                                <SaveToLater_Component saveLaterData={saveLaterData} />
                            </Box>
                           <Promocode_Component handlePromocodeINput={handlePromocodeINput} mypromo={mypromo}/>
                        </Box>
                    </Box>
            }
        </Box>
    )
}

export default Cart