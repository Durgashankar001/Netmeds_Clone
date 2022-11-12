import {Box, Button, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./swipers.module.css";

export default function Card({name,price,img,off}){
    const nav = useNavigate();
    return (<>
        <Box className={styles.Card}>
            <Box p="1rem">
                <Image src={img} alt="img" width={"100%"}/>
            </Box>
            <Box style={{maxWidth:"30ch",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>
                {name}
            </Box>
            <Box mt={"5px"} fontSize="13px">
                Rs.{" "}{price}
            </Box>
            <Box color={"green"} fontSize="14px">
                {off}
            </Box>
            <Box mt={"1.2rem"}>
                <Button onClick={()=>nav("/product")} color={"white"} backgroundColor="#32AEB1" width={"100%"} size="sm">See details</Button>
            </Box>
        </Box>
    </>)
}