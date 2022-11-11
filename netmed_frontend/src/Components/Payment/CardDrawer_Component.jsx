import React from 'react'
import {
    useDisclosure, Button,
    Drawer, Stack, Box, FormLabel,
    Input, Select, Textarea,
    DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader, DrawerBody, Checkbox,
    InputGroup, InputLeftAddon, Flex, Text, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, CloseButton, FormControl
} from '@chakra-ui/react'

const CardDrawer_Component = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <FormControl isRequired>

            <Text w="40%" color={'teal'} cursor={'pointer'} letterSpacing={'2px'} textTransform={"uppercase"} fontWeight={'bold'} onClick={onOpen}>
                Add New Card
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        ENTER CARD DETAILS
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Card Number</FormLabel>
                                <Input
                                    outline={"none"}
                                    _focusVisible={"none"}
                                    htmlSize={5} width='100%' type="text"
                                    m={'auto'}
                                    id="message"
                                    name="message"
                                />

                            </Box>


                            <Flex>
                                <Input outline={"none"}
                                    border={"none"}
                                    borderRadius={"0px"}
                                    pl={"3px"}
                                    _focusVisible={"none"}
                                    mr={'10px'}
                                    borderBottom={"1px solid grey"} htmlSize={5} width='auto' type="number" placeholder='MM' required />
                                <Input outline={"none"}
                                    border={"none"}
                                    borderRadius={"0px"}
                                    pl={"3px"}
                                    _focusVisible={"none"}
                                    mr={'10px'}
                                    borderBottom={"1px solid grey"} htmlSize={5} width='auto' type="number" placeholder='YY' required />
                                <Input outline={"none"}
                                    border={"none"}
                                    borderRadius={"0px"}
                                    pl={"3px"}
                                    _focusVisible={"none"}
                                    borderBottom={"1px solid grey"} htmlSize={5} width='auto' type="number" placeholder='CVV' required />
                            </Flex>




                            <Box>
                                <FormLabel htmlFor='username'>Name On Card</FormLabel>
                                <Input
                                    outline={"none"}
                                    _focusVisible={"none"}
                                    id='FirstName'
                                    placeholder='Name on Card'
                                    type="text"
                                />
                            </Box>

                            <Box>
                                <Flex align='center'>
                                    <Checkbox size='md' required > </Checkbox>
                                    <Text fontSize='14px' m='5px'>Save this card for future payments</Text>
                                </Flex>
                            </Box>


                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button colorScheme='twitter' width='100%'>Pay</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </FormControl>
    )
}

export default CardDrawer_Component