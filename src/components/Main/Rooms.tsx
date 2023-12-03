import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import { useOnClickOutside } from "usehooks-ts";
import FilterBathrooms from "./Bathrooms";

const options = ["No nim", "Studio", "1", "2", "3", "4", "5"];

const FilterRooms: React.FC = () => {
  const popperRef = React.useRef(null);

  const [newRooms, setRooms] = React.useState("Rooms");
  const [newBath, setBath] = React.useState("");

  const [bedMin, setBedMin] = React.useState("");
  const [bedMax, setBedMax] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleChangeBedMin = (
    event: React.ChangeEvent<{}>,
    newBedMin: string | null
  ) => {
    if (newBedMin !== null && newBedMin !== bedMax) {
      setBedMin(newBedMin);
      if (newBedMin && bedMax) {
        const newRooms = `Rooms: ${newBedMin} - ${bedMax}`;
        setRooms(newRooms);
      }
      if (!bedMax) {
        const newRooms = `Min rooms: ${newBedMin}`;
        setRooms(newRooms);
      }
    } else {
      // Очистка значения bedMin
      setBedMin("");
      if (bedMax) {
        setRooms(`Max rooms: ${bedMax}`);
      } else {
        setRooms("Rooms");
      }
    }

    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleChangeBedMax = (
    event: React.ChangeEvent<{}>,
    newBedMax: string | null
  ) => {
    if (newBedMax !== null && newBedMax !== bedMin) {
      setBedMax(newBedMax);
      if (bedMin && newBedMax) {
        const newRooms = `Rooms: ${bedMin} - ${newBedMax}`;
        setRooms(newRooms);
      }
      if (!bedMin) {
        const newRooms = `Max Rooms: ${newBedMax}`;
        setRooms(newRooms);
      }
    } else {
      // Очистка значения bedMax
      setBedMax("");

      if (bedMin) {
        setRooms(`Min Rooms: ${bedMin}`);
      } else {
        setRooms("Rooms");
      }
    }
    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleClose = () => {
    if (!bedMin || !bedMax) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOutsideClick = () => {
    if (open) setOpen(false);
  };

  useOnClickOutside(popperRef, handleOutsideClick);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Button
          onClick={handleClick("bottom-start")}
          variant="outlined"
          sx={{ borderColor: "black", color: "black", minHeight: "47px" }}
        >
          {`${newRooms} ${newBath}`}
        </Button>
        <Popper
          ref={popperRef}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <Typography>
                  <div
                    style={{
                      padding: "20px ",
                      fontSize: "20px",
                      fontWeight: "900",
                    }}
                  >
                    Rooms
                  </div>
                  <Grid container columns={1} sx={{ minWidth: "400px" }}>
                    <Grid
                      xs={1}
                      sx={{
                        padding: "0px 20px 10px 20px",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                    >
                      Bedrooms
                    </Grid>

                    <Grid container direction={"column"} columns={2}>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          padding: "0px 20px 0px 20px",
                        }}
                      >
                        <Autocomplete
                          onOpen={handleOpen}
                          // onClose={handleClose}
                          value={bedMin}
                          onChange={handleChangeBedMin}
                          inputValue={bedMin}
                          options={options}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Min Rooms"
                              onChange={(e) =>
                                handleChangeBedMin(e, e.target.value)
                              }
                            />
                          )}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={6}
                        sx={{
                          padding: "0px 20px 0px 20px",
                        }}
                      >
                        <Autocomplete
                          onOpen={handleOpen}
                          // onClose={handleClose}
                          value={bedMax}
                          onChange={handleChangeBedMax}
                          inputValue={bedMax}
                          options={options}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Max Rooms"
                              onChange={(e) =>
                                handleChangeBedMax(e, e.target.value)
                              }
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <FilterBathrooms newBath={newBath} setBath={setBath} />

                  {/* <Grid container columns={1} sx={{ minWidth: "400px" }}>
                    <Grid
                      xs={1}
                      sx={{
                        padding: "0px 20px 10px 20px",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                    >
                      Bathrooms
                    </Grid>

                    <Grid  container direction={"column"} columns={2}>
                      <Grid item  xs={6} sx={{
                     padding: "0px 20px 0px 20px" }}>
                        <Autocomplete
                          onOpen={handleOpen}
                          // onClose={handleClose}
                          value={bedMin}
                          onChange={handleChangeBedMin}
                          inputValue={bedMin}
                          options={options}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Min Rooms"
                              onChange={(e) =>
                                handleChangeBedMin(e, e.target.value)
                              }
                            />
                          )}
                        />
                      </Grid>

                      <Grid item  xs={6}  sx={{
                     padding: "0px 20px 0px 20px"}}>
                        <Autocomplete
                          onOpen={handleOpen}
                          // onClose={handleClose}
                          value={bedMax}
                          onChange={handleChangeBedMax}
                          inputValue={bedMax}
                          options={options}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Max Rooms"
                              onChange={(e) =>
                                handleChangeBedMax(e, e.target.value)
                              }
                            />
                          )}
                        />
                      </Grid> */}
                  {/* </Grid> */}
                  {/* </Grid> */}
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </FormControl>
    </div>
  );
};

export default FilterRooms;
