import { Button, Grid } from "@material-ui/core";
import { memo } from "react";
import { PageingButton } from "./PageingButton";

export const ShowButtons = memo((props) => {
  const { onClickPrev, onClickNext } = props;
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <Button
          variant="contained"
          m={4}
          style={{ textTransform: "none", width: "160px" }}
        >
          Play
        </Button>
      </Grid>
      <Grid item>
        <PageingButton onClickFunk={onClickPrev}>&lt;</PageingButton>
      </Grid>
      <Grid item>
      <PageingButton onClickFunk={onClickNext}>&gt;</PageingButton>
      </Grid>
    </Grid>
  );
});
