import { Box, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom, FreeMode, Thumbs } from "swiper/modules";

import { useContext } from "react";
import { DataContext } from "@context/DataContext";
import { Swiper as SwiperS } from "swiper";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { ModalMorkExampleStyles } from "./ModalWorkExampleStyles";
import { SharedStyles } from "@utils/SharedStyles";

interface MyComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  currentSlide: number;
}

export const ModalWorkExample: React.FC<MyComponentProps> = (props) => {
  const handleClose = () => {
    props.setIsModalOpen(false);
    setThumbsSwiper(null);
  };

  const {
    data: {
      workExample: { examples },
    },
  } = useContext(DataContext);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperS | null>(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));

  let slidesPerView = 2;
  if (isDesktop) {
    slidesPerView = 4;
  } else if (isLaptop) {
    slidesPerView = 3;
  }

  return (
    <Modal
      open={props.isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalMorkExampleStyles.modal}>
        <Box sx={{ position: "absolute", top: "50px", right: "50px", color: "red", zIndex: 2 }} onClick={handleClose}>
          Close
        </Box>
        <Box sx={ModalMorkExampleStyles.modal_content}>
          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Zoom]}
            zoom={true}
            initialSlide={props.currentSlide}
            className="work_example_swiper_big"
          >
            {examples.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-zoom-container">
                  <Box component="img" src={item.imageSrc} sx={{ objectFit: "contain !important" }} />
                </div>
              </SwiperSlide>
            ))}
            <IconButton className="swiper-button-prev" sx={SharedStyles.buttonPrev} />
            <IconButton className="swiper-button-next" sx={SharedStyles.buttonNext} />
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="work_example_swiper_small"
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
