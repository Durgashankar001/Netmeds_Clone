import {Box,Image} from "@chakra-ui/react";
import styles from "./swipers.module.css";
export default function CardTwo({img,title,off}){
    return (<>
        <Box className={styles.CardTwo}>
            <Image src={img} alt={title}/>
            <Box>{title}</Box>
            <br />
            <Box color={"green"} fontSize={12} fontWeight={600}>{off?off:null}</Box>
        </Box>
    </>)
}