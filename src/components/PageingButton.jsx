import React from 'react';
import { Button, Grid } from "@material-ui/core";


export const PageingButton = (props) => {
  const { children, onClickFunk } = props;
  return (
    <div>
      <Grid item>
        <Button
          variant="contained"
          style={{ width: "80px" }}
          onClick={onClickFunk}
        >
          {children}
        </Button>
      </Grid>
    </div>
  )
}
