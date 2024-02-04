import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { theme } from "./components/Theme";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
