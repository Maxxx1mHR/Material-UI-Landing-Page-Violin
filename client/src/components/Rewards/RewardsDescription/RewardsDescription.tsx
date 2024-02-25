import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";

export const RewardsDescription = () => {
  const {
    data: {
      rewards: { items },
    },
  } = useContext(DataContext);
  return (
    <Box
      component="ul"
      sx={{
        color: "#fff",
        listStyleType: "none",
      }}
    >
      {items.map((item) => (
        <Box key={item.id} component="li" className="circle_connection">
          <Box sx={{ paddingLeft: "20px" }}>
            <Box className="circle circle_small">{item.title}</Box>
            <Box>{item.description}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
