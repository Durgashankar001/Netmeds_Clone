import { Box, Input, Image, Select, Text, TagLeftIcon } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import AccountOption from "./AccountOption";
export default function Navbar() {
  const nav = useNavigate();

  return (
    <>
      <Box className={styles.main}>
        <Box onClick={() => nav("/")} className={styles.imgBox}>
          {/* <Link to="/"> */}
          <Image alt="logo" />
          {/* </Link> */}
        </Box>
        <Box className={styles.inpGroup}>
          <Box>
            <Box>Delivered to</Box>
            <Select
              className={styles.selectme}
              variant={"unstyled"}
              size="xs"
              w="110px"
            >
              <option defaultValue={"110001"}>110001</option>
              <option value="110002">110002</option>
              <option value="110003">110003</option>
              <option value="110004">110004</option>
              <option value="110005">110005</option>
              <option value="110006">110006</option>
              <option value="110007">110007</option>
            </Select>
            <Box>|</Box>
            <Input
              ml={2}
              variant={"unstyled"}
              placeholder="Search for medicine and wellness products.."
              size={"xs"}
            />
          </Box>
        </Box>
        <Box className={styles.cartBox}>
          <Box onClick={() => nav("/cart")}>
            <TagLeftIcon w={6} h={6} as={AiOutlineShoppingCart} />
            <span>Cart</span>
            <span className={styles.itemCount}>0</span>
          </Box>

          {/* ..................................LOGIN SIGNUP BOX....................... */}
          <Box>
            <TagLeftIcon w={6} h={6} as={CgProfile} />

            <Box
              cursor={"pointer"}
              display={"flex"}
              alignItems="center"
              gap="1"
              fontSize={17}
              className={styles.Account}
              mt="2"
              pb="2"
            >
              <Text display={["none", "none", "block", "block"]}>
                Signup/Singin
              </Text>
            </Box>
            <Box
              className={styles.AccountGrid}
              w={["15%", "15%", "18%", "18%"]}
              mt={["5%", "5%", "2.5%", "2.5%"]}
              ml={["-25%", "-25%", "-12%", "-12%"]}
            >
              <AccountOption />
            </Box>
          </Box>
          {/* </Link> */}
        </Box>
      </Box>
    </>
  );
}
