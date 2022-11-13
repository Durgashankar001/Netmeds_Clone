import { Box ,Image} from "@chakra-ui/react";
import styles from "./swipers.module.css"
import {useNavigate} from "react-router-dom";;

let a = "https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg";
let b = "https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg";
let c = "https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg";
export default function Static() {
    const nav = useNavigate();
    return (
        <Box className={styles.staticOne} onClick={()=>nav("/product")}>
            <Box className={styles.staticBoxOne}>
                <Box><Image src={a} alt="a"/></Box>
                <Box>
                    <Box>Order Medicine</Box>
                    <Box>25% off</Box>
                </Box>
            </Box>
            <Box className={styles.staticBoxOne}>
                <Box><Image src={b} alt="b"/></Box>
                <Box>
                    <Box>Beauty</Box>
                    <Box>40% off</Box>
                </Box>
            </Box>
            <Box className={styles.staticBoxOne}>
                <Box><Image src={c} alt="c"/></Box>
                <Box>
                    <Box>Wellness</Box>
                    <Box>80% off</Box>
                </Box>
            </Box>
        </Box>
    )
}