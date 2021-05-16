import { Button, Grid } from "@material-ui/core";

export const ShowButtons = (props) => {
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
        <Button
          variant="contained"
          style={{ width: "80px" }}
          onClick={onClickPrev}
        >
          &lt;
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          style={{ width: "80px" }}
          onClick={onClickNext}
        >
          &gt;
        </Button>
      </Grid>
    </Grid>
  );
};
