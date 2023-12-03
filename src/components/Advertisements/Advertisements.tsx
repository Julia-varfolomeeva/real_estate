import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import UserInfo, { UserInfoProps } from "../UserInfo";
import { Grid } from "@mui/material";

import Button from "@mui/material/Button";
import { BorderRightRounded } from "@mui/icons-material";

interface Advertiseprops {
  _id: string | number;
  price: string;
  createdAt: string;
  imageUrl?: string;
  point: string;
  status: string;
  numberOfRoom: number;
  numberOfBath: number;
  baths: string;
  rooms: string;
  adress: any;
  city: any;
  emailAgent: string;

  children?: React.ReactNode;
  isFullPost: boolean;
  isLoading: boolean;
  isEditable?: boolean;
}
const Advertise = ({
  _id,
  price,
  createdAt,
  imageUrl,
  point,
  status,
  adress,
  city,
  numberOfRoom,
  numberOfBath,
  rooms,
  baths,
  emailAgent,

  children,
  isFullPost,
  isLoading,
  isEditable,
}: Advertiseprops) => {
  const onClickRemove = () => {};
  return (
    <Grid
      container
      className={styles.root}
      alignItems="left"
      justifyContent="center"
      direction="column"
    >
      <Grid item className={styles.imageContainer}>
        {imageUrl && (
          <img
            className={clsx(styles.image, {
              [styles.imageFull]: isFullPost,
            })}
            src={imageUrl}
            alt={price}
          />
        )}
      </Grid>

      <div className={styles.wrapper}>
        <div className={styles.topText}>
          <div className={styles.pointStyle}>{point}</div>
          <div className={styles.statusStyle}>{status}</div>
        </div>

        <div className={styles.indention}>
          <h2 className={styles.price}>{price}</h2>
          <div className={styles.numberOfRoomStyle}>
            <span className={styles.boldNumber}>{numberOfRoom}</span> {rooms}{" "}
            <span className={styles.boldNumber}>{numberOfBath} </span>
            {baths}
          </div>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item className={styles.adressStyleFull}>
              <p>{adress}</p>
              <p className={styles.adressStyle}>{city}</p>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white", // Устанавливаем цвет фона
                  color: "black", // Устанавливаем цвет текста
                  borderRadius: "15px",
                  borderColor: "black",

                  whiteSpace: "nowrap",
                  maxHeight: "40px",
                  marginRight: "5px",

                  "&:hover": {
                    backgroundColor: "grey",
                    color: "black",
                  },
                }}
              >
                Email agent
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Advertise;
