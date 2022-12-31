import { Box, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./searchRes.css";

export default function SearchRes({ arr , hideSearch}) {
    const nav = useNavigate();
    const handNav = (id)=>{
        nav(`/product/${id}`)
        hideSearch();
    }
    return (<Box className="searchDiv">
        <Box className="closeTab" onClick={hideSearch}>Close Tab</Box>
        {arr?.map((el) => {
            return (<Box key={el._id} className="debItem" onClick={()=>handNav(el?._id)}>
                <Box>
                    <Box className="proTitle limitLine">{el?.title}</Box>
                    <p className="manufact">{el?.manufacturer}</p>
                </Box>
                <Image src={el?.img1} alt={el?.manufacturer} className="searchImg"/>
            </Box>)
        })}
    </Box>)
}