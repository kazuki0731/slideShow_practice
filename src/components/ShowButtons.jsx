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
  const { onClickPlay, onClickPrev, onClickNext, play } = props;
  
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={onClickPlay}
        >
          {play ? <span>Play</span>: <span>Pause</span> }
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
