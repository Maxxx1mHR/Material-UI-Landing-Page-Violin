import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { ModalWorkExample } from "../Modal/ModalWorkExample";

import { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SliderWorkExampleStyles } from "./SliderWorkExampleStyles";

interface ViolineData {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  title: string;
}

export const SliderWorkExample = () => {
  const {
    data: {
      workExample: { examples },
    },
  } = useContext(DataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [violinData, setViolineData] = useState<ViolineData>({} as ViolineData);

  const handleOpenModal = (item: number) => {
    // console.log("handleOpen cur", currentSlide);
    setCurrentSlide(item);
    setIsModalOpen(true);
  };

  const swiperRefLocal = useRef<SwiperRef | null>(null);

  // const handleSlideClickPause = () => {
  //   console.log("123");
  //   swiperRefLocal.current?.swiper.autoplay?.pause();
  // };
  // const handleSlideClickResume = () => {
  //   swiperRefLocal.current?.swiper.autoplay?.resume();
  // };

  useEffect(() => {
    const swiper = swiperRefLocal.current?.swiper;
    if (swiper) {
      if (isModalOpen) {
        // console.log("cur", currentSlide);
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [isModalOpen]);

  const theme = useTheme();
  return (
    <>
      <Swiper
        effect={"coverflow"}
        ref={swiperRefLocal}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        grabCursor={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
        }}
        // autoplay={{ delay: 1000 }}
        // onClick={() => handleSlideClickPause()}
        // onClick={() => {
        //   setTimeout(() => {
        //     handleSlideClickPause();
        //   }, 100);
        // }}
        // onClick={handleSlideClickPause}
        // onClick={() => {
        //   console.log("123");
        //   handleOpenModal();
        // }}
        breakpoints={SliderWorkExampleStyles.breakpoints}
        coverflowEffect={{
          slideShadows: false,
        }}
      >
        {examples.map((item, index) => (
          <SwiperSlide
            key={item.id}
            onClick={() => {
              // setViolineData(item);
              // setCurrentSlide(Number(item.id));
              handleOpenModal(Number(item.id));
              // setTimeout(() => {
              //   // swiperRefLocal.current?.swiper.autoplay.pause();
              // }, 100); // Добавляем задержку перед паузой
            }}
          >
            <Card sx={SliderWorkExampleStyles.card}>
              <CardMedia sx={SliderWorkExampleStyles.cardImage} image={item.imageSrc} title={item.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={SliderWorkExampleStyles.cardHeader}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={SliderWorkExampleStyles.cardDescription}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        <IconButton className="swiper-button-prev" sx={SliderWorkExampleStyles.buttonPrev} />
        <IconButton className="swiper-button-next" sx={SliderWorkExampleStyles.buttonNext}></IconButton>
        <Box className="swiper-pagination" sx={SliderWorkExampleStyles.pagination}></Box>
      </Swiper>
      <ModalWorkExample
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        violinData={violinData}
        // handleSlideClickResume={handleSlideClickResume}
        currentSlide={currentSlide}
      />
    </>
  );
};
