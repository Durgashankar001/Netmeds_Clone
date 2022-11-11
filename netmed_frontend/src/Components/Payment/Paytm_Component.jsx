import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Paytm_Component = () => {
    const navigate = useNavigate()
    return (
        <Box cursor={'pointer'} bg={'white'} padding='30px' mb='20px' borderRadius={'12px'} >
            <Text fontWeight={'bold'} color='rgba(21,27,57,.6)' fontSize='12px' mb='20px'>PREFERED PAYMENT</Text>
            <Flex justifyContent="space-between" >
                <Flex align='center'>
                    <Image h='30px' mr='15px' src='https://www.netmeds.com/assets/pgicon/Paytm_lo.png' alt='img' />
                    <Text fontSize='14px' >Paytm</Text>
                </Flex>
                <Text color='#ef4281' fontSize='12px' fontWeight={'bold'} cursor={'pointer'} onClick={()=>window.location.fref=('https://paytm.com')}>Link</Text>
            </Flex>
        </Box>
    )
}

export default Paytm_Component