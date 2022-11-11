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
      <Box pt={6} pb="4" bg="#f2f2f2" w="100%" pl="10">
        <Button
          bg={"#2e3337"}
          color="#ffffff"
          w={"200px"}
          _hover={{ bg: "#48c9b0", color: "black" }}
          onClick={() => nav("/login")}
        >
          LOGIN
        </Button>
        <br />
        <Button
          mt={"20px"}
          bg={"#ffffff"}
          border="1px"
          w={"200px"}
          onClick={() => nav("/login")}
        >
          REGISTER
        </Button>
      </Box>
      {/* </Grid> */}
    </Box>
  );
};

export default AccountOption;
