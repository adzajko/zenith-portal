import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: theme.shadows[11],
  background: theme.themedPalette.backgroundAlt,
  borderTop: `2px solid ${theme.themedPalette.primary}`
}));

const FooterText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  textAlign: "center",
  color: theme.themedPalette.text,
  fontWeight: "bold"
}));

export function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <FooterText>Ayrenn Artoris | 2022</FooterText>
    </StyledFooter>
  );
}
