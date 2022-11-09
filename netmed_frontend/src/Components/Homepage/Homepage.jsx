import { Box } from "@chakra-ui/react";
import styles from "./home.module.css"
//import one from "../../images-HP/kareena_nm.jpg";
import SwiperOne from "../Swipers-HP/SwiperOne";
import Static from "../Swipers-HP/Static";
import TopHeader from "../Swipers-HP/TopHeader";
import SwiperTwo from "../Swipers-HP/SwiperTwo";
import SwiperThree from "../Swipers-HP/SwiperThree";
import StaticTwo from "../Swipers-HP/StaticTwo";
import SwiperFour from "../Swipers-HP/SwiperFour";

export default function Homepage() {
    return (<Box background={"whitesmoke"}>
        <Box className={styles.homeMain}>
            <Box>Medicine</Box>
            <Box>Wellness</Box>
            <Box>Lab tests</Box>
            <Box>Beauty</Box>
            <Box>Health Corner</Box>
        </Box>
        <Box className={styles.category}>
            <Box>COVID essentials</Box>
            <Box>Diabetes</Box>
            <Box>EyeWear</Box>
            <Box>Ayush</Box>
            <Box>Ayurvedic</Box>
            <Box>Homeopathy</Box>
            <Box>Fitness</Box>
            <Box>Mom & Baby</Box>
            <Box>Devices</Box>
            <Box>Surgicals</Box>
            <Box>Sexual Wellness</Box>
            <Box>Treatments</Box>
        </Box>
        {/* swiper one */}
        <SwiperOne />
        {/* static one */}
        <Static />
        <br />
        <TopHeader color="black" text="Trending Today" />
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperTwo />
        </Box>
        <br />
        <Box className={styles.limited} mb={-110}>
            <br />
            <TopHeader color="white" text="Limited Time Deals" />
            <Box ml="1.5rem" fontSize={12} color="white">1 day remaining</Box>
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperThree />
        </Box>
        <br />
        <Box className={styles.limited} mb={-110}>
            <br />
            <TopHeader color="white" text="Axios Ayurveda Upto 30% off" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <Box pl="2rem" pr="2rem">
            <SwiperThree />
        </Box>
        <br />
        <Box className={styles.limited} mb={-110}>
            <br />
            <TopHeader color="white" text="Brand Days - Cetaphil Upto 30% off" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <Box pl="2rem" pr="2rem">
            <SwiperThree />
        </Box>
        <br />
        <TopHeader color="black" text="Shop by Category" />
        <br />
        <StaticTwo />
        <br />
        <TopHeader color="black" text="New on Netmeds" />
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperTwo />
        </Box>
        <br />
        <TopHeader color={"black"} text="Top Brands" />
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperFour />
        </Box>


    </Box>)
}