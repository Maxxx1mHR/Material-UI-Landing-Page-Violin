import styles from "./Header.module.scss";
import { Box, Stack } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import { Introduction } from "../../components/Introduction/Introduction";

export const Header = () => {
  return (
    <Stack component="header" className={styles.header}>
      <Navbar />
      <Introduction />
    </Stack>
  );
};
