import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import "./Order_Review.css"
import Order_Status_Component from '../../Components/Order_Review/Order_Status_Component';
import PaymentDetails_Component from '../../Components/Cart/PaymentDetails_Component';
import Single_Product_Component from '../../Components/Order_Review/Single_Product_Component';
import Order_Delivery_component from '../../Components/Order_Review/Order_Delivery_component';
import Order_Customer_Note_Component from '../../Components/Order_Review/Order_Customer_Note_Component';

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
    }
]

const Order_Review = () => {
    const [loading, setLoding] = useState(false)
    const date = Date(Date.now())
    return (
        <Box bg='#F6F6F7' >
            <Box pt={"1.5rem"} bg='#F6F6F7'>
                {
                    loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                }
                <Order_Status_Component color1={"green"} color2={"red"} />
                <Box w={{ base: '100%', md: '100%', lg: '80%' }} m="auto" mt='10px'  >

                    <Box justifyContent='space-between' wrap='wrap' display={{ base: "block", lg: "flex" }} >
                        <SimpleGrid columns={1} w={{ md: '100%' }} mr="20px" padding={{ base: "20px", lg: "0px" }}>
                            <Box>
                                <Text color='rgba(21,27,57,.6)' fontSize='16px' fontWeight={"bold"} mb={"10px"}>PRODUCTS</Text>
                                {
                                    myCartData.map((el)=>(
                                        <Single_Product_Component {...el}/>
                                    ))
                                }
                            </Box>
                                <Order_Delivery_component/>
                                <Order_Customer_Note_Component/>
                        </SimpleGrid>
                        <Box w={{ base: "100%", lg: "50%" }}>
                            <PaymentDetails_Component />
                            <Box mt='-20px' p='15px'>
                                <Text as='i' fontSize={'10px'} lineHeight='-10px'>Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{ color: '#0033ff' }}>Terms & Conditions</span></Text>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Order_Review