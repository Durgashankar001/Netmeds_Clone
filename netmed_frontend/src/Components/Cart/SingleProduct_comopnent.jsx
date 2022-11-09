import React from 'react'
import { Box, Button, Image, Select, Text } from '@chakra-ui/react';

const SingleProduct_comopnent = ({ myCartData,date }) => {
    return (
        <Box>
            {
                myCartData.map(el => (
                    <Box key={el.id} borderBottom='1px solid #dddde0' p='15px 0'>
                        <Box display={{ base: 'block', lg: 'flex' }}>
                            <Box><Image style={{ objectFit: "cover", margin: "auto", display: 'block' }} w={{ base: '120px', lg: '40px' }} h={{ base: '100px', lg: '40px' }} src={el.img}></Image></Box>
                            <Box ml='20px'>
                                <Text>{el.title}</Text>
                                <Text fontSize={'12px'} color='#151B3999' as='i'>Mfr: {el.man}</Text>
                            </Box>
                        </Box>
                        <Box ml={{ base: '20px', lg: '60px' }} mt='10px' display={'flex'} justifyContent='space-between' position={'relative' }>
                            <Box display={{ base: 'block', md: 'flex' }} alignItems={'flex-end'}>
                                <Text fontWeight={'600'} color='#ef4281' mr='5px'>Rs. {parseFloat(el.price).toFixed(2)}</Text>
                                {
                                    el.dis_price && <Text color='#151B3999' fontWeight={'400'} textDecoration={'line-through'} fontSize={'12px'}>Rs. {parseFloat(el.dis_price).toFixed(2)}</Text>
                                }
                            </Box>
                            <Box>
                                <Box>
                                    <Select p={0} style={{ border: "1px solid rgba(21,27,57,.2)", letterSpacing: "2px", fontSize: "13px", fontWeight: "500", outline: "none" }} placeholder={el.quantity ? 'QTY :' + el.quantity : 'QTY :' + 1}>
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
                                                <option key={el} value={el}>{el}</option>
                                            ))
                                        }
                                    </Select>

                                </Box>

                            </Box>
                        </Box>
                        <Box display={{ base: 'block', lg: 'flex' }} ml={{ base: '20px', lg: '60px' }} mt='20px'>
                            <Box borderRight='1px solid #dddde0' display={'grid'} alignContent='center' w='100%' mr='15px'>
                                <Text fontSize={'12px'}>Delivery between <span style={{ fontSize: '13px' }}>{date.toString().substring(0, 8)}{date.toString().substring(8, 10)}-{date.toString().substring(0, 8)}{+date.toString().substring(8, 10) + 1}</span></Text>
                            </Box>
                            <Box w={{ base: '100%', lg: '70%' }} display={'flex'} justifyContent='space-between' gap='10px' mt={{ base: '10px', lg: '0' }}>
                                <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover={'none'} letterSpacing={'1px'}>REMOVE</Button>
                                <Button bg='#F6F6F7' fontSize={'12px'} color='#151B3999' size='sm' _hover='none' letterSpacing={'1px'}>SAVE FOR LATER</Button>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}

export default SingleProduct_comopnent