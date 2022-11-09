import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';

const Promocode_Component = ( {handlePromocodeINput,mypromo}) => {
    return (
        <Box w={{ base: '100%', lg: '45%' }}>
            <Box w="100%" border={"1px solid black"} h="100px" mb={"1rem"} borderRadius={"15px"} style={{backgroundImage:"linear-gradient(to right,#f85caa 0,#f03479 99%)"}}></Box>
            <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                <Box>
                    <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='10px'>APPLY PROMOCODE / NMS SUPERCASH</Text>
                    <Checkbox onChange={handlePromocodeINput} colorScheme={'teal'}>Apply Promo Code</Checkbox>
                    <Center><Text color='#151B3999' w='80%' mt='10px' fontSize={'12px'}>Get flat discount! Vouchers applicable in payment options.</Text></Center>
                </Box>
                <Box mt='30px' pos='relative'>
                    {mypromo && <Box>
                        <Text color='#24aeb1' fontSize={'12px'} fontWeight='600'>PROMOCODE</Text>
                        <Box>
                            <Input size={'xs'} variant='flushed' placeholder='Have a promocode? Enter here' />
                            <Button pos='absolute' right='0' bottom='-5px' bg='none' _hover='none' color='#ef4281'>Apply</Button>
                        </Box>
                    </Box>}
                </Box>
            </Box>
            <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
                <Box p='5px'>
                    <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='15px'>PAYMENT DETAILS</Text>
                    <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                        <Text>MRP Total</Text>
                        <Text>Rs.{500}</Text>
                    </Flex>
                    <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                        <Text>Netmeds Discount</Text>
                        <Text>-Rs.{500}</Text>
                    </Flex>
        
                        <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                            <Text>Promocode Discount</Text>
                            <Text>-Rs.{22.25}</Text>
                        </Flex>
   
                    <Flex fontSize={'14px'} mb='20px' justifyContent={'space-between'}>
                        <Text as='b'>Total Amount *</Text>
                        <Text as='b'>Rs.{52.25}</Text>
                    </Flex>
                </Box>
                <Box bg='#f3f8ec' p='10px 15px' mb='30px'>
                    <Text fontSize={'12px'} fontWeight='600' color='#489841' letterSpacing='1px'>TOTAL SAVINGS RS.{520}</Text>
                </Box>
                <Flex justifyContent={'space-between'} p='5px'>
                    <Box>
                        <Text fontSize={'11px'} letterSpacing='1px' fontWeight={'600'} color='#151B3999'>TOTAL AMOUNT</Text>
                        <Text fontSize={'20px'} as='b'>Rs.{500}</Text>
                    </Box>
                    <Box>
                        <Button bg='#24aeb1' borderRadius={'2px'} color='#fff' letterSpacing={'1px'} _hover='none' p='0 30px'>PROCEED</Button>
                    </Box>
                </Flex>
            </Box>
            <Box mt='-20px' p='15px'>
                <Text as='i' fontSize={'10px'} lineHeight='-10px'>Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read <span style={{ color: '#0033ff' }}>Terms & Conditions</span></Text>
            </Box>
        </Box>
    )
}

export default Promocode_Component