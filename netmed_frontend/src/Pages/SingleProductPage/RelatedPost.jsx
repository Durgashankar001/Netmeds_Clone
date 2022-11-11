import React from 'react'
import {
    Stack,
    Progress, Text,
    Image,
    SimpleGrid,
    Box,
  } from '@chakra-ui/react'

const RelatedPost = () => {
    const reviewApi = [
        {
          img: "https://www.netmeds.com/images/cms/magefan_blog/popular/herb_women_Thumbimage_200x200.jpg",
          title: "Ashokarishta: This Ayurvedic Tonic Helps With Hormonal",
          desc: "Ashokarishta is an Ayurvedic tonic strongly recommended for the physical health ..",
        },
        {
          img: "https://www.netmeds.com/images/cms/magefan_blog/popular/1601012126_Fertility_thumb_200.jpg",
          title: "Fertility Yoga: Time-Tested Yogasanas To Treat Infertility",
          desc: "Motherhood is one of the absolute joyful and happiest experiences of a woman&amp;rsq..",
        },
        {
          img: "https://www.netmeds.com/images/cms/magefan_blog/popular/1614934055_Women_thumb_200.jpg",
          title: " International Women’s Day 2021: Remedial Yoga Postures",
          desc: "Undoubtedly, a woman is a true personification of love, strength, resilience, an..",
        },
        {
          img: "https://www.netmeds.com/images/cms/magefan_blog/popular/1612249252_Lodhra_thumb_200.jpg",
          title: "Lodhra: Benefits, Uses, Formulation, Ingredients",
          desc: "All women face certain hormonal or emotional glitches every month during the tim..",
        },
      ];
  return (
    <div>
       <div>
      <div
        style={{
          width: "98%",
          height: "auto",
          marginTop: "12%",
          margin:"auto",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius:"10px"
          // border: "1px solid red",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            marginTop: "5%",
            // border: "1px solid red",
          }}
        >
          <Text
            color={"gray.600"}
            fontSize="15px"
            textAlign="start"
            fontWeight={"600"}
            marginTop={"5%"}
            marginLeft={"5%"}
            paddingTop={"2%"}
          >
            RELATED POSTS
          </Text>
          <SimpleGrid
            columns={[1, null, 5]}
            marginTop="4"
            marginBottom={"3"}
            spacing="20px"
            marginLeft={"4%"}
            overflowWrap="anywhere"
          >
            {reviewApi.map((el,index) => {
              return (
                <div key={index}>
                  <Box
                    width="auto"
                    height="auto"
                    borderRadius={"10px"}
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
                    paddingBottom={"10px"}
                    marginBottom={"24px"}
                  >
                    <Image
                      width={"100%"}
                      height="240px"
                      objectFit="cover"
                      src={el.img}
                      alt="Dan Abramov"
                      borderRadius={"10px"}
                    />
                    <Text
                      fontSize={"14px"}
                      fontWeight="500"
                      marginLeft={"5%"}
                      marginRight="5%"
                      marginTop={"5%"}
                      textAlign={"start"}
                    >
                      {el.title}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      marginLeft={"5%"}
                      marginRight="5%"
                      marginTop={"4%"}
                      textAlign={"start"}
                      fontWeight="500"
                      fontFamily="nunito sans,sans-serif"
                    >
                      {el.desc}
                    </Text>
                  </Box>
                </div>
              );
            })}
          </SimpleGrid>
        </div>
      </div>
    </div>

    </div>
  )
}

export default RelatedPost
