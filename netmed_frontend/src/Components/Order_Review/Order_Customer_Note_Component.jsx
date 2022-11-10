import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

const Order_Customer_Note_Component = () => {
    return (
        <Box w={"100%"} bg={"white"} borderRadius={"10px"}  mb='60px' >
        <Box padding='10px' id='boxshadow' >
            <Text color='rgba(21,27,57,.6)' fontSize='14px' mb='20px' fontWeight={"bold"}>Customer Notes</Text>
            <textarea style={{ padding: '5px',border:"1px solid grey",width:"100%",height:"100%",borderRadius:"12px" }} rows="5" name="paragraph_text"></textarea>
        </Box>
        </Box>
    )
}

export default Order_Customer_Note_Component