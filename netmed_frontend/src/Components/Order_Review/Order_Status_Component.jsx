import { CheckCircleIcon, RepeatIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Order_Status_Component = ({ color1,color2 }) => {
    return (
        <Box bg='#151b39' w={{ base: '90%', md: 'auto', lg: '80%' }} p={4} color='white' borderRadius="10px" h="fit-content" m={{ base: "20px", lg: "auto" }}>
            <Flex justifyContent="space-between">
                <Text fontSize="22px">Order Review</Text>


                <Box h="fit-content" display='flex' justifyContent='space-around' w="300px" position={"relative"}>

                    <Box align='center'>
                        <SpinnerIcon m='5px' />
                        <Text fontSize='10px'>Your cart</Text>

                    </Box>
                    <div style={{ width: "22%", height: "2px", backgroundColor: `${color1}`, position: "absolute", left: "18%", top: '30%' }}>

                    </div>
                    <Box align='center'>
                        <RepeatIcon m='5px' />
                        <Text fontSize='10px'>Order review</Text>
                    </Box>
                    <div style={{ width: "28%", height: "1px", backgroundColor: `${color2}`, position: "absolute", left: "48%", top: '30%' }}></div>

                    <Box align='center'>
                        <CheckCircleIcon m='5px' />
                        <Text fontSize='10px'>Payment Details </Text>
                    </Box>

                </Box>

            </Flex>
        </Box>
    )
}

export default Order_Status_Component