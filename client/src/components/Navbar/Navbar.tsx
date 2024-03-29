import { Box, MenuItem, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "@context/DataContext";
import { NavbarStyle } from "./NavbarStyles";
import { LogoItem } from "./LogoItem";

export const Navbar = () => {
  const {
    data: {
      navigation: { logoTitleMale, logoTitleFemale, items },
    },
  } = useContext(DataContext);

  const [isOpen, setOpen] = useState(false);

  if (!isOpen) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <Box component="nav" sx={NavbarStyle.nav}>
      <Box className="container" sx={NavbarStyle.wrapper}>
        <Stack direction="row" spacing={2}>
          <LogoItem fill={isOpen ? "black" : "white"} height="4rem" style={{ zIndex: 2 }} />

          <Box sx={{ ...NavbarStyle.logoTitle, ...(isOpen ? NavbarStyle.mobile_menu_color : null) }}>
            {logoTitleMale}&{logoTitleFemale}
          </Box>
        </Stack>
        <Box sx={{ ...NavbarStyle.menu, ...(isOpen && NavbarStyle.active_menu) }}>
          <Stack direction="row" component="ul" sx={NavbarStyle.listWrapper}>
            {items.map((item) => (
              <MenuItem key={item} sx={NavbarStyle.listItem}>
                <Typography sx={NavbarStyle.fontStyle}>{item}</Typography>
              </MenuItem>
            ))}
          </Stack>
          <Box
            sx={{
              ...NavbarStyle.overlay,
              ...(isOpen && NavbarStyle.active_overlay),
            }}
            onClick={() => {
              setOpen(!isOpen);
            }}
          ></Box>
        </Box>
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
