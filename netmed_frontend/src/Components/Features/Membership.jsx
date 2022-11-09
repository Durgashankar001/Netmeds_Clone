import { Box ,Image } from "@chakra-ui/react"
import styles from "./features.module.css";

let x = "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg";
export default function Membership(){
    return (<>
        <hr/>
        <Box className={styles.membership}>
            <Box>
                <Image src={x} alt="star"/>
            </Box>
            <Box>
                <Box>Netmeds First Membership</Box>
                <Box>
                    <ul>
                        <li>Get special discounts and offers on Netmeds services.</li>
                        <li>Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!</li>
                    </ul>
                </Box>
            </Box>
            <Box>
                <Box>Starting at Rs. 299</Box>
                <Box>
                    <Button size="md" color={"white"} backgroundColor="#32AEB1">
                        Explore plans
                    </Button>
                </Box>
            </Box>
        </Box>   
        <hr/> 
    </>)
}