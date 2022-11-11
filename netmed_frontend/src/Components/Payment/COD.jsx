import { Box, Button, Checkbox, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const COD = () => {
    const [state, setState] = useState(false)

    const handleChange = () => {
        setState(!state)
    }
    return (
        <Box bg={'white'} padding='30px' mb='20px' borderRadius={'12px'} >
            <Text fontWeight={'bold'} color='rgba(21,27,57,.6)' fontSize='12px' mb='20px'></Text>
            <Flex justifyContent="space-between" >
                <Flex align='center'>
                    <Image h='30px' mr='15px' src='https://www.netmeds.com/assets/pgicon/COD.png' alt='img' />
                    <Text fontSize='14px' >Cash On Delivery</Text>
                </Flex>
                <Checkbox size='md' onChange={handleChange}  >

                </Checkbox>
            </Flex>
            <Text ml='40px' color='rgba(21,27,57,.6)' fontSize='12px'>Hear us out! Pay online and earn 50% NMS SuperCash (up to Rs. 3000) on all prepaid orders</Text>
            {state && <Box display={'flex'} justifyContent={'flex-end'} w={'100%'}>

                <Button mt={'20px'} style={{ letterSpacing: "2px" }} pl={"20px"} bg='#3ecacd' color={'white'}>PAY RS. 206.35</Button>
            </Box>
            }
        </Box>
    )
}

export default COD