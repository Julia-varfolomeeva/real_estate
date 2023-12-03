import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useOnClickOutside } from "usehooks-ts";
import Popper, { PopperPlacementType } from "@mui/material/Popper";

const options = ["No nim", "Studio", "1", "2", "3", "4", "5"];

const FilterBathrooms = ({
  newBath,
  setBath,
}: {
  newBath: string;
  setBath: Function;
}) => {
  // const [newBath, setBath] = React.useState("");

  const popperRef = React.useRef(null);
  const [bathMin, setBathMin] = React.useState("");
  const [bathMax, setBathMax] = React.useState("");

  const [open, setOpen] = React.useState(false);

  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
  //   null
  // );
  // const [open, setOpen] = React.useState(false);
  // const [placement, setPlacement] = React.useState<PopperPlacementType>();

  // const handleClick =
  //   (newPlacement: PopperPlacementType) =>
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //     setOpen((prev) => placement !== newPlacement || !prev);
  //     setPlacement(newPlacement);
  //   };   // const handleClick =
  //   (newPlacement: PopperPlacementType) =>
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //     setOpen((prev) => placement !== newPlacement || !prev);
  //     setPlacement(newPlacement);
  //   };

  const handleChangeBathMin = (
    event: React.ChangeEvent<{}>,
    newBathMin: string | null
  ) => {
    console.log(newBathMin);
    if (newBathMin !== null && newBathMin !== bathMax) {
      setBathMin(newBathMin);
      console.log(newBath);
      console.log(bathMax);
      console.log(newBathMin);
      if (!bathMax) {
        const newBath = `Min Bath: ${newBathMin}`;
        setBath(newBath);
      }
      if (newBathMin && bathMax) {
        const newBath = `Bath: ${newBathMin} - ${bathMax}`;
        console.log(newBath);
        setBath(newBath);
      }
    } else {
      // Очистка значения bathMin
      setBathMin("");
      if (bathMax) {
        setBath(`Max Bath: ${bathMax}`);
      } else {
        setBath("Baths");
      }
    }

    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleChangeBathMax = (
    event: React.ChangeEvent<{}>,
    newBathMax: string | null
  ) => {
    if (newBathMax !== null && newBathMax !== bathMin) {
      setBathMax(newBathMax);
      console.log(`newBath${newBath} `);
      console.log(bathMax);
      console.log(newBathMax);

      if (!bathMin) {
        const newBath = `Max Bath: ${newBathMax}`;
        setBath(newBath);
      }
      if (bathMin && newBathMax) {
        const newBath = `Bath: ${bathMin} - ${newBathMax}`;
        console.log(newBath);

        setBath(newBath);
      }
    } else {
      // Очистка значения bathMax
      setBathMax("");

      if (bathMin) {
        setBath(`Min Bath: ${bathMin}`);
      } else {
        setBath("");
      }
    }
    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleClose = () => {
    if (!bathMin || !bathMax) {
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
      <Grid container columns={1} sx={{ minWidth: "400px" }}>
        <p>{newBath}</p>
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
              value={bathMin}
              onChange={handleChangeBathMin}
              inputValue={bathMin}
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Min Bath"
                  onChange={(e) => handleChangeBathMin(e, e.target.value)}
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
              value={bathMax}
              onChange={handleChangeBathMax}
              inputValue={bathMax}
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Max Bath"
                  onChange={(e) => handleChangeBathMax(e, e.target.value)}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FilterBathrooms;
