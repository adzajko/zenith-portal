import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: theme.shadows[11],
  background: "#101010",
  borderTop: `2px solid ${theme.palette.warning.dark}`
}));

const FooterText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  textAlign: "center",
  color: theme.palette.common.white,
  fontWeight: "bold"
}));

export function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <FooterText>Antonij Djajkoski | 2022</FooterText>
    </StyledFooter>
  );
}
