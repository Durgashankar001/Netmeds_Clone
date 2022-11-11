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
import Membership from "../Features/Membership";
import StaticThree, { exploB } from "../Swipers-HP/StaticThree";
import Consult from "../Features/Consult";
import { topBrands ,bestB, personalC, mensGroom, healthCon, healthLib, limitedDeals, brandCetaphil, axiomAyurveda} from "../Swipers-HP/SwiperArr";
import { shopByCate } from "../Swipers-HP/StaticTwo";
import StaticFour from "../Swipers-HP/StaticFour";
import MedRefill from "../Features/MedRefill";
import SwiperFive from "../Swipers-HP/SwiperFive";
import About from "../Footer-HP/About";
import Footer from "../Footer-HP/Footer";

export default function Homepage() {
    return (<Box background={"whitesmoke"} w="100%">
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
        <br />
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
        <Box className={styles.limited} mb={-100}>
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
            <SwiperThree arr={limitedDeals}/>
        </Box>
        <br />
        <Box className={styles.limited} mb={-90}>
            <br />
            <TopHeader color="white" text="Axios Ayurveda Upto 30% off" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <Box pl="2rem" pr="2rem">
            <SwiperThree arr={axiomAyurveda}/>
        </Box>
        <br />
        <Box className={styles.limited} mb={-90}>
            <br />
            <TopHeader color="white" text="Brand Days - Cetaphil Upto 30% off" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <Box pl="2rem" pr="2rem">
            <SwiperThree arr={brandCetaphil}/>
        </Box>
        <br />
        <TopHeader color="black" text="Shop by Category" />
        <br />
        <StaticTwo arr={shopByCate}/>
        <br />
        <TopHeader color="black" text="New on Metneds" />
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperTwo />
        </Box>
        <br />
        <TopHeader color={"black"} text="Top Brands" />
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperFour arr={topBrands}/>
        </Box>
        <br />
        <Membership/>
        <br />
        <TopHeader color={"black"} text="Categories in Focus"/>
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperFour arr={topBrands}/>
        </Box>
        <br />
        <Box className={styles.limited} mb={-110} background="#EF4281">
            <br />
            <TopHeader color="white" text="Explore Beauty" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <br />
        <StaticThree arr={exploB}/>
        <br />
        <Consult/>
        <br />
        <Box className={styles.limited} mb={-95} background="#899095">
            <br />
            <TopHeader color="white" text="Best in Beauty" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <Box pl="2rem" pr="2rem">
            <SwiperFour arr={bestB}/>
        </Box>
        <br />
        <TopHeader color={"black"} text="Personal Care"/>
        <br />
        <StaticThree arr={personalC}/>
        <br />
        <TopHeader color={"black"} text="Men's Grooming"/>
        <br />
        <StaticTwo arr={mensGroom}/>
        <br />
        <MedRefill/>
        <br />
        <TopHeader color="black" text={"Health Concerns"}/>
        <br />
        <StaticFour arr={healthCon}/>
        <br />
        <Box className={styles.limited} mb={-100} background="#EF4281">
            <br />
            <TopHeader color="white" text="Health Library" />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Box>
        <br />
        <Box pl="2rem" pr="2rem">
            <SwiperFive arr={healthLib}/>
        </Box>
        <br />
        <About/>
        <Footer/>
        

    </Box>)
}