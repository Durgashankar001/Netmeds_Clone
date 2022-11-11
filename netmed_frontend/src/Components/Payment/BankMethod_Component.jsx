import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
const BankMethod_Component = () => {
    return (
        <Box bg={'white'} padding='30px' mb='20px' borderRadius={'12px'} >
            <Text fontSize='12px' mb='5px'>NET BANKING</Text>

            <Flex justify='space-around' mt='20px' mb='10px'>
                <Image cursor={'pointer'} w='42px' h='42px' src="https://www.netmeds.com/assets/pgicon/axis.png"alt="Product Img" />
                <Image cursor={'pointer'}  w='42px' h='42px' src="https://www.netmeds.com/assets/pgicon/Hdfc.png" alt="Product Img"/>
                <Image cursor={'pointer'}  w='42px' h='42px' src="https://www.netmeds.com/assets/pgicon/icici.png"alt="Product Img"/>
                <Image cursor={'pointer'}  w='42px' h='42px' src="https://www.netmeds.com/assets/pgicon/kotak.png" alt="Product Img"/>
                <Image cursor={'pointer'}  w='42px' h='42px' src="https://www.netmeds.com/assets/pgicon/Sbi.png" alt="Product Img"/>
            </Flex>
            <Box>
                <Select placeholder='More Banks' w="40%" _focusVisible={'none'} mt={'15px'} cursor={'pointer'}>
                    <option value='option1'>Axis Bank</option>
                    <option value='option2'>HDFC Bank</option>
                    <option value='option3'>ICICI Bank</option>
                    <option value='option3'>State Bank Of India</option>
                    <option value='option3'>PNB Bank</option>
                </Select>

            </Box>
        </Box>
    )
}

export default BankMethod_Component