import {
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginData, Sigup_google } from "../../Store/Cred/Cred.action";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // const [api, setApi] = useState();
  const [data, setData] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const token = useSelector((store) => store.Auth.token);
  // console.log(token.status);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (api) {
  //     toast({
  //       title: "Login Successfull",
  //       status: "success",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   } else {
  //     toast({
  //       title: "Login Failed.",
  //       status: "error",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   }
  // }, [api]);

  function handleChange(e) {
    const { name: key, value } = e.target;
    setData({ ...data, [key]: value });
  }

  const handlegoogle = (e) => {
    e.preventDefault();
    dispatch(Sigup_google());
    // navigate("/dashboardpanel/*");
  };

  function handlesubmit(e) {
    e.preventDefault();
    // setSubmit(data);
    dispatch(LoginData(data));
  }
  useEffect(() => {
    if (token.status == true) {
      toast({
        title: "Login Succesfull.😊",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 600);
    } else {
      toast({
        title: "Login Failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [token]);

  return (
    <>
      <Box
        m={50}
        rounded={20}
        p={20}
        pl={0}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
        display="flex"
        gap={100}
      >
        <Box>
          <img
            border="1px solid green"
            style={{ marginTop: "-60px", marginRight: "200" }}
            width="508px"
            height="718px"
            src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
            alt=""
          />
        </Box>

        <>
          <Box>
            <Flex mt={-230} minH={"100vh"} align={"center"} justify={"center"}>
              <Stack spacing={8} mt={40} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack>
                  <Heading fontSize={"4xl"}>Sign In</Heading>
                  <Text fontSize={"lg"} mb={80} color={"gray.600"}>
                    Sign up or Sign in to access your orders, special offers,
                    health tips and more!
                  </Text>
                </Stack>
                <Box rounded={"lg"}>
                  <Box spacing={4}>
                    <FormControl>
                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Email Address{" "}
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        name="email"
                        value={data.email}
                        variant=""
                        placeholder="Enter your Email"
                      />

                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Password{" "}
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <Stack spacing={10}>
                      <Button
                        width={400}
                        bg={"#24AEB1"}
                        color={"white"}
                        _hover={{
                          bg: "#24AEB1.500",
                        }}
                        onClick={handlesubmit}
                      >
                        Login
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Flex>

            <Box mt={-10} pl={0} display="flex">
              {/* Google BUTTON */}
              <Button
                border="1px solid lightgrey"
                ml={10}
                mr={10}
                width={155}
                height="50px"
                bg={"white"}
                onClick={handlegoogle}
              >
                {" "}
                <img
                  style={{ marginRight: "20px" }}
                  width="20px"
                  height="20px"
                  src="https://toppng.com/uploads/preview/google-g-logo-icon-11609362962anodywxeaz.png"
                  alt="google"
                />
                <b> </b> Google
              </Button>

              {/* Facebook BUTTON */}

              <Button
                border="1px solid lightgrey"
                width={155}
                height="50px"
                bg={"white"}
              >
                {" "}
                <img
                  style={{ marginRight: "20px" }}
                  width="20px"
                  height="20px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                  alt="fb"
                />
                Facebook
              </Button>
            </Box>
          </Box>
        </>
      </Box>

      <Text textAlign="center">
        By continuing you agree to our Terms of service <br></br>
        and Privacy & Legal Policy.
      </Text>
    </>
  );
}
