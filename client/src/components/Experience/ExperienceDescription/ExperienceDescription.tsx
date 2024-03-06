import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useContext } from "react";
import { DataContext } from "@context/DataContext";

export const ExperienceDescription = () => {
  // const theme = useTheme();

  const {
    data: {
      experience: { items },
    },
  } = useContext(DataContext);

  const splitIndex = Math.ceil(items.length / 2);
  const firstColumnItems = items.slice(0, splitIndex);
  const secondColumnItems = items.slice(splitIndex);

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
            <Grid container spacing={2}>
              <Grid
                mobile={12}
                laptop={6}
                sx={{ paddingBottom: { mobile: 0, laptop: 1 }, paddingTop: { mobile: 0, laptop: 1 } }}
              >
                {firstColumnItems.map((item) => (
                  <Box key={item.id} component="li">
                    <Box className="circle">
                      <Box
                        component="img"
                        src={item.icons}
                        alt="treble_clef"
                        sx={{ position: "absolute", zIndex: 2, left: "3px", top: "1px" }}
                      />
                    </Box>
                    <Typography component="div" variant="body2" sx={{ paddingLeft: "50px" }}>
                      <Box>{item.title}</Box>
                      <Box>{item.description}</Box>
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid
                mobile={12}
                laptop={6}
                sx={{ paddingBottom: { mobile: 0, laptop: 1 }, paddingTop: { mobile: 0, laptop: 1 } }}
              >
                {secondColumnItems.map((item) => (
                  <Box key={item.id} component="li">
                    <Box className="circle">
                      <Box
                        component="img"
                        src={item.icons}
                        alt="treble_clef"
                        sx={{ position: "absolute", zIndex: 2, left: "4px", top: "4px" }}
                      />
                    </Box>
                    <Typography component="div" variant="body2" sx={{ paddingLeft: "50px" }}>
                      <Box>{item.title}</Box>
                      <Box>{item.description}</Box>
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
