import { Box, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export const Services = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} sx={{ padding: { xs: 0, md: 1 } }}>
          <Box
            component="ul"
            sx={{
              color: "#fff",
              listStyleType: "none",
            }}
          >
            <Box
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
            <Box
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

        <Grid xs={12} md={6} sx={{ padding: { xs: 0, md: 1 } }}>
          <Box
            component="ul"
            sx={{
              color: "#fff",
              listStyleType: "none",
            }}
          >
            <Box
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
                  Заголовок
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam beatae
                  esse debitis explicabo est a obcaecati.
                </Box>
              </Box>
            </Box>
            <Box
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
