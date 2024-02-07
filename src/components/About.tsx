import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useTheme } from "@mui/material";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const About = () => {
  const theme = useTheme();

  return (
    <>
      <Box component="section">
        <Container sx={{ maxWidth: { xs: "1920px" }, position: "relative" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "center",
              color: theme.palette.colors.textColor,
              marginBottom: "20px",
            }}
          >
            Огромный опыт
          </Typography>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam
                    beatae esse debitis explicabo est a obcaecati.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam
                    beatae esse debitis explicabo est a obcaecati.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam
                    beatae esse debitis explicabo est a obcaecati.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore adipisci repellat nam
                    beatae esse debitis explicabo est a obcaecati.
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* <Box>Картинки слайдр</Box> */}
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000 }}
              speed={2000}
              loop={true}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Box>
    </>
  );
};
