import { Box, Stack, Typography } from "@mui/material";
import { Slider } from "./Slider/Slider";
import { ExperienceDescription } from "./ExperienceDescription/ExperienceDescription";
import Grid from "@mui/material/Unstable_Grid2";

export const Experience = () => {
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
        Огромный опыт
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>

      <Grid container spacing={2}>
        <Grid zero={12} tablet={6}>
          <ExperienceDescription />
        </Grid>
        <Grid zero={12} tablet={6}>
          <Slider />
        </Grid>
      </Grid>
    </Box>
  );
};
