import React from "react";

import Paperbase from "./components/Paperbase";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paperbase />
    </ThemeProvider>
  );
};

export default App;
