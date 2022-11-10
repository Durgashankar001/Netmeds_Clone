import { Box ,Image} from "@chakra-ui/react";
import styles from "./swipers.module.css";

export default function CardFive({img,title,id}){
    return (<>
        <Box className={styles.CardFive}>
            <Box>
                <Image src={img} alt={id} borderTopLeftRadius="10px" borderTopRightRadius="10px"/>
            </Box>
            <Box p="10px" mb="15px">
                {title}
            </Box>
        </Box>
    </>)
}