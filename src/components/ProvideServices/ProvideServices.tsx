import { Box, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const ProvideServices = () => {
  const {
    data: {
      provideServices: { header, items },
    },
  } = useContext(DataContext);

  const splitIndex = Math.ceil(items.length / 2);
  const firstColumnItems = items.slice(0, splitIndex);
  const secondColumnItems = items.slice(splitIndex);

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
      <Box
        component="ul"
        sx={{
          color: "#fff",
          listStyleType: "none",
        }}
      >
        <Grid container spacing={2}>
          <Grid zero={12} tablet={6} sx={{ paddingBottom: { zero: 0, tablet: 1 } }}>
            {firstColumnItems.map((item) => (
              <Box component="li" key={item.id}>
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
          </Grid>
          <Grid zero={12} tablet={6} sx={{ paddingBottom: { zero: 0, tablet: 1 } }}>
            {secondColumnItems.map((item) => (
              <Box component="li" key={item.id}>
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
