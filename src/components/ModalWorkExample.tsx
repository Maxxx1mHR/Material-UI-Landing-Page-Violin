import { Box, Button, Card, CardContent, CardMedia, Modal, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from "swiper/modules";

import data from "../../data.json";

interface MyComponentProps {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  violinData: {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    title: string;
  };
  handleSlideClickResume: () => void;
  currentSlide: number;
}

export const BasicModal: React.FC<MyComponentProps> = (props) => {
  const handleClose = () => {
    props.setOpen(false);
    props.handleSlideClickResume();
  };

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div>
      <StyledModal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            maxWidth: "800px",
            maxHeight: "800px",
            width: "auto",
            height: "auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* <Box component="img" src={props.violinData.imageSrc} width="100%" height="100%" /> */}
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
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Card sx={{ maxWidth: "100%", width: "800px", objectFit: "contain" }}>
                  <CardMedia sx={{ height: 800 }} image={item.imageSrc} title={item.title} />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent> */}
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </StyledModal>
    </div>
  );
};
