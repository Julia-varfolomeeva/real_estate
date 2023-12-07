import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box } from "@mui/material";

import Line from "../components/Skip-line/Skip-line";
import Advertise from "../components/Advertisements/Advertisements";
import Main from "../components/Main/Main";

export const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Line></Line>
          </Grid>
          <Grid item xs={12}>
            <Main></Main>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$190,000"
                imageUrl="https://ap.rdcpix.com/80e700742fbb19eb6be7f4a5fc47bff5l-m3175008064od.webp"
                point={""}
                status={"For sale"}
                createdAt={"12 june 2023 ."}
                adress={"65 W 13TH ST"}
                city={"New York, NY 10011-7909"}
                numberOfRoom={4}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$200,000"
                imageUrl="https://tranio.ru/photos/adt/1c5c6a8d/31713990/1200x800.jpg"
                point={""}
                status={"For sale"}
                createdAt={"24 April 2023 ."}
                adress={"195 WELLINGTON CT"}
                city={"New York, NY 10314-7852"}
                numberOfRoom={5}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$150,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_05_05/Amoia-0.jpg"
                point={""}
                status={"For sale"}
                createdAt={"15 August 2023 ."}
                adress={"2 MEADOWVIEW LN"}
                city={"New York, NY 10589-2503"}
                numberOfRoom={5}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$240,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_05_05/Amoia-13.jpg"
                point={""}
                status={"For sale"}
                createdAt={"05 june 2023 ."}
                adress={"18200 145TH AVE"}
                city={"New York, NY 11413-3305"}
                numberOfRoom={4}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$200,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_04_22/Studiolav_04.jpg"
                point={""}
                status={"For sale"}
                createdAt={"15 September 2023 ."}
                adress={"100 E HARTSDALE AVE"}
                city={"New York, NY 10530-3851"}
                numberOfRoom={5}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$140,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_01_29/TinaRich_NewYork_loft_3_1920_2_3.jpg"
                point={""}
                status={"For sale"}
                createdAt={"10 Nowember 2023 ."}
                adress={"804 ONDERDONK AVE"}
                city={"New York, NY 11385-4208"}
                numberOfRoom={4}
                rooms="bed"
                numberOfBath={1}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$210,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_02_12/FTA_19.jpg"
                point={""}
                status={"For sale"}
                createdAt={"17 October 2023 ."}
                adress={"555 W 25TH ST"}
                city={"New York, NY 10001-5542"}
                numberOfRoom={3}
                rooms="bed"
                numberOfBath={2}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
            <Item item xs={11.8} sm={6} md={4} lg={3}>
              <Advertise
                _id={1}
                price="$190,000"
                imageUrl="https://api.interior.ru/media/images/setka/2020_02_12/FTA_21.jpg"
                point={""}
                status={"For sale"}
                createdAt={"25 November 2023 ."}
                adress={"751 WALTON AVE"}
                city={"New York, NY 10451-2504"}
                numberOfRoom={4}
                rooms="bed"
                numberOfBath={1}
                baths="bath"
                emailAgent={"Email Agent"}
                isEditable={true}
                isFullPost={true}
                isLoading={false}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
