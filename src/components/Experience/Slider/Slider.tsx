import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

export const Slider = () => {
  return (
    <Box>
      <Swiper effect={"fade"} autoplay={{ delay: 3000 }} speed={2000} loop={true} modules={[EffectFade, Autoplay]}>
        <SwiperSlide>
          <Box
            component="img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            sx={{ height: "300px", width: "100%" }}
            // sx={{ width: "600px", height: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            sx={{ height: "300px", width: "100%" }}

            // sx={{ width: "600px", height: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            sx={{ height: "300px", width: "100%" }}

            // sx={{ width: "600px", height: "300px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            sx={{ height: "300px", width: "100%" }}

            // sx={{ width: "600px", height: "300px" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
