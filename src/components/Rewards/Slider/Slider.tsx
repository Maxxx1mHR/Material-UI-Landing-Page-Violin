import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, EffectCards } from "swiper/modules";
import { Box } from "@mui/material";

export const Slider = () => {
  return (
    <Box>
      <Swiper
        grabCursor={true}
        // effect={"creative"}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     origin: "left center",
        //     translate: ["-5%", 0, -200],
        //     rotate: [0, 100, 0],
        //   },
        //   next: {
        //     origin: "right center",
        //     translate: ["5%", 0, -200],
        //     rotate: [0, -100, 0],
        //   },
        // }}
        effect={"cards"}
        modules={[EffectCards]}
        // className="mySwiper"
        // modules={[EffectCreative]}
      >
        <SwiperSlide className={styles.slide}>
          <Box
            component="img"
            src="img/sliderWorkExample/alt.jpg"
            sx={{ width: "300px", height: "400px", background: "unset" }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box
            component="img"
            src="img/sliderWorkExample/feniks.jpg"
            sx={{ width: "300px", height: "400px", background: "unset" }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box
            component="img"
            src="img/sliderWorkExample/violin2.jpg"
            sx={{ width: "300px", height: "400px", background: "unset" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
