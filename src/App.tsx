import React from "react";

import Webvox from "./components/template/Webvox";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Webvox />
    </ThemeProvider>
  );
};

export default App;
