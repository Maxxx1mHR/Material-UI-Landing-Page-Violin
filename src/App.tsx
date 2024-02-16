import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { theme } from "./utils/Theme";
import { Main } from "./layouts/Main/Main";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
