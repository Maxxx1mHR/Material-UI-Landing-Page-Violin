import { Box } from "@mui/material";
import { Rewards } from "../../components/Rewards/Rewards";
import { Experience } from "../../components/Experience/Experience";
import { ProvideServices } from "../../components/ProvideServices/ProvideServices";
import { Contacts } from "../../components/Contacts/Contacts";
import { WorkExample } from "@components/WorkExample/WorkExample";
import { Footer } from "@layouts/Footer/Footer";

const styles = {
  // color: "#fff",
  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../img/background/girl.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const Main = () => {
  return (
    <Box component="main" sx={styles}>
      <Box component="section" className="wrapper container">
        <WorkExample />
        <Experience />
        <Rewards />
        <ProvideServices />
        <Contacts />
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};
