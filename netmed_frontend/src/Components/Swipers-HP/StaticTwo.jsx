import {Box} from "@chakra-ui/react";
import CardTwo from "./CardTwo"
import styles from "./swipers.module.css";

let one = {
    img:"https://www.netmeds.com/images/category/3107/thumb/dressing_1.jpg",
    title:"Dressing"
}
let two = {
    img:"https://www.netmeds.com/images/category/501/thumb/family_nutrition_1.jpg",
    title:"Family & Nutritions"
}
let three = {
    img:"https://www.netmeds.com/images/category/3141/thumb/respiratory_supplies_1.jpg",
    title:"Respiratory supplies"
}

let four = {
    img:"https://www.netmeds.com/images/category/3758/thumb/lotions_creams_0.jpg",
    title:"Lotions & Creams"
}
let five = {
    img:"https://www.netmeds.com/images/category/v1/491/thumb/homeopathy_2.jpg",
    title:"Homeopathy"
}

let arr = [one,two,three,four,five];
export default function StaticTwo(){
    return (<>
        <Box className={styles.StaticTwo}>
            {arr?.map((el,i)=>{
                return (<>
                    <CardTwo key={i} img={el.img} title={el.title}/>
                </>)
            })}
        </Box>
    </>)
}