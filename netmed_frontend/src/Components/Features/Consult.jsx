import { Box, Button, Image } from "@chakra-ui/react";
import styles from "./features.module.css"
let x = "https://www.netmeds.com/assets/glorymsite/images/icons/new_icons/online_consultation.svg";
export default function Consult() {
    return (<>
        <hr />
        <br />
        <Box className={styles.consult}>
            <Box>
                <Image src={x} alt="consult"/>
            </Box>
            <Box>
                <Box>
                Easy Online Doctor Consultations
                </Box>
                <Box mt="2px" fontSize={12} fontWeight={400}>Skip the queue! Speak with a doctor right now</Box>
                <Box fontSize={12} fontWeight={400}>More than 25+ specialities to choose from, starting at just ₹149</Box>
            </Box>
            <Box>
                <Button size="md" color={"white"} backgroundColor="#32AEB1">Learn More</Button>
            </Box>
        </Box>
        <br />
        <hr />
    </>)
}