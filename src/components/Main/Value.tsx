import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import { useOnClickOutside } from "usehooks-ts";

const options = ["1000", "2000", "3000", "4000"];

const FilterPrice: React.FC = () => {
  const popperRef = React.useRef(null);

  const [newPrice, setPrice] = React.useState("Price");
  const [priceMin, setPriceMin] = React.useState("");
  const [priceMax, setPriceMax] = React.useState("");

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

  const handleChangePriceMin = (
    event: React.ChangeEvent<{}>,
    newPriceMin: string | null
  ) => {
    if (newPriceMin !== null && newPriceMin !== priceMax) {
      setPriceMin(newPriceMin);
      if (newPriceMin && priceMax) {
        const newPrice = `Price: ${newPriceMin} - ${priceMax}`;
        setPrice(newPrice);
      }
      if (!priceMax) {
        const newPrice = `Min price: ${newPriceMin}`;
        setPrice(newPrice);
      }
    } else {
      // Очистка значения priceMin
      setPriceMin("");
      if (priceMax) {
        setPrice(`Max price: ${priceMax}`);
      } else {
        setPrice("Price");
      }
    }

    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleChangePriceMax = (
    event: React.ChangeEvent<{}>,
    newPriceMax: string | null
  ) => {
    if (newPriceMax !== null && newPriceMax !== priceMin) {
      setPriceMax(newPriceMax);
      if (priceMin && newPriceMax) {
        const newPrice = `Price: ${priceMin} - ${newPriceMax}`;
        setPrice(newPrice);
      }
      if (!priceMin) {
        const newPrice = `Max price: ${newPriceMax}`;
        setPrice(newPrice);
      }
    } else {
      // Очистка значения priceMax
      setPriceMax("");

      if (priceMin) {
        setPrice(`Min price: ${priceMin}`);
      } else {
        setPrice("Price");
      }
    }
    handleClose(); // Переместите вызов handleClose() сюда
  };

  const handleClose = () => {
    if (!priceMin || !priceMax) {
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
          {newPrice}
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
                <Typography
                  sx={{
                    p: 1,
                    margin: "20px",
                    fontSize: "20px",
                    fontWeight: "900",
                  }}
                >
                  Price
                  <Grid container sx={{ minWidth: "400px" }}>
                    <Grid item xs={6} sx={{padding:'10px'}}>
                      <Autocomplete
                        onOpen={handleOpen}
                        // onClose={handleClose}
                        value={priceMin}
                        onChange={handleChangePriceMin}
                        inputValue={priceMin}
                        options={options}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Min Price"
                            onChange={(e) =>
                              handleChangePriceMin(e, e.target.value)
                            }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{padding:'10px'}}>
                      <Autocomplete
                        onOpen={handleOpen}
                        // onClose={handleClose}
                        value={priceMax}
                        onChange={handleChangePriceMax}
                        inputValue={priceMax}
                        options={options}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Max Price"
                            onChange={(e) =>
                              handleChangePriceMax(e, e.target.value)
                            }
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </FormControl>
    </div>
  );
};

export default FilterPrice;
