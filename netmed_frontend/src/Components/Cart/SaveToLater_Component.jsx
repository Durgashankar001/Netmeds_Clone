import React from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const SaveToLater_Component = ({saveLaterData}) => {
    return (
        <Box bg="#fff" mt={"1rem"} p='0 15px 15px' borderRadius={'7px'}>
            <Text color='#151B3999' as='b' fontSize={'15px'} letterSpacing='1px' style={{ marginBottom: "8px" }}>SAVED FOR LATER</Text>
            {
                saveLaterData  !== 0 ?
                    <Box>
                        {
                            saveLaterData.map(el => (
                                <Box key={el.id} display={{ base: 'block', lg: 'flex' }} borderBottom='1px solid #dddde0' p='15px' gap='10px'>
                                    <Box>
                                        <Image w='120px' h={{ base: '100px', lg: '100%' }} src={el.img}></Image>
                                    </Box>
                                    <Box w='100%' >
                                        <Box w='100%'>
                                            <Box display={{ base: 'block', lg: 'flex' }} justifyContent='space-between'>
                                                <Box>
                                                    <Text fontWeight={'600'}>{el.title}</Text>
                                                </Box>
                                                <Box display={{ base: 'block', md: 'flex-column' }} >
                                                    <Text fontWeight={'600'} color='#ef4281'>Rs.{parseFloat(el.price).toFixed(2)}</Text>
                                                    {el.dis_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs.{parseFloat(el.dis_price).toFixed(2)}</Text>}
                                                </Box>
                                            </Box>
                                            <Text fontSize={'12px'} color='#151B3999'>QTY: {el.quantity ? el.quantity : 1}</Text>
                                            <Text fontSize={'12px'} style={{fontStyle:"italic"}} color='#151B3999'>Mfr: {el.man}</Text>
                                            <Flex mt='20px'>
                                                <Button bg='#e7e8eb' mr='10px' borderRadius={'3px'} fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'} >REMOVE</Button>
                                                <Button bg='#24aeb1' color='#fff' borderRadius={'3px'} fontSize={'12px'} size='sm' _hover={'none'} letterSpacing={'1px'}>ADD TO CART</Button>
                                            </Flex>
                                        </Box>

                                    </Box>
                                </Box>
                            ))
                        }
                    </Box> :
                    <Box><Text mt='5px' fontSize={'12px'} color='#151B3999'>No items in save for later</Text></Box>
            }
        </Box>
    )
}

export default SaveToLater_Component