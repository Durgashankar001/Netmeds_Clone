//Import module from dependency
import React from 'react'
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'



//Functional Component

const Single_Card_Component = ({name,price,img,cross_price}) => {
    return (
        <Box w={{ base: '100%' }} position={"relative"} h={"100%"} borderRadius={'12px'} p=' 10px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' bg='#fff'>
            <Center><Image cursor='pointer' maxH={'70%'} maxW={'70%'}  src={img}></Image></Center>
            <Text mt='5px' align={'left'} pl={"5px"} fontWeight={'600'} style={{fontSize:"1rem"}} noOfLines={[1, 2]} textOverflow={'ellipsis'}>{name}</Text>
            <Flex mt='8px' alignItems={'flex-end'}>
                <Text fontWeight={'500'} mr='5px'ml={"5px"} color='#ef4281' style={{fontSize:"0.9rem"}}>₹ {parseFloat(price).toFixed(2)}</Text>
                <Text color='gray' fontWeight={'600'} style={{fontSize:"0.8rem"}} textDecoration={'line-through'}>₹ {parseFloat(cross_price).toFixed(2)}</Text>
            </Flex>
            <Text m='5px 0' color='#60a723' align={"left"} pl={"5px"} fontSize='15px' fontWeight={'500'}>UPTO 25% off</Text>
            <Center><Button style={{position:"absolute",bottom:"12px"}} h='35px' borderRadius={'3px'} bg='#24aeb1' color='#fff' _hover={{ bg: '#24aeb1' }} fontSize='14px' w='98%' m={'auto'}>ADD TO CART</Button></Center>
        </Box>
    )
}

export default Single_Card_Component