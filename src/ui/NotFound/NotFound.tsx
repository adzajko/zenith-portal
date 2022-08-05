import React from "react";
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import background from "../../assets/404.png";

const Container = styled(Box)({
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  position: "relative",
  height: "100%"
});

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.themedPalette.primary,
  color: theme.palette.common.white,
  position: "absolute",
  width: "150px",
  bottom: "25%",
  left: "25%",
  "&:hover": {
    background: theme.themedPalette.primary
  }
}));

export function NotFound(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Container>
      <StyledButton
        variant="contained"
        onClick={() => navigate({ pathname: "/" })}
        endIcon={<ArrowBack />}>
        Back
      </StyledButton>
    </Container>
  );
}
