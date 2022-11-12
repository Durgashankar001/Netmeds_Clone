import React, { useState } from 'react'
import {
    useDisclosure, Button,
    Drawer, Stack, Box,
    Input, Select, Textarea,
    DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader, DrawerBody,
    InputGroup, InputLeftAddon, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const SideBar_Address_Component = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [adress, SetAddress] = useState({ FirstName: "", LastName: "", Address: "", Landmark: "", Phonenumber: "", City: "", State: "", PinCode: "" })
    const { FirstName, LastName, Address, Landmark, Phonenumber, City, State, PinCode } = adress;
    const isError = Input === ''
    const handelChange = (e) => {

    }
    return (
        <FormControl isInvalid={isError}>

            {/* <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
                Change Address
            </Button> */}
            <Box fontSize={"14px"} mr={'10px'} fontWeight={"bold"} display={"flex"} cursor={"pointer"} alignItems={"center"} onClick={onOpen}> <AddIcon style={{marginRight:"5px"}}/> ADD NEW ADDRESS</Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                className="drawer"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        ADD ADDRESS
                    </DrawerHeader>

                    <DrawerBody className="drawer">
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'></FormLabel>
                                <Input
                                outline={"none"}
                                border={"none"}
                                borderRadius={"0px"}
                                pl={"3px"}
                                _focusVisible={"none"}
                                borderBottom={"1px solid grey"}
                                placeholder='Pin Code'
                                type="number"
                                    name="PinCode" value={PinCode} onChange={handelChange}
                                    required
                                />
                            </Box>


                            <Flex>
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"} htmlSize={5} width='auto' type="text" placeholder='City' name="City" mr={"10px"} value={City} required onChange={handelChange} />
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"} htmlSize={5} width='auto' type="text" placeholder='State' name="State" value={State} required onChange={handelChange} />
                            </Flex>
                            <Box>
                                <FormLabel htmlFor='username'>First Name</FormLabel>
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"}
                                    id='FirstName'
                                    placeholder='First Name'
                                    type="text"
                                    name="FirstName" 
                                    required
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='username'>Last Name</FormLabel>
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"}
                                    id='LastName'
                                    placeholder='Last Name'
                                    type="text"
                                    name="LastName" 
                                    required
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='username'></FormLabel>
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"}
                                    id='Address'
                                    placeholder='Address'
                                    type="text"
                                    name="Address" value={Address} onChange={handelChange}
                                    required
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='username'></FormLabel>
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"3px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"}
                                    id='Landmark'
                                    placeholder='Landmark'
                                    type="text"
                                    name="Landmark" value={Landmark} onChange={handelChange}
                                    required
                                />
                            </Box>

                            <InputGroup>
                                <InputLeftAddon variant='flushed' children='+91' />
                                <Input
                                  outline={"none"}
                                  border={"none"}
                                  borderRadius={"0px"}
                                  pl={"10px"}
                                  _focusVisible={"none"}
                                  borderBottom={"1px solid grey"} required type="number" placeholder='phone number' name="Phonenumber" value={5021356014} onChange={handelChange} />
                            </InputGroup>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px'>
                        <Button colorScheme='green' width='100%'>Save Address</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </FormControl>
    )
}

export default SideBar_Address_Component