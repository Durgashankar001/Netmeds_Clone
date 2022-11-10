import {
  Box,
  Button,
  Icon,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SinglePageTabs from "../../Components/SinglePage/SinglePageTabs";
import Review from "./Review";
import "./SingleProdctPage.css";

export default function SingleProductPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  let url = `https://reqres.in/api/users/${1}`;

  let getData = async () => {
    let res = await fetch(url);
    let res_data = await res.json();
    setData(res_data.data);
  };
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div id="ProductPage">
        {/* product image */}
        <div id="productImage">
          <img
            src="https://www.netmeds.com/images/product-v1/600x600/858569/inlife_shatavari_extract_capsules_60_s_0.jpg"
            alt=""
          />
        </div>

        {/* product desc */}
        <div id="productDesc">
          <div id="productName">
            <Text fontSize="xl">INLIFE Shatavari Extract Capsules 60's</Text>
            <Button size="xs">Fitness</Button>{" "}
            <Button size="xs">Ayurvedic Supplement</Button>
          </div>
          <hr />
          <div id="productPrice">
            <div id="productBestPrice">
              <Text color="#6f7284" as="b">
                Best Price*{" "}
              </Text>
              <Text color="red" fontSize="xl" as="b">
                ₹ 289.42
              </Text>
            </div>

            <div id="productMrp">
              <Text color="#6f7284" fontSize="xs">
                MRP{" "}
              </Text>
              <Text color="#6f7284" fontSize="xs" as="s">
                MRP ₹ 499.00{" "}
              </Text>
              <Text fontSize="xs" color="#37916c" as="b">
                GET 42% OFF
              </Text>
            </div>

            <Text color="#6f7284" fontSize="xs">
              (Inclusive of all taxes)
            </Text>
            <UnorderedList>
              <ListItem color="#6f7284" fontSize="xs">
                Mkt: Inlife Pharma Private Limited
              </ListItem>
              <ListItem color="#6f7284" fontSize="xs">
                {" "}
                Country of Origin: India
              </ListItem>
              <ListItem color="#6f7284" fontSize="xs">
                Delivery charges if applicable will be applied at checkout
              </ListItem>
            </UnorderedList>
            <br />
            <Button colorScheme="teal" size="md">
              ADD TO CART
            </Button>
          </div>
          <hr />
          <div id="productDeliver">
            <Text>Check Availability & Expiry</Text>
            <div id="pincode">
              <Text color="teal" as="b">
                PINCODE:
              </Text>
              <Input placeholder="Enter Pincode" w={40} />
              <Button colorScheme="teal" size="sm">
                Check
              </Button>
            </div>

            <div id="productOffer">
              <Text as="b" color="#6f7284">
                OFFERS APPLICABLE
              </Text>
              <br />
              <br />
              <div id="productDiscount">
                <div>
                  <Text fontSize="sm">Default Discount</Text>
                  <Text fontSize="sm" color="teal">
                    You get 42% OFF on this product
                  </Text>
                </div>
                <div>
                  <Text fontSize="xs" color="red">
                    Offer Applied
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="productTab">
        <SinglePageTabs />
      </div>

      <div id="productDisclaimer">
        <Box bg="white" w="100%" p={4} color="black">
          <Text color="#6f7284" as='b'>DISCLAIMER</Text>
          <Text fontSize="xs" >
            The contents of this website are for informational purposes only and
            not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Please seek the advice of a physician or
            other qualified health provider with any questions you may have
            regarding a medical condition. Do not disregard professional medical
            advice or delay in seeking it because of something you have read on
            this website.
          </Text>
        </Box>
      </div>

      <Review/>
    </div>
  );
}
