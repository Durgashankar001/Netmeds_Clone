import {Box,Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./swipers.module.css";
export default function CardThree({img,title,off}){
    const nav = useNavigate();
    return (<>
        <Box className={styles.CardThree} onClick={()=>nav("/product")}>
            
            <Image src={img} alt={title}/>
            <br />
            <br />
            <Box>{title}</Box>
            <br />
            <Box color={"green"} fontSize={12} fontWeight={600}>{off?off:null}</Box>
            
        </Box>
    </>)
}