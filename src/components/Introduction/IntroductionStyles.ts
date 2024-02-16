export const IntroductionStyles = {
  wrapper: {
    position: "relative",
    paddingTop: "68px",
    minHeight: "400px",
  },
  header: {
    paddingTop: "50px",
    fontSize: { mobile: "26px", tablet: "36px" },
  },
  subheader: {
    fontSize: { mobile: "20px", tablet: "26px" },
  },
  description: {
    fontSize: { mobile: "14px", tablet: "16px" },
  },
  imageWrapper: {
    height: { mobile: "300px", laptop: "350px" },
  },
  image: {
    position: "absolute",
    height: "350px",

    bottom: "-45px",
    right: { mobile: "50%", laptop: "0" },

    transform: { mobile: "translateX(50%)", laptop: "unset" },
  },
};
