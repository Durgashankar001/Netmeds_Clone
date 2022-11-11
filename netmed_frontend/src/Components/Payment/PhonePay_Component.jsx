import { Box, Button, Checkbox, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const PhonePay_Component = () => {
    const [state, setState] = useState(false)

    const handleChange = () => {
        setState(!state)
    }
    return (
        <Box bg={'white'} padding='30px' mb='20px' borderRadius={'12px'} >
            <Text fontWeight={'bold'} color='rgba(21,27,57,.6)' fontSize='12px' mb='20px'>OTHER PAYMENTS</Text>
            <Flex justifyContent="space-between" >
                <Flex align='center'>
                    <Image h='30px' mr='15px' src='https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png' alt='img' />
                    <Text fontSize='14px' >PhonePay</Text>
                </Flex>
                <Checkbox size='md' onChange={handleChange}  >
                </Checkbox>
            </Flex>
            {state && <Box display={'flex'} justifyContent={'flex-end'} w={'100%'}>

                <Button mt={'20px'} style={{ letterSpacing: "2px" }} pl={"20px"} bg='#3ecacd' color={'white'}>PAY RS. 206.35</Button>
            </Box>
            }
        </Box>
    )
}

export default PhonePay_Component