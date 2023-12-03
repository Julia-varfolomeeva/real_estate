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
                price="$90,000"
                imageUrl="https://ap.rdcpix.com/80e700742fbb19eb6be7f4a5fc47bff5l-m3175008064od.webp"
                point={""}
                status={"For sale"}
                createdAt={"12 june 2022 ."}
                adress={"418 Central Park W"}
                city={"New York, NY 10025"}
                numberOfRoom={2}
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
                price="$90,000"
                imageUrl="https://ap.rdcpix.com/80e700742fbb19eb6be7f4a5fc47bff5l-m3175008064od.webp"
                point={""}
                status={"For sale"}
                createdAt={"12 june 2022 ."}
                adress={"418 Central Park W"}
                city={"New York, NY 10025"}
                numberOfRoom={2}
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
                price="$90,000"
                imageUrl="https://ap.rdcpix.com/80e700742fbb19eb6be7f4a5fc47bff5l-m3175008064od.webp"
                point={""}
                status={"For sale"}
                createdAt={"12 june 2022 ."}
                adress={"418 Central Park W"}
                city={"New York, NY 10025"}
                numberOfRoom={2}
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
                price="$90,000"
                imageUrl="https://ap.rdcpix.com/80e700742fbb19eb6be7f4a5fc47bff5l-m3175008064od.webp"
                point={""}
                status={"For sale"}
                createdAt={"12 june 2022 ."}
                adress={"418 Central Park W"}
                city={"New York, NY 10025"}
                numberOfRoom={2}
                rooms="bed"
                numberOfBath={2}
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
