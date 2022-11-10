import {Box,Image} from "@chakra-ui/react";
import styles from "./swipers.module.css";
export default function CardThree({img,title,off}){
    return (<>
        <Box className={styles.CardThree}>
            
            <Image src={img} alt={title}/>
            <br />
            <br />
            <Box>{title}</Box>
            <br />
            <Box color={"green"} fontSize={12} fontWeight={600}>{off?off:null}</Box>
            
        </Box>
    </>)
}