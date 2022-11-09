import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import SaveToLater_Component from './SaveToLater_Component';

const EmptyCart_Component = ({saveLaterData}) => {
    return (
        <Box>
            <Box w='30%' pt='20px'>
                <Heading as='h4' color='black' textAlign={'center'} fontSize='25px' fontWeight={'600'}>My Cart</Heading>
            </Box>
            <Box pb='20px'>
                <Box m='70px 0 50px 0' display={'flex'} alignItems='center' justifyContent={'center'}>
                    <Box>
                        <Center>
                            <Image w='230px' src='https://www.netmeds.com/msassets/images/emptycart.svg'></Image>
                        </Center>
                        <Center>
                            <Text mt='10px' as='b' fontWeight={'500'}>Your Cart is empty!</Text>
                        </Center>
                        <Center>
                            <Text mt='10px'  fontWeight={'400'} textAlign={'center'} color='#8a9095' fontSize={'14px'} w='62%'>You have no items added in the cart. Explore and add products you like!</Text>
                        </Center>
                        <Center>
                            <Button _hover='none' mt='20px' bg='#24aeb1' h='46px' fontSize={'15px'} color='#fff' borderRadius={'3px'} w='70%'>ADD PRODUCTS</Button>
                        </Center>
                    </Box>
                </Box>
                <Box mt='50px'>
                    <Box w={{base:"90%",lg:"50%"}} p='15px' m='auto' borderRadius={'10px'} bg='#fff'>
                        {
                            saveLaterData.length !== 0 ?
                                <SaveToLater_Component saveLaterData={saveLaterData} /> :
                                <Center>
                                    <Box>
                                        <Text color='#151B3999' as='b' letterSpacing='1px'>SAVED FOR LATER</Text>
                                        <Text fontSize={'12px'} color='#151B3999' mt='10px'>No items in save for later</Text>
                                    </Box>
                                </Center>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EmptyCart_Component