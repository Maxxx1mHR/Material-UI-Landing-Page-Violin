import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RewardsDescription } from "./RewardsDescription/RewardsDescription";
import { Slider } from "./Slider/Slider";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const Rewards = () => {
  const {
    data: {
      rewards: { header },
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
        <Grid zero={12} tablet={6} sx={{ order: { zero: 2, tablet: 1 } }}>
          <Slider />
        </Grid>
        <Grid zero={12} tablet={6} sx={{ order: { zero: 1, tablet: 2 } }}>
          <RewardsDescription />
        </Grid>
      </Grid>
    </Box>
  );
};