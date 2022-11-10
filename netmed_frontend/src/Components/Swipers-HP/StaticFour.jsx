import {Box} from "@chakra-ui/react";
import CardFour from "./CardFour";
import styles from "./swipers.module.css";


export default function StaticFour({arr}){
    return (<>
        <Box className={styles.StaticFour}>
            {arr?.map((el,i)=>{
                return (<>
                    <CardFour key={i} img={el.img} title={el.title}/>
                </>)
            })}
        </Box>
    </>)
}