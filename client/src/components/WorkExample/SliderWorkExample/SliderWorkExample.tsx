import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from "swiper/modules";
import { ModalWorkExample } from "../Modal/ModalWorkExample";

import { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { SliderWorkExampleStyles } from "./SliderWorkExampleStyles";
import { SharedStyles } from "@utils/SharedStyles";

export const SliderWorkExample = () => {
  const {
    data: {
      workExample: { examples },
    },
  } = useContext(DataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const swiperRefLocal = useRef<SwiperRef | null>(null);

  useEffect(() => {
    const swiper = swiperRefLocal.current?.swiper;
    if (swiper) {
      if (isModalOpen) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [isModalOpen]);

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
        autoplay={{ delay: 3000 }}
        breakpoints={SliderWorkExampleStyles.breakpoints}
        coverflowEffect={{
          slideShadows: false,
        }}
      >
        {examples.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => {
              setCurrentSlide(Number(item.id));
              handleOpenModal();
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
        <IconButton className="swiper-button-prev" sx={SharedStyles.buttonPrev} />
        <IconButton className="swiper-button-next" sx={SharedStyles.buttonNext} />
        <Box className="swiper-pagination" sx={SliderWorkExampleStyles.pagination}></Box>
      </Swiper>
      <ModalWorkExample isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentSlide={currentSlide} />
    </>
  );
};
