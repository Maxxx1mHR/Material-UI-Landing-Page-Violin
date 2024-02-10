import styles from "./Navbar.module.scss";

import { Box, MenuItem, Typography } from "@mui/material";

export const Navbar = () => {
  const menuItems = ["Обо мне", "Продукты", "Контакты"];

  return (
    <Box component="nav" className={styles.nav}>
      <Box className="container">
        <Box className={styles.wrapper}>
          <Box component="img" alt="Logo image" src="img/logo.svg" className={styles.logo} />
          <Box sx={{ display: "flex" }} component="ul">
            {menuItems.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
