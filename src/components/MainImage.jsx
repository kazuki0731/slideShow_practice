import Box from "@material-ui/core/Box";

export const MainImage = (props) => {
  const { mainImage } = props;
  return (
    <Box textAlign="center" mb={0.5}>
      <img src={mainImage} width={330} alt="mainImage" />
    </Box>
  );
};
