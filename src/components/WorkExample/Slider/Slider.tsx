import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useTheme } from "@mui/material";
import data from "../../../../data.json";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { BasicModal } from "../Modal/ModalWorkExample";

import { useRef } from "react";

interface ViolineData {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  title: string;
}

export const Slider = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [violinData, setViolineData] = useState<ViolineData>({} as ViolineData);
  const handleOpen = () => setOpen(true);

  const swiperRefLocal = useRef<SwiperRef | null>(null);

  const handleSlideClickPuase = () => {
    swiperRefLocal.current?.swiper.autoplay?.pause();
  };
  const handleSlideClickResume = () => {
    swiperRefLocal.current?.swiper.autoplay?.resume();
  };

  return (
    <>
      <Box component="section">
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
          effect={"coverflow"}
          ref={swiperRefLocal}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          grabCursor={true}
          loop={true}
          navigation
          autoplay={{ delay: 3000 }}
          onClick={handleSlideClickPuase}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() => {
                setViolineData(item);
                setCurrentSlide(Number(item.id) - 1);
                handleOpen();
              }}
            >
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
      </Box>
      <BasicModal
        open={open}
        setOpen={setOpen}
        violinData={violinData}
        handleSlideClickResume={handleSlideClickResume}
        currentSlide={currentSlide}
      />
    </>
  );
};
