import { Box } from "@mui/material";
import { Introduction } from "./Introduction";
import { SimpleSlider } from "./Slider";

export const Main = () => {
  return (
    <Box component="main">
      <Introduction />
      <SimpleSlider />
    </Box>
  );
};
