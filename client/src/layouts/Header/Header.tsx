// import styles from "./Header.module.scss";
import { Stack } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import { Introduction } from "../../components/Introduction/Introduction";

const styles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("img/background/violin.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
};

export const Header = () => {
  return (
    <Stack component="header" sx={styles}>
      <Navbar />
      <Introduction />
    </Stack>
  );
};
