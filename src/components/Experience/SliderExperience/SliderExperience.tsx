import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";

export const SliderExperience = () => {
  const {
    data: {
      experience: { images },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Swiper
        effect={"fade"}
        autoplay={{ delay: 1000 }}
        speed={1000}
        modules={[EffectFade, Autoplay]}
        allowTouchMove={false}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box sx={{ height: { mobile: "300px", tablet: "400px" }, width: "100%" }}>
              <img
                src={image}
                style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "15px" }}
                alt="slide"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
