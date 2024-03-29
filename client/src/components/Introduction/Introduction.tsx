import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { IntroductionStyles } from "./IntroductionStyles";
import { SharedStyles } from "@utils/SharedStyles";

export const Introduction = () => {
  const {
    data: {
      introduction: { header, subheader, description, imagePath, imageAlt },
    },
  } = useContext(DataContext);

  return (
    <Box component="section" sx={IntroductionStyles.wrapper} className="container wrapper">
      <Grid container spacing={2}>
        <Grid mobile={12} laptop={7}>
          <Box>
            <Typography variant="h1" sx={{ ...IntroductionStyles.header, ...SharedStyles.typography.header }}>
              {header}
            </Typography>
            <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
              {subheader}
            </Typography>

            <Typography
              variant="body2"
              sx={{ ...SharedStyles.typography.description, paddingBottom: { laptop: "20px" } }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid mobile={12} laptop={5}>
          <Box sx={IntroductionStyles.imageWrapper}>
            <Box component="img" sx={IntroductionStyles.image} alt={imageAlt} src={imagePath} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
