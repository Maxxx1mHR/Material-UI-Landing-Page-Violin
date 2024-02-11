import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { theme } from "./components/Theme";
import { Main } from "./layouts/Main/Main";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Navbar /> */}
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
