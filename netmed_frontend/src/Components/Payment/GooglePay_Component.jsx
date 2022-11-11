import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
const GooglePay_Component = () => {
    const [State, setState] = useState(false)
    const handleChange = () => {
        setState(!State)
    }
    return (
        <Box bg={'white'} padding='30px' mb='20px' id='boxshadow' borderRadius={'12px'}>
            <Text fontWeight={'bold'} fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>UPI</Text>
            <Flex justifyContent="space-between" >
                <Flex align='center'>
                    <Image h='30px' mr='15px' src='https://www.netmeds.com/assets/pgicon/googlepaylogo.png' alt='img' />
                    <Text fontSize='14px' cursor={'pointer'} onClick={handleChange}>Google Pay</Text>
                </Flex>
                <Checkbox size='md' as={'circle'} onChange={handleChange} >

                </Checkbox>
            </Flex>
            {State && <Box display={'flex'} justifyContent={'flex-end'} w={'100%'}>

                <Button mt={'20px'} style={{ letterSpacing: "2px" }} pl={"20px"} bg='#3ecacd' color={'white'} _hover={{ backgroundColor: "#3ecacd" }}>PAY RS. 206.35</Button>
            </Box>
            }

            <Box >
            </Box>
        </Box>
    )
}

export default GooglePay_Component