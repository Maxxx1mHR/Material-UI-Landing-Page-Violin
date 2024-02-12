import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
export const Slider = () => {
  const {
    data: {
      experience: { images },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Swiper effect={"fade"} autoplay={{ delay: 3000 }} speed={2000} loop={true} modules={[EffectFade, Autoplay]}>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box
              component="img"
              src={image}
              sx={{ height: "400px", width: "100%" }}
              // sx={{ width: "600px", height: "300px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
