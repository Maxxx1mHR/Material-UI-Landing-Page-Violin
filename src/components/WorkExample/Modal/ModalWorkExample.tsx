import { Box, Button, Card, CardContent, CardMedia, Modal, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from "swiper/modules";

import { useContext } from "react";
import { DataContext } from "@context/DataContext";

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
  };

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

  return (
    <div>
      <StyledModal
        open={props.isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            maxWidth: "50%",
            maxHeight: "50%",
            width: "auto",
            height: "auto",
            overflow: "hidden",
            position: "relative",
            padding: "20px",
          }}
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            loop={true}
            navigation
            modules={[EffectCube, Pagination, Navigation]}
            initialSlide={props.currentSlide}
          >
            {examples.map((item) => (
              <SwiperSlide key={item.id}>
                <Card sx={{ maxWidth: "100%", width: "800px", objectFit: "contain" }}>
                  <CardMedia sx={{ height: 800 }} image={item.imageSrc} title={item.title} />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </StyledModal>
    </div>
  );
};
