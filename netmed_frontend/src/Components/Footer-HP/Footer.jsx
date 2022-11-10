import { Box, Input ,Image} from "@chakra-ui/react";
import styles from "./about.module.css";


let one = ["About Netmeds","Customers Speak","In the News","Career","Terms and Conditions","Privacy Policy","Fees and Payments Policy","Shipping and Delivery Policy","Return, Refund and Cancellation Policy","Contact"];
let two = ["Browse by A-Z","Browse by Manufacturers","Health Articles","Offers / Coupons","FAQs"];
let three = ["Patients Alike","Facebook","Twitter","LinkedIn","Youtube","Refer & Earn"]
let a = "https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png";
let b = "https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png";
let c = "https://play.google.com/store/apps/details?id=com.NetmedsMarketplace.Netmeds&hl=en&pli=1";
let d = "https://apps.apple.com/in/app/netmeds-india-ki-pharmacy/id1011070011";
export default function Footer(){
    
    return (<>
        <Box background={"white"} p="1rem">
            <Box pl="4rem" pr={"4rem"} color="gray">
            Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.
            </Box>
            <Box className={styles.Stack}>
                <Box className={styles.StackOne}>
                    <Box>COMPANY</Box>
                    {one?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                    <Box>SHOPPING</Box>
                    {two?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                    <Box>SOCIAL</Box>
                    {three?.map((el,i)=>{
                        return (<Box key={i}>{el}</Box>)
                    })}
                </Box>
                <Box className={styles.StackOne}>
                    <Box>SUBSCIBE TO OUR NEWSLETTER</Box>
                    <Box>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</Box>
                    <Input mb="10px" fontSize={14} variant={"flushed"} placeholder="Enter you email address"/>
                    <Box display={"flex"}  gap={5}>
                        <a href={c} target="blank"><Image w={140} h={10} src={a} _hover={{cursor:"pointer"}}/></a>
                        <a href={d} target="blank"><Image w={140} h={10} src={b} _hover={{cursor:"pointer"}}/></a>
                    </Box>
                </Box>
            </Box>
            <hr />
            <Box className={styles.footerBottom}>
                <Box>Medicine</Box>
                <Box>Wellness</Box>
                <Box>Lab Tests</Box>
                <Box>Beauty</Box>
                <Box>Copyright 2022. All Rights Reserved</Box>
            </Box>
        </Box>
    </>)
}