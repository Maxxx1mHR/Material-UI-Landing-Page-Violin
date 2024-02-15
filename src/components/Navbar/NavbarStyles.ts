export const NavbarStyle = {
  nav: {
    position: "fixed",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "2",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
  },
  logo: {
    height: { mobile: "4rem", laptop: "6rem" },
    transition: { mobile: "all 1s" },
    zIndex: "2",
  },
  logoTitle: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: { mobile: "1.6rem", laptop: "2rem" },
    zIndex: "2", // Добавляем zIndex для заголовка
    fill: "red",
  },
  fontStyle: {
    fontSize: { mobile: "2rem", laptop: "1.6rem", desktop_large: "2rem" },
  },
  listWrapper: {
    position: { mobile: "fixed", laptop: "unset" },
    flexDirection: { mobile: "column", laptop: "row" },
    justifyContent: { mobile: "center", laptop: "unset" },
    alignItems: { mobile: "center", laptop: "unset" },
    width: { mobile: "75%", laptop: "unset" },
    backgroundColor: { mobile: "#fff", laptop: "unset" },
    top: { mobile: "0", laptop: "unset" },
    left: { mobile: "-100%", laptop: "unset" },
    height: { mobile: "100%", laptop: "unset" },
    color: { mobile: "#000", laptop: "unset" },
    zIndex: "1",
    transition: "all 1s",
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
  },
  mobile_menu_color: {
    color: "#955900",
  },
  line: { display: "block", height: "4px", width: "100%", borderRadius: "10px", background: "#fff" },
};
