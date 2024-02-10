import { Box } from "@mui/material";
import { Introduction } from "../../components/Introduction/Introduction";
import { Slider } from "../../components/WorkExample/Slider/Slider";
// import { About } from "../../components/Experience/ExperienceDescription/ExperienceDescription";
import { Rewards } from "../../components/Rewards/Rewards";
import { Services } from "../../components/Services";
import { Experience } from "../../components/Experience/Experince";

export const Main = () => {
  return (
    <Box component="main" className="container wrapper">
      {/* <Introduction /> */}
      <Slider />
      <Experience />
      {/* <About /> */}
      <Rewards />
      <Services />
    </Box>
  );
};
