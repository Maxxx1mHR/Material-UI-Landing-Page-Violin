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
          <Box component="img" src="img/rewards/1.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/2.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/3.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/4.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/5.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/6.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/7.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/8.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/9.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/10.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/11.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/12.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Box component="img" src="img/rewards/13.jpg" sx={{ width: "300px", height: "400px", background: "unset" }} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
