import CardTwo from "./CardTwo"
import {Box} from '@chakra-ui/react'
import styles from "./swipers.module.css";


export let exploB = [
    {
        img:"https://www.netmeds.com/images/category/3505/thumb/facial_kits_1.jpg",
        title:"Facial kits",
        id:1
    },
    {
        img:"https://www.netmeds.com/images/category/v1/560/thumb/lip_care_2.jpg",
        title:"Lip Care",
        id:2
    },
    {
        img:"https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg",
        title:"Body Care",
        id:3
    },
    {
        img:"https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg",
        title:"Hair Care",
        id:4
    },
]

export default function StaticThree({arr}){
    return (<>
        <Box className={styles.StaticThree} gap="10px">
            {arr?.map((el,i)=>{
                return (<>
                    <CardTwo key={i} {...el}/>
                </>)
            })}
        </Box>
    </>)
}