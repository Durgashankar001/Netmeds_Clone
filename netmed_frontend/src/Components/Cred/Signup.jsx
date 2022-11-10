import { useEffect, useState } from "react";
import {
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [api, setApi] = useState({});
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  function handleChange(e) {
    const { name: key, value } = e.target;
    setData({ ...data, [key]: value });
  }

  function blogdata(data) {
    return axios.post(`http://localhost:8080/user/signup`, data);
  }

  function handlesubmit(e) {
    e.preventDefault();
    // setSubmit(data);
    blogdata(data)
      .then((res) => {
        console.log(res.data);
        setApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (api.status == true) {
      navigate("/");
    }
  }, [api]);

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
        {/*.....................................Image .............................  */}
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
          {/*.....................................Form Data .............................  */}

          <Box>
            <Flex mt={-230} minH={"100vh"} align={"center"} justify={"center"}>
              <Stack spacing={8} mt={40} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack>
                  <Heading fontSize={"4xl"}>Sign Up</Heading>
                  <Text fontSize={"lg"} mb={80} color={"gray.600"}>
                    Sign up or Sign in to access your orders, special offers,
                    health tips and more!
                  </Text>
                </Stack>
                <Box rounded={"lg"}>
                  <Box spacing={4}>
                    <FormControl>
                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Full Name
                      </FormLabel>
                      <Input
                        onChange={handleChange}
                        name="name"
                        value={data.name}
                        variant=""
                        placeholder="Enter your Name"
                      />
                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Email Address{" "}
                      </FormLabel>
                      <Input
                        variant=""
                        onChange={handleChange}
                        name="email"
                        value={data.email}
                        placeholder="Enter your Email"
                      />
                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Phone Number{" "}
                      </FormLabel>
                      <Input
                        type="tel"
                        onChange={handleChange}
                        name="phone"
                        value={data.phone}
                        placeholder="Phone number"
                      />
                      <FormLabel mb={4} ml={0} fontSize={"md"}>
                        Password{" "}
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          onChange={handleChange}
                          name="password"
                          value={data.password}
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
                        Signup
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Flex>

            {/*..................................... Google Button........................... */}
            <Box mt={-10} pl={0} display="flex">
              {/* Google BUTTON */}
              <Button
                border="1px solid lightgrey"
                ml={10}
                mr={10}
                width={155}
                height="50px"
                bg={"white"}
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

              {/*................ Facebook BUTTON...................... */}

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
