export const SliderWorkExampleStyles = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  cardHeader: {
    fontSize: { mobile: "20px", tablet: "24px" },
    color: "#000",
  },
  cardDescription: {
    fontSize: { mobile: "12px", tablet: "14px", laptop: "16px" },
    color: "orange",
  },
  card: {
    borderRadius: "20px",
    width: "100%",
    margin: "auto",
  },
  cardImage: {
    height: { mobile: 400, laptop: 500 },
    minWidth: "350px",
  },
  // buttonPrev: {
  //   position: "absolute",
  //   left: 0,
  //   transform: "translateY(-50%)",
  //   color: "orange",
  //   display: { desktop_large: "inline-flex", mobile: "none" },
  // },
  // buttonNext: {
  //   position: "absolute",
  //   right: 0,
  //   transform: "translateY(-50%)",
  //   color: "orange",
  //   display: { desktop_large: "inline-flex", mobile: "none" },
  // },
  pagination: {
    display: { desktop_large: "none" },
    span: {
      background: "orange",
    },
  },
};
