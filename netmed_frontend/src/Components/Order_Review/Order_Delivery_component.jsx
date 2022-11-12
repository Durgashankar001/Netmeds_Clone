import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import SideBar_Address_Component from './SideBar_Address_Component';

const Order_Delivery_component = () => {
    return (
        <Box padding='10px' mb='15px' id='boxshadow' bg={"white"} borderRadius={"12px"}>
            <Flex justifyContent="space-between" >
                <Text fontSize='12px' color='rgba(21,27,57,.6)' mb='10px' fontWeight={"bold"}>DELIVERY ADDRESS</Text>
                <Text fontSize='16px' color='#ef4281' ><SideBar_Address_Component /></Text>
            </Flex>

            <Box >
                <Flex justifyContent={'space-between'}>
                    <Text color='#151b39' mb='10px' fontSize='16px' fontWeight='bold'>{"Office Address"}</Text>
                    <Checkbox colorScheme={'green'}></Checkbox>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Text color='#151b39' mb='10px' fontSize='16px' fontWeight='bold'>{"Home Address"}</Text>
                    <Checkbox colorScheme={'green'}></Checkbox>
                </Flex>


                {/* <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>
                    {"Simulia ," + " " + "Balasore"}

                </Text>

                <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>

                    {"Bhubaneswar ," + "   " + "Odisha ," + "   " + 756126 + " "}

                </Text>
                <Text lineHeight='40px' w={{ base: '100%', md: '100%', lg: '30%' }} fontSize='14px'>

                    {6372585440 + "   "}

                </Text> */}
            </Box>
        </Box>
    )
}

export default Order_Delivery_component