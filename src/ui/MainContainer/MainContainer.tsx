import React from "react";
import { Box, styled } from "@mui/material";

interface MainContainerProps {
  children: React.ReactNode;
}

const StyledMainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.themedPalette.background,
  maxHeight: "100%",
  overflowY: "auto"
}));

export function MainContainer({ children }: MainContainerProps): JSX.Element {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}
