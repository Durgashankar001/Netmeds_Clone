import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import {FaCrown} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import PaymentDetails_Component from './PaymentDetails_Component';

const Promocode_Component = ( {handlePromocodeINput,mypromo}) => {
    return (
        <Box w={{ base: '100%', lg: '45%' }}>
            <Box display={"flex"} w="100%" h="100px" mb={"1rem"} borderRadius={"15px"} style={{backgroundImage:"linear-gradient(to right,#f85caa 0,#f03479 99%)"}}>
            <Box w={"20%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box w={"40px"} h={"40px"} bg={"white"} borderRadius={"50%"} position={"relative"}><FaCrown style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}  size={22} color={"#3ecacd"}/> </Box>
            </Box>
            <Box  h={"100%"} w={"70%"} pr={"3px"}>
                <Text mt={"20px"} fontWeight={"500"} color={"white"} fontSize={"13px"} mb={"5px"}>Become Netmeds First Member</Text>
                <Text fontSize={"12px"}>Join membership to save much more!</Text>
            </Box>
            <Box w={"10%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box w={"20px"} h={"20px"} bg={"white"} borderRadius={"50%"} position={"relative"}><BsArrowRight style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}  size={16} color={"#f85caa"}/></Box>
            </Box>
            </Box>
            <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                <Box>
                    <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='10px'>APPLY PROMOCODE / NMS SUPERCASH</Text>
                    <Checkbox onChange={handlePromocodeINput} colorScheme={'teal'}>Apply Promo Code</Checkbox>
                    <Center><Text color='#151B3999' w='80%' mt='10px' fontSize={'12px'}>Get flat discount! Vouchers applicable in payment options.</Text></Center>
                </Box>
                <Box mt='30px' pos='relative'>
                    {mypromo && <Box>
                        <Text color='#24aeb1'  fontSize={'12px'} fontWeight='600'>PROMOCODE</Text>
                        <Box>
                            <Input size={'xs'} variant='flushed' placeholder='Have a promocode? Enter here' />
                            <Button pos='absolute' right='0' bottom='-5px' bg='none' _hover='none' color='#ef4281'>Apply</Button>
                        </Box>
                    </Box>}
                </Box>
            </Box>
            <PaymentDetails_Component/>
            <Box mt='-20px' p='15px'>
                <Text as='i' fontSize={'10px'} lineHeight='-10px'>Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{ color: '#0033ff' }}>Terms & Conditions</span></Text>
            </Box>
        </Box>
    )
}

export default Promocode_Component