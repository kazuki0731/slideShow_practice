import { Grid } from "@material-ui/core";
import { memo } from "react";

export const Thumbnails = memo((props) => {
  const { Images, onClickChangeImage, classes } = props;
  return (
    <Grid
        container
        spacing={1}
        style={{ width: "340px", margin: "10px auto" }}
      >
        {Images.map((image, index) => {
          return (
            <Grid item key={index}>
              <img
                src={image.image}
                alt="サムネイル画像"
                className={classes.root}
                onClick={() => {
                  onClickChangeImage(index);
                }}
                style={{ opacity: image.isSelected && "1" }}
              />
            </Grid>
          );
        })}
      </Grid>
  )
});