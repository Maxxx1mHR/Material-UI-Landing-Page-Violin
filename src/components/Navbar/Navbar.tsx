import { Box, MenuItem, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "@context/DataContext";
import { NavbarStyle } from "./NavbarStyles";
import { LogoItem } from "./LogoItem";

export const Navbar = () => {
  const {
    data: {
      navigation: { logoPath, logoAlt, logoTitleMale, logoTitleFemale, items },
    },
  } = useContext(DataContext);

  const [isOpen, setOpen] = useState(false);

  return (
    <Box component="nav" sx={NavbarStyle.nav}>
      <Box className="container" sx={NavbarStyle.wrapper}>
        <Stack direction="row" spacing={2}>
          {/* <Box component="img" src={logoPath} alt={logoAlt} sx={NavbarStyle.logo} /> */}
          <LogoItem fill={isOpen ? "black" : "white"} height="4rem" style={{ zIndex: 2 }} />

          <Box sx={{ ...NavbarStyle.logoTitle, ...(isOpen ? NavbarStyle.mobile_menu_color : null) }}>
            {logoTitleMale}&{logoTitleFemale}
          </Box>
        </Stack>
        <Stack
          direction="row"
          component="ul"
          sx={{
            ...NavbarStyle.listWrapper,
            ...(isOpen ? NavbarStyle.active_menu : null),
            ...(isOpen ? NavbarStyle.mobile_menu_color : null),
          }}
        >
          {items.map((item) => (
            <MenuItem key={item} sx={NavbarStyle.listItem}>
              <Typography sx={NavbarStyle.fontStyle}>{item}</Typography>
            </MenuItem>
          ))}
        </Stack>
        <Box
          sx={NavbarStyle.hamburger_lines}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <Box component="span" sx={NavbarStyle.line}></Box>
          <Box component="span" sx={NavbarStyle.line}></Box>
          <Box component="span" sx={NavbarStyle.line}></Box>
        </Box>
      </Box>
    </Box>
  );
};
