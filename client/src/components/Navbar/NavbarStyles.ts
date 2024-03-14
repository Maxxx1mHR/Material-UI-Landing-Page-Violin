export const NavbarStyle = {
  nav: {
    position: "fixed",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    zIndex: "2",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },

  logoTitle: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: { mobile: "16px", laptop: "20px" },
    zIndex: "2", // Добавляем zIndex для заголовка
    fill: "red",
  },
  fontStyle: {
    fontSize: { mobile: "20px", laptop: "16px", desktop_large: "20px" },
  },
  menu: {
    position: { mobile: "fixed", laptop: "unset" },

    height: { mobile: "100vh", laptop: "unset" },

    // color: { mobile: "#000", laptop: "unset" },

    top: { mobile: "0", laptop: "unset" },

    width: { mobile: "100%", laptop: "unset" },

    left: { mobile: "-100%", laptop: "unset" },

    transition: "all 1s",

    zIndex: "1",

    // visibility: "hidden",
  },
  listWrapper: {
    position: "relative",
    flexDirection: { mobile: "column", laptop: "row" },
    justifyContent: { mobile: "center", laptop: "unset" },
    alignItems: { mobile: "center", laptop: "unset" },
    width: { mobile: "75%", laptop: "unset" },
    backgroundColor: { mobile: "#fff", laptop: "unset" },
    color: { mobile: "#000", laptop: "unset" },

    height: { mobile: "100%", laptop: "unset" },
    zIndex: "3",
  },
  listItem: {
    padding: { desktop_large: "6px 16px", mobile: "6px 6px" },
    display: { laptop: "inline-flex" },
    transition: { mobile: "all 1s" },
  },
  hamburger_lines: {
    position: "absolute",
    visibility: { mobile: "visible", laptop: "hidden" },
    top: "50%",
    transform: "translateY(-50%)",
    right: "20px",
    display: "flex",
    height: "26px",
    width: "32px",
    zIndex: "2",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  active_menu: {
    left: "0",
    // visibility: "visible",
    // opacity: 1,
  },

  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0,
    visibility: "hidden",
    backgroundColor: "black",
    transition: "all 1s",
  },
  active_overlay: {
    // transition: "all 1s",
    visibility: "visible",
    opacity: 0.6,
  },

  mobile_menu_color: {
    color: "#955900",
  },
  line: { display: "block", height: "4px", width: "100%", borderRadius: "10px", background: "#fff" },
};
