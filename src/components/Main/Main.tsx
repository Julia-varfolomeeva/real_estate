import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Hidden } from "@mui/material";

import FilterPrice from "./Value";
import ButtonFilter from "./Button";
import FilterRooms from './Rooms';
import FilterBathrooms from './Bathrooms';

import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function InputWithIcon() {
  return (
    <Box sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
      <Grid container justifyContent="left" alignItems="center">
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid grey",
            borderRadius: "30px",
            maxHeight: "50px",
            justifyContent: "center",
          }}
        >
          <TextField
            className="field"
            id="input-with-sx"
            placeholder="Address,City,ZIP"
            variant="outlined"
            sx={{
              ml: 2,
              fontSize: "20px",
              "& input": {
                border: "none", // Убираем рамку (border) для внутреннего <input>
                backgroundColor: "transparent", // Делаем фон прозрачным
              },
              "& fieldset": {
                border: "none", // Убираем рамку (border) для внешней рамки (fieldset)
              },
            }}
          />
          <SearchRoundedIcon
            fontSize="large"
            sx={{ color: "action.active", mr: 2, ml: 2, my: 0.5 }}
          />
        </Grid>
        <Grid>
          <FilterPrice></FilterPrice>
        </Grid>
        <Grid>
          <ButtonFilter></ButtonFilter>
        </Grid>
        <Grid>
          <FilterRooms></FilterRooms>
        </Grid>
  
        <Grid>
          {/* <FilterBathrooms></FilterBathrooms> */}
          
        </Grid>
      </Grid>
    </Box>
  );
}

// export default Main;
