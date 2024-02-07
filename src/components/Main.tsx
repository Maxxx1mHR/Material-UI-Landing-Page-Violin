import { Box } from "@mui/material";
import { Introduction } from "./Introduction";
import { SimpleSlider } from "./Slider";
import { About } from "./About";

export const Main = () => {
  return (
    <Box component="main">
      <Introduction />
      <SimpleSlider />
      <About />
    </Box>
  );
};
