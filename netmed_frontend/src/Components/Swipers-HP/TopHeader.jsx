import {Box} from "@chakra-ui/react";
export default function TopHeader({color,text}){
    return (<>
        <Box pl="1.5rem" fontSize={21} fontWeight={600} color={color?color:"black"}>
            {text}
        </Box>
    </>)
}