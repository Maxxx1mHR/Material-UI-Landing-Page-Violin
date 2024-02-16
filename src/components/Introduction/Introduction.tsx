import styles from "./Introduction.module.scss";
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";

const imageStyles = {
  position: "absolute",
  height: "100%",
  top: "76px",
  left: "50%",
  transform: "translateX(-50%)",
};

export const Introduction = () => {
  const theme = useTheme();

  const {
    data: {
      introduction: { header, subheader, description },
    },
  } = useContext(DataContext);

  return (
    <Box component="section" sx={{ position: "relative", paddingTop: "68px", minHeight: "500px" }}>
      <Box className="container wrapper">
        <Grid container spacing={2}>
          <Grid tablet={12} laptop={8}>
            <Box>
              <Typography variant="h1" sx={{ fontSize: "40px", textAlign: "center", paddingTop: "50px" }}>
                {header}
              </Typography>
              <Typography sx={{ fontSize: "40px", textAlign: "center" }}>{subheader}</Typography>

              <Box sx={{ textAlign: "justify" }}>{description}</Box>
            </Box>
          </Grid>
          <Grid tablet={12} laptop={4}>
            <Box sx={{ position: "relative", height: "400px" }}>
              <Box component="img" sx={imageStyles} alt="Svetlana Photo" src="img/sveta.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
