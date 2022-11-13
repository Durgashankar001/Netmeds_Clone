import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Signout } from "../../Store/Cred/Cred.action";
//import styles from "./navbar.module.css";

import { useToast } from "@chakra-ui/react";

const AccountOption = () => {
  const nav = useNavigate();
  const { token } = useSelector((store) => store.Auth);
  const dispatch = useDispatch();
  const toast = useToast();

  function logout() {
    dispatch(Signout());
    toast({
      title: "Logout successfully",
      description: "Please visit again😊",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  console.log(token);
  return (
    <Box>
      {/* <Grid
        className={styles.AccountOptionMainDiv}
        display={"grid"}
        textAlign="left"
        fontWeight={400}
      > */}
      {!token ? (
        <>
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
        </>
      ) : (
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
            onClick={logout}
          >
            Logout
          </Box>
        </>
      )}

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
