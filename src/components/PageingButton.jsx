import { Button } from "@material-ui/core";

export const PageingButton = (props) => {
  const { children, onClickFunk } = props;
  return (
    <Button variant="contained" style={{ width: "80px" }} onClick={onClickFunk}>
      {children}
    </Button>
  );
};
