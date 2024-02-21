import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SharedStyles } from "@utils/SharedStyles";

export const Contacts = () => {
  const {
    data: {
      contacts: { header, subheader },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          mobile={12}
          laptop={4}
          sx={{
            order: { mobile: 2, laptop: 1 },
          }}
        >
          <Box sx={{ position: "relative", height: "500px" }}>
            <Box component="img" src="img/sveta_contacts2.png" sx={{ position: "absolute", height: "100%" }}></Box>
          </Box>
        </Grid>
        <Grid mobile={12} laptop={8} sx={{ order: { mobile: 1, laptop: 2 } }}>
          <Typography variant="h1" sx={SharedStyles.typography.header}>
            {header}
          </Typography>
          <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
            {subheader}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
