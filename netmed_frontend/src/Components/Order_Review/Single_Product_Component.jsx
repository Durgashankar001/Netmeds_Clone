import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

const Single_Product_Component = ({ img1, actual_price, title, crossed_price ,manufacturer,quantity}) => {
    return (
        <Box bg={"#fff"} p={"15px"} borderRadius={"10px"} mb={'15px'}>
            <Text fontSize='12px' pl={'15px'} mb='5px'>Delivery Estimate</Text>
            <Text fontSize='14px' pl={'15px'} color='#151b39' fontWeight='bold' mb='10px'>10 nov 2022</Text>
            <Box mb="10px" key={title}>
                <Flex >
                    <Box mr="12px" >
                        <Image w='50px'
                            src={img1}
                            alt="Product Img"
                        />
                    </Box>

                    <Box mr='50px'>

                        <Text fontSize='16px' mb={"20px"}  w="100%">{title}</Text>
                        <Text fontSize='12px' w={{ base: '100%', md: '100%', lg: '100%' }} >
                           Mrf:<i> {manufacturer}</i>
                        </Text>
                        <Text fontSize='12px' w={{ base: '100%', md: '100%', lg: '100%' }} >
                           <i>Seller : RELIANCE RETAIL LIMITED [NOIDA FC]</i>
                        </Text>
                        <Text fontSize='12px' w={{ base: '100%', md: '100%', lg: '100%' }} >
                           Exp: <b>Aug 2024</b> 
                        </Text>
                    </Box>



                    <Box ml="auto" w="90px" >
                        <Box ml="0px" >
                            <Text fontSize='16px' fontWeight={"bold"} color='#ef4281' >Rs.{actual_price}</Text>
                            {crossed_price && <Text mb='15px' color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs.{crossed_price}</Text>}
                            <Text fontSize={'12px'} color='#000'> <b>QTY:</b>{quantity ? quantity : <b>1</b> }</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Single_Product_Component