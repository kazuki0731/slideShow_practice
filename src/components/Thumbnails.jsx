import { Grid, makeStyles } from "@material-ui/core";
import { memo } from "react";

const useStyles = makeStyles({
  images: {
    width: "60px",
    cursor: "pointer",
    opacity: "0.4",
    "&:hover": {
      opacity: "1",
    },
  },
  thumb: {
    width: "340px",
    margin: "10px auto",
  },
});

export const Thumbnails = memo((props) => {
  const classes = useStyles();
  const { IMAGES, onClickChangeImage } = props;
  return (
    <Grid className={classes.thumb} container spacing={1}>
      {IMAGES.map((image, index) => {
        return (
          <Grid item key={index}>
            <img
              src={image.image}
              alt="サムネイル画像"
              className={classes.images}
              onClick={() => {
                onClickChangeImage(index);
              }}
              style={{ opacity: image.isSelected && "1" }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
});
