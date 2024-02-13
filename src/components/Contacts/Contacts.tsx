import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";

export const Contacts = () => {
  const {
    data: {
      contacts: { header },
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
    </Box>
  );
};
