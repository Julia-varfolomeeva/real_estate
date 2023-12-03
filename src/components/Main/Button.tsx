import * as React from "react";

import { Button, Grid, Typography } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import any from "../../dist/icon/any.svg";
import house from "../../dist/icon/house.svg";
import condo from "../../dist/icon/condo.svg";
import townhome from "../../dist/icon/townhome.svg";
import multifamily from "../../dist/icon/multifamily.svg";
import mobile from "../../dist/icon/mobile.svg";
import farm from "../../dist/icon/farm.svg";
import land from "../../dist/icon/land.svg";
import coop from "../../dist/icon/co-op.svg";
import condop from "../../dist/icon/condop.svg";

import { useOnClickOutside } from "usehooks-ts";



const ButtonFilter: React.FC = () => {
  const popperRef = React.useRef(null);

  const [type, setType] = React.useState("Property type");
 
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

  const handleChangeType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedType = event.currentTarget.getAttribute("value"); // Получаем значение из атрибута value
    if (selectedType) {
      setType(selectedType); // Обновляем название типа
      setOpen(false); // Закрываем Popper после выбора типа
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
          {type}
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
                  Property type
                  <Grid container columns={3} sx={{ maxWidth: "500px" }}>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Any"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",

                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={any}
                                alt=""
                              />
                            </a>
                          </Grid>
                          <Grid xs={1}>Any</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="House"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={house}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>House</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Condo"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={condo}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Condo</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Townhome"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={townhome}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Townhome</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Multi family"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={multifamily}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Multi family</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Mobile"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={mobile}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}> Mobile</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Farm"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={farm}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Farm</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Land"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={land}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Land</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Co-op"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "25px", height: "25px" }}
                                src={coop}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}> Co-op</Grid>
                        </Grid>
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        onClick={handleChangeType}
                        value="Condop"
                        sx={{
                          minWidth: "130px",
                          minHeight: "80px",
                          margin: "10px",
                          borderColor: "black",
                          color: "black",
                          fontSize: "12px",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "gray",
                          },
                        }}
                      >
                        <Grid
                          container
                          columns={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid xs={1}>
                            <a href="/">
                              <img
                                style={{ width: "25px", height: "25px" }}
                                src={condop}
                                alt=""
                              />
                            </a>
                          </Grid>

                          <Grid xs={1}>Condop</Grid>
                        </Grid>
                      </Button>
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

export default ButtonFilter;
