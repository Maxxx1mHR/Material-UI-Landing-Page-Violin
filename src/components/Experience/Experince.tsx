import { Box, Stack, Typography } from "@mui/material";
import { Slider } from "./Slider/Slider";
import { ExperienceDescription } from "./ExperienceDescription/ExperienceDescription";
import Grid from "@mui/material/Unstable_Grid2";

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const Experience = () => {
  const {
    data: {
      experience: { header },
    },
  } = useContext(DataContext);

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {header}
      </Typography>

      {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box> */}

      <Grid container spacing={2}>
        <Grid zero={12} tablet={7}>
          <ExperienceDescription />
        </Grid>
        <Grid zero={12} tablet={5}>
          <Slider />
        </Grid>
      </Grid>
    </Box>
  );
};
