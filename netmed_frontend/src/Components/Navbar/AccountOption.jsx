import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import styles from "./navbar.module.css";

const AccountOption = () => {
  const nav = useNavigate();
  const { token } = useSelector(store => store.Auth);
  console.log(token);
  return (
    <Box>
      {/* <Grid
        className={styles.AccountOptionMainDiv}
        display={"grid"}
        textAlign="left"
        fontWeight={400}
      > */}
      {!token ? <>
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
          <Box
            _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
            pt={4}
            pb={4}
            textAlign="center"
            onClick={() => nav("/product")}
          >
            All Products
          </Box>
        </Box>
      </> :
        <>
          <Box
            _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
            pt={4}
            pb={4}
            textAlign="center"
            onClick={() => nav("/cart")}
          >
            Cart
          </Box>
          <Box
            _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
            pt={4}
            pb={4}
            textAlign="center"
            onClick={() => nav("/product")}
          >
            All Products
          </Box>
          <Box
            _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
            pt={4}
            pb={4}
            textAlign="center"
            onClick={() => nav("/wellness")}
          >
            Wellness
          </Box>
          <Box
            _hover={{ bg: "#e5e5e5", textDecoration: "underline" }}
            pt={4}
            pb={4}
            textAlign="center"
            onClick={() => nav("/signup")}
          >
            Logout
          </Box>
        </>}

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
