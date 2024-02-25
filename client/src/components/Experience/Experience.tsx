import { Box, Typography } from "@mui/material";
import { SliderExperience } from "./SliderExperience/SliderExperience";
import { ExperienceDescription } from "./ExperienceDescription/ExperienceDescription";

import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SharedStyles } from "@utils/SharedStyles";

export const Experience = () => {
  const {
    data: {
      experience: { header, subheader, description },
    },
  } = useContext(DataContext);

  return (
    <Box component="section">
      <Typography variant="h1" sx={SharedStyles.typography.header}>
        {header}
      </Typography>
      <Typography variant="subtitle1" sx={SharedStyles.typography.subheader}>
        {subheader}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: {
            desktop: "minmax(200px, 2fr) minmax(200px, 1fr)",
            mobile: "repeat(1,minmax(200px, 1fr))",
          },
          color: "#fff",
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ ...SharedStyles.typography.description }}>
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumnStart: { desktop: 2, mobile: "unset" },
            gridRowStart: { desktop: 1, mobile: "unset" },
            gridRowEnd: { desktop: 3, mobile: "unset" },
          }}
        >
          <SliderExperience />
        </Box>
        <Box>
          <ExperienceDescription />
        </Box>
      </Box>
    </Box>
  );
};
