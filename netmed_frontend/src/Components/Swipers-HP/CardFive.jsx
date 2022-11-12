import { Box ,Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./swipers.module.css";

export default function CardFive({img,title,id}){
    const nav = useNavigate();
    return (<>
        <Box className={styles.CardFive} onClick={()=>nav("/product")}>
            <Box>
                <Image src={img} alt={id} borderTopLeftRadius="10px" borderTopRightRadius="10px"/>
            </Box>
            <Box p="10px" mb="15px">
                {title}
            </Box>
        </Box>
    </>)
}