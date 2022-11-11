import {Box, Button, Image} from "@chakra-ui/react";
import styles from "./swipers.module.css";

export default function Card({name,price,img,off}){
    return (
        <Box className={styles.Card}>
           
                <Image src={img} alt="img" width={"85%"} m="auto" height="150px"/>
           
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
                <Button color={"white"} backgroundColor="#32AEB1" width={"100%"} size="sm">Add to Cart</Button>
            </Box>
        </Box>
    )
}