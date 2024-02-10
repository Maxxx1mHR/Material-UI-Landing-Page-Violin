import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useTheme } from "@mui/material";

export const ExperienceDescription = () => {
  // const theme = useTheme();

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
        </Box>
      </Box>
    </>
  );
};
