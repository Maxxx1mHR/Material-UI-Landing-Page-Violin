import { Box, Paper, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export const ProvideServices = () => {
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
        С чем можем помочь
      </Typography>
      <Grid container spacing={2}>
        <Grid zero={12} tablet={6} sx={{ paddingBottom: { zero: 0, tablet: 1 } }}>
          <Box
            component="ul"
            sx={{
              color: "#fff",
              listStyleType: "none",
            }}
          >
            <Box component="li">
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
            <Box component="li">
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid zero={12} tablet={6} sx={{ paddingTop: { zero: 0, tablet: 1 } }}>
          <Box
            component="ul"
            sx={{
              color: "#fff",
              listStyleType: "none",
            }}
          >
            <Box component="li">
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
            <Box component="li">
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
