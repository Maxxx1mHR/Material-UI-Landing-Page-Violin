import { Box } from "@mui/material";
import { Introduction } from "../../components/Introduction/Introduction";
import { Slider } from "../../components/WorkExample/Slider/Slider";
// import { About } from "../../components/Experience/ExperienceDescription/ExperienceDescription";
import { Rewards } from "../../components/Rewards/Rewards";
import { Experience } from "../../components/Experience/Experince";
import { ProvideServices } from "../../components/ProvideServices/ProvideServices";
import { Contacts } from "../../components/Contacts/Contacts";

export const Main = () => {
  return (
    <Box component="main" className="wrapper container">
      <Slider />
      <Experience />
      <Rewards />
      <ProvideServices />
      <Contacts />
    </Box>
  );
};
