import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RewardsDescriptiont } from "./RewardsDescription/RewardsDescription";
import { Slider } from "./Slider/Slider";

export const Rewards = () => {
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
        Нагады и заслуги
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}></Box>

      <Grid container spacing={2}>
        <Grid zero={12} tablet={6}>
          <Slider />
        </Grid>
        <Grid zero={12} tablet={6}>
          <RewardsDescriptiont />
        </Grid>
      </Grid>
    </Box>
  );
};
