import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "@context/DataContext";
export const Slider = () => {
  const {
    data: {
      rewards: { images },
    },
  } = useContext(DataContext);
  return (
    <Box>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {images.map((image) => (
          <SwiperSlide className={styles.slide} key={image}>
            <Box component="img" src={image} sx={{ width: "300px", height: "400px", background: "unset" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
