import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { RewardsDescription } from "./RewardsDescription/RewardsDescription";
import { Slider } from "./SliderRewards/SliderRewards";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SharedStyles } from "@utils/SharedStyles";

export const Rewards = () => {
  const {
    data: {
      rewards: { header, subheader },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Typography variant="h1" sx={SharedStyles.typography.header}>
        {header}
      </Typography>
      <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
        {subheader}
      </Typography>

      <Grid container spacing={2}>
        <Grid mobile={12} tablet={6} sx={{ order: { mobile: 2, tablet: 1 } }}>
          <Slider />
        </Grid>
        <Grid mobile={12} tablet={6} sx={{ order: { mobile: 1, tablet: 2 } }}>
          <RewardsDescription />
        </Grid>
      </Grid>
    </Box>
  );
};
