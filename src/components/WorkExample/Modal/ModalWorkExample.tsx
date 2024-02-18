import { Box, Button, Card, CardContent, CardMedia, Modal, Typography, styled } from "@mui/material";
import { MouseEvent, MouseEventHandler, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, Zoom, FreeMode, Thumbs } from "swiper/modules";

import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { Swiper as SwiperS } from "swiper";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.scss";

interface MyComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  violinData: {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    title: string;
  };
  // handleSlideClickResume: () => void;
  currentSlide: number;
}

export const ModalWorkExample: React.FC<MyComponentProps> = (props) => {
  const handleClose = () => {
    props.setIsModalOpen(false);
    // props.handleSlideClickResume();
    setThumbsSwiper(null);
  };
  console.log("in other comp", props.currentSlide);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const {
    data: {
      workExample: { examples },
    },
  } = useContext(DataContext);

  console.log("ТЕКУЩИЙ СЛАЙД", props.currentSlide);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperS | null>(null);
  console.log("))))", thumbsSwiper);
  return (
    // <div>
    <Modal
      open={props.isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box className={props.isModalOpen ? "modal modal_active" : "modal"}> */}
      <Box className="modal">
        <Box sx={{ position: "absolute", top: "50px", right: "50px", color: "red", zIndex: 2 }} onClick={handleClose}>
          Close
        </Box>
        {/* <Box className="modal_content" onClick={(e) => e.stopPropagation()}> */}
        <Box className="modal_content">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Zoom]}
            zoom={true}
            initialSlide={props.currentSlide}
            className="mySwiper2"
          >
            {examples.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-zoom-container">
                  <Box component="img" src={item.imageSrc} sx={{ objectFit: "contain !important" }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {examples.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <Box component="img" src={item.imageSrc} sx={{ objectFit: "contain" }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Modal>
  );
};
