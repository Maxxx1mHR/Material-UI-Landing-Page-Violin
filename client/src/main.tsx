import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { DataContentProvider } from "./context/DataContext.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "@utils/Theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <DataContentProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </DataContentProvider>
  //  </React.StrictMode>
);
