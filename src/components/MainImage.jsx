import Box from "@material-ui/core/Box";
import { memo } from "react";

export const MainImage = memo((props) => {
  const { mainImage } = props;
  return (
    <Box textAlign="center" mb={0.5}>
      <img src={mainImage} width={330} alt="現在選択されている画像" />
    </Box>
  );
});
