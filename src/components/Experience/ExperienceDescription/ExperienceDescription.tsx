import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useTheme } from "@mui/material";

import { useContext } from "react";
import { DataContext } from "@context/DataContext";

export const ExperienceDescription = () => {
  // const theme = useTheme();

  const {
    data: {
      experience: { items },
    },
  } = useContext(DataContext);

  return (
    <>
      <Box component="section">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="ul"
            sx={{
              color: "#fff",
              listStyleType: "none",
            }}
          >
            {items.map((item) => (
              <Box
                key={item.id}
                component="li"
                sx={{
                  position: "relative",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    width: "2px",
                    height: "100%",
                    backgroundColor: "#fff",
                  },
                }}
              >
                <Box sx={{ paddingLeft: "20px" }}>
                  <Box
                    sx={{
                      position: "relative",
                      ":before": {
                        content: "''",
                        position: "absolute",
                        left: "-25px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                      },
                    }}
                  >
                    {item.title}
                  </Box>
                  <Box>{item.description}</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
