import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const AccountOption = () => {
  const nav = useNavigate();
  return (
    <Box>
      {/* <Grid
        className={styles.AccountOptionMainDiv}
        display={"grid"}
        textAlign="left"
        fontWeight={400}
      > */}
      <Box background={"white"} border="1px #e5e5e5 solid">
        <Box
          textAlign="center"
          _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
          pt={4}
          pb={4}
          onClick={() => nav("/login")}
        >
          Login
        </Box>
        <Box
          _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
          pt={4}
          pb={4}
          textAlign="center"
          onClick={() => nav("/signup")}
        >
          Register
        </Box>
      </Box>
      {/* </Grid> */}
    </Box>
  );
};

export default AccountOption;

//
// mt={"20px"}
//           bg={"#ffffff"}
//           border="1px"
//           bg={"#2e3337"}
//           color="#ffffff"
