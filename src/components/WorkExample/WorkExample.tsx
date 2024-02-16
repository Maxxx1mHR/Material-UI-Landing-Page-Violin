import { Box, Typography } from "@mui/material";
import { SliderWorkExample } from "./SliderWorkExample/SliderWorkExample";
import { DataContext } from "@context/DataContext";
import { useContext } from "react";
import { SharedStyles } from "@utils/SharedStyles";

export const WorkExample = () => {
  const {
    data: {
      workExample: { header, subheader },
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
      <SliderWorkExample />
    </Box>
  );
};
