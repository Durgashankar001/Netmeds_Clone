import { Box, Image, Button } from "@chakra-ui/react";
import styles from "./features.module.css";

let x = "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg";
export default function MedRefill() {
    return (<>
        <Box className={styles.membership}>
            <Box>
                <Image src={x} alt="calendar" w={20} m="auto" />
            </Box>
            <Box>
                <Box>Get medicine refill every month</Box>
                <Box mt={2} ml={"3rem"} fontSize="13px" fontWeight={500}>
                    <ul>
                        <li>Subscribe and schedule next deliveries</li>
                        <li>Subscribe for 12 months and get the last month free. *T&C Apply</li>
                    </ul>
                </Box>
            </Box>
            <Box mt={-10} >
                <Button ml="8rem" size="md" color={"white"} backgroundColor="#32AEB1">
                    Subscribe
                </Button>
            </Box>
        </Box>
        <hr />
    </>)
}