import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

const Vouchers_Component = () => {
    const [state, setState] = useState(false)

    const handleChange = (e) => {
        setState(!state)
    }

    return (
        <Box bg={'white'} padding='30px' mb='20px' id='boxshadow' borderRadius={'12px'}>
            <Flex align='center'>
                <Checkbox onChange={handleChange} size='md'  > </Checkbox>
                <Text fontSize='14px' m='5px'>VOUCHERS</Text>
            </Flex>
            {state && <hr style={{ marginTop: "10px" }} />}
            {state &&
                <Flex>

                    <Input _focusVisible={"none"} mt={"10px"} mr={'50px'} placeholder='Enter Your Voucher' />
                    <Button mt={"10px"} bg='#3ecacd' color={'white'} _hover={{backgroundColor:"#3ecacd"}}>APPLY</Button>
                </Flex>
            }
        </Box>
    )
}

export default Vouchers_Component