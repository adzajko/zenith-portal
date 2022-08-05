import { Box, styled } from "@mui/material";
import React from "react";
import ApplicationRouter from "./router";

const AppContainer = styled(Box)({
  height: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr auto"
});

function App(): JSX.Element {
  return (
    <AppContainer>
      <ApplicationRouter />
    </AppContainer>
  );
}

export default App;
