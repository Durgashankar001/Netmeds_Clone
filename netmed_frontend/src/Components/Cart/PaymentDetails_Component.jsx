import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { useSelector } from 'react-redux';

const PaymentDetails_Component = ({ buttontext, navigation , total }) => {
    const navigate = useNavigate()
    // const [total, setTotal] = useState(0)
    // const token = useSelector((store) => store.Auth.token);
    // useEffect(()=>{
    //     getTotalValue(token)
    // },[])
    // const getTotalValue = async (token) => {
    //     const myToken = jwt_decode(token)
    //     const user = myToken.id
    //     await axios.get('http://localhost:8080/cart/total', {
    //         headers: {
    //             "x-authorization": `Bearer ${user}`
    //         }
    //     }).then((res) => {
    //         setTotal(res.data)
    //     }).catch((e) => {
    //         console.log(e)
    //     })
    // }
    return (
        <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
            <Box p='5px'>
                <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='15px'>PAYMENT DETAILS</Text>
                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>MRP Total</Text>
                    <Text>Rs.{total}</Text>
                </Flex>
                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>Netmeds Discount</Text>
                    <Text>-Rs. {(total * 0.05).toFixed(2)}</Text>
                </Flex>

                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>Promocode Discount</Text>
                    <Text>-Rs. 00.00</Text>
                </Flex>

                <Flex fontSize={'14px'} mb='20px' justifyContent={'space-between'}>
                    <Text as='b'>Total Amount *</Text>
                    <Text as='b'>Rs.{total - ((total * 0.05).toFixed(2))}</Text>
                </Flex>
            </Box>
            <Box bg='#f3f8ec' p='10px 15px' mb='30px'>
                <Text fontSize={'12px'} fontWeight='600' color='#489841' letterSpacing='1px'>TOTAL SAVINGS RS.{(total * 0.05).toFixed(2)}</Text>
            </Box>
            <Flex justifyContent={'space-between'} p='5px'>
                <Box>
                    <Text fontSize={'11px'} letterSpacing='1px' fontWeight={'600'} color='#151B3999'>TOTAL AMOUNT</Text>
                    <Text fontSize={'20px'} as='b'>Rs.{(total - (total * 0.05)).toFixed(0)}</Text>
                </Box>
                <Box>
                    <Button onClick={() => navigate(navigation)} bg='#24aeb1' borderRadius={'2px'} color='#fff' letterSpacing={'1px'} _hover='none' p='0 30px'>{buttontext}</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default PaymentDetails_Component