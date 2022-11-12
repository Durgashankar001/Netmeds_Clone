import { Box, Input, Image, Select, Text, TagLeftIcon } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import AccountOption from "./AccountOption";
import { useNavigate } from "react-router-dom";
import logo from "../../images-HP/metneds.png";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((store) => store.Auth.name);
  console.log();

  const { data } = useSelector((store) => store.cart);
  return (
    <>
      <Box className={styles.main}>
        <Box onClick={() => nav("/")} className={styles.imgBox}>
          {/* <Link to="/"> */}
          <Image alt="logo" src={logo} />
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
            <TagLeftIcon
              w={6}
              h={6}
              as={AiOutlineShoppingCart}
              onClick={() => nav("/cart")}
            />
            <span className={styles.cartSpan}>Cart</span>
            <span className={styles.itemCount}>{data ? data.length : 0}</span>
          </Box>

          {/* ..................................LOGIN SIGNUP BOX....................... */}
          <Box>
            <Box
              cursor={"pointer"}
              display={"flex"}
              alignItems="center"
              fontSize={14}
              className={styles.Account}
              mt="2"
              pb="2"
            >
              <TagLeftIcon
                w={6}
                h={6}
                as={CgProfile}
                onClick={() => nav("/login")}
              />
              <span className={styles.cartSpan}>
                {name ? name : "Signup/Signin"}
              </span>
            </Box>
            <Box
              className={styles.AccountGrid}
              w={["10%", "10%", "12%", "12%"]}
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
