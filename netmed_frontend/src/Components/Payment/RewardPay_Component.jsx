import { Box, Button, Checkbox, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const RewardPay_Component = () => {
    const [state, setState] = useState(false)

    const handleChange = () => {
        setState(!state)
    }
    return (
        <Box bg={'white'} padding='30px' mb='50px' borderRadius={'12px'} >
            <Text fontWeight={'bold'} color='rgba(21,27,57,.6)' fontSize='12px' mb='20px'>REWARD PAY</Text>
            <Flex justifyContent="space-between" >
                <Flex align='center'>
                    <Image h='30px' mr='15px' src='https://www.netmeds.com/msassets/images/icons/TWID.png' alt='img' />
                    <Text fontSize='14px' >Coin</Text>
                </Flex>
                <Checkbox size='md' onChange={handleChange}  >

                </Checkbox>
            </Flex>
            <Text ml='40px' color='rgba(21,27,57,.6)' fontSize='12px'>Pay with Rewards and get cashback upto Rs 1000</Text>
            {state && <Box display={'flex'} justifyContent={'flex-end'} w={'100%'}>

                <Button mt={'20px'} style={{ letterSpacing: "2px" }} pl={"20px"} bg='#3ecacd' color={'white'}>PAY RS. 206.35</Button>
            </Box>
            }

        </Box>
    )
}

export default RewardPay_Component