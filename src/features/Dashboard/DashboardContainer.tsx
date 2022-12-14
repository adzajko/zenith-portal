import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledDashboardContainer = styled(Box)({
  display: "grid",
  placeItems: "center",
  placeContent: "center",
  height: "100%"
});

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.themedPalette.text,
  textAlign: "center",
  fontWeight: "bold"
}));

function DashboardContainer(): JSX.Element {
  return (
    <StyledDashboardContainer>
      <Title>Skip the boring setup steps.</Title>
      <Title>Straight to making your projects.</Title>
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;
