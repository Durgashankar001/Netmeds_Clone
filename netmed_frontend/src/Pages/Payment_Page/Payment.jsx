import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import Order_Status_Component from '../../Components/Order_Review/Order_Status_Component';
import PaymentDetails_Component from '../../Components/Cart/PaymentDetails_Component';
import Vouchers_Component from '../../Components/Payment/Vouchers_Component';
import GooglePay_Component from '../../Components/Payment/GooglePay_Component';
import BankMethod_Component from '../../Components/Payment/BankMethod_Component';
import AddNewCard_Component from '../../Components/Payment/AddNewCard_Component';
import Paytm_Component from '../../Components/Payment/Paytm_Component';
import PhonePay_Component from '../../Components/Payment/PhonePay_Component';
import COD from '../../Components/Payment/COD';
import RewardPay_Component from '../../Components/Payment/RewardPay_Component';
import Payment_Details_Component from '../../Components/Payment/Payment_Details_Component';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../../Store/Cart/Cart.action';
import jwt_decode from "jwt-decode"
import axios from 'axios';

const Payment = () => {
    const token = useSelector((store) => store.Auth.token);
    const { loading, error, data } = useSelector((store) => store.cart)
    const [number, setNumber] = useState(0)
    const [length, setLength] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        getTotalValue(token)
    }, [])
    const getTotalValue = async (token) => {
        const myToken = jwt_decode(token)
        const user = myToken.id
        await axios.get('http://localhost:8080/cart/total', {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        }).then((res) => {
            setTotal(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <Box bg='#F6F6F7' >
            <Box pt={"2.5rem"} bg='#F6F6F7'>
                {
                    loading && <Box zIndex={'2'} opacity='0.8' display={'grid'} position='fixed' bottom='0px' placeContent='center' w='100vw' h='110vh' bg='black'><Spinner color='#fff' size='xl' /></Box>
                }
                <Order_Status_Component color1={"green"} color2={"green"} />
                <Box w={{ base: '100%', md: '100%', lg: '80%' }} m="auto" mt='10px'  >

                    <Box justifyContent='space-between' wrap='wrap' display={{ base: "block", lg: "flex" }} >
                        <SimpleGrid columns={1} w={{ md: '100%' }} mr="20px" padding={{ base: "20px", lg: "0px" }}>
                            <Box>
                                <Vouchers_Component />
                                <GooglePay_Component />
                                <BankMethod_Component />
                                <AddNewCard_Component />
                                <Paytm_Component />
                                <PhonePay_Component />
                                <COD/>
                                <RewardPay_Component/>
                            </Box>
                        </SimpleGrid>
                        <Box w={{ base: "100%", lg: "50%" }}>
                            <Payment_Details_Component total={total} />
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

export default Payment