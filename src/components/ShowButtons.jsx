import { Button, Grid, makeStyles } from "@material-ui/core";
import { memo } from "react";
import { PageingButton } from "./PageingButton";

const useStyles = makeStyles({
  buttonStyle: {
    textTransform: "none",
    width: "160px",
  },
});

export const ShowButtons = memo((props) => {
  const { onClickPrev, onClickNext } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <Button variant="contained" className={classes.buttonStyle}>
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
