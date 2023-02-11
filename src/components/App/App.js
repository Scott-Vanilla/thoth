import { GeistProvider, CssBaseline } from "@geist-ui/core";
import React from "react";

import "../../index.scss";
import AppRouter from "./AppRouter";

export const App = () => {
  return (
    <GeistProvider>
      <CssBaseline />
      <div className="App">
        <AppRouter />
      </div>
    </GeistProvider>
  );
};

export default App;
