import { Box, styled } from "@mui/material";
import React from "react";
import ApplicationRouter from "./router";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import { MainContainer } from "./ui/MainContainer";
import { ThemeProvider } from "./ui/theming";

const AppContainer = styled(Box)({
  height: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr auto"
});

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <AppContainer>
        <Header />
        <MainContainer>
          <ApplicationRouter />
        </MainContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
