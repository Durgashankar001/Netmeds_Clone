import { Box, Input, Image, Select,Text, TagLeftIcon } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
export default function Navbar() {
    return (<>
        <Box className={styles.main}>
            <Box className={styles.imgBox}>
                <Image alt="logo" />
            </Box>
            <Box className={styles.inpGroup}>
                <Box>
                    <Box>Delivered to</Box>
                    <Select className={styles.selectme} placeholder='Select option' variant={"unstyled"} size="xs" w="110px">
                        <option defaultValue={"110002"}>110002</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Box>|</Box>
                    <Input ml={2} variant={"unstyled"} placeholder="Search for medicine and wellness products.." size={"xs"}/>
                </Box>
            </Box>
            <Box className={styles.cartBox}>
                <Box>
                    <TagLeftIcon w={6} h={6} as={AiOutlineShoppingCart}/>
                    <span>Cart</span>
                    <span className={styles.itemCount}>0</span>
                </Box>
                <Box>
                    <TagLeftIcon w={6} h={6} as={CgProfile}/>
                    Sign in/Sign
                </Box>
            </Box>
        </Box>
    </>)
}