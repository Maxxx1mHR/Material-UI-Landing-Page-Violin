import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useTheme } from "@mui/material";
import data from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

export const SimpleSlider = () => {
  const theme = useTheme();
  return (
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
          Ручное производство
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay={{ delay: 4000 }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia sx={{ height: 500 }} image={item.imageSrc} title={item.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};
