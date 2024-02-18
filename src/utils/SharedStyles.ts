export const SharedStyles = {
  typography: {
    header: {
      paddingTop: "50px",
      fontSize: { mobile: "26px", tablet: "36px" },
      color: "#fff",
    },
    subheader: {
      fontSize: { mobile: "20px", tablet: "26px" },
      color: "#fff",
      marginBottom: "20px",
    },
    description: {
      fontSize: { mobile: "14px", tablet: "16px" },
      color: "#fff",
    },
  },
  buttonPrev: {
    position: "absolute",
    left: 0,
    transform: "translateY(-50%)",
    color: "orange",
    display: { desktop_large: "inline-flex", mobile: "none" },
  },
  buttonNext: {
    position: "absolute",
    right: 0,
    transform: "translateY(-50%)",
    color: "orange",
    display: { desktop_large: "inline-flex", mobile: "none" },
  },
};
