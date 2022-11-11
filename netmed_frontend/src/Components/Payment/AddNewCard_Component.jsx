import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CardDrawer_Component from './CardDrawer_Component'

const AddNewCard_Component = () => {
    return (
        <Box bg={'white'} padding='30px' mb='20px' borderRadius={'12px'}>
            <Text fontWeight={'bold'} fontSize='12px' color='rgba(21,27,57,.6)' mb='10px'>CREDIT & DEBIT CARDS</Text>
            <hr style={{marginTop:"1rem",marginBottom:"1rem"}} />
            <Box align="center"><CardDrawer_Component /></Box>
        </Box>
    )
}

export default AddNewCard_Component