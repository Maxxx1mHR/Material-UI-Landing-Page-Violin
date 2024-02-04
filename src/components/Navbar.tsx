import { AppBar, Box, Container, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";

export const Navbar = () => {
  const theme = useTheme();

  const menuItems = ["Обо мне", "Продукты", "Контакты"];

  return (
    <AppBar position="sticky" sx={{ background: theme.palette.colors.backgroundColorNavigationBar }}>
      <Container sx={{ padding: { xs: "10px 10px" } }}>
        <Toolbar
          sx={{
            padding: { xs: "0" },
            minHeight: "30px",
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box component="img" sx={{ padding: 0, height: "100%" }} alt="Logo image" src="img/logo.svg" />
          <Box sx={{ display: "flex" }} component="ul">
            {menuItems.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
