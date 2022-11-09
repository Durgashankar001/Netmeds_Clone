import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';
import SingleProduct_comopnent from './SingleProduct_comopnent';
import CardSlider_Component from './CardSlider/CardSlider_Component';

const Product_component = ({ myCartData }) => {
    const date = Date(Date.now())
    return (
        <Box>
            <Box>  <CardSlider_Component  /></Box>
            <Box bg='#fff' borderRadius={'7px'}>
                <Box p='15px'>
                    <Text color='#151B3999' as='b' fontSize={'13px'} letterSpacing='1px'>PRODUCTS</Text>
                    <SingleProduct_comopnent myCartData={myCartData} date={date} />
                    <Flex mt='15px' justifyContent={'space-between'}>
                        <Text fontSize={'13px'} color='#24aeb1' fontWeight={'600'} letterSpacing='1px'>ADD MORE ITEMS</Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Product_component