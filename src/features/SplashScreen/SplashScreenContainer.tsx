import React, { useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectLoggedIn, setLoggedIn } from "../authentication/authSlice";

const SplashScreen = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "5rem auto",
  border: `2px solid ${theme.themedPalette.primary}`,
  boxShadows: theme.shadows[4],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.themedPalette.backgroundAlt
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontWeight: "bold",
  color: theme.themedPalette.text,
  textAlign: "center"
}));

export function SplashScreenContainer(): JSX.Element {
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoggedIn());
    }, 5000);
  }, []);

  useEffect(() => {
    if (isLoggedIn) navigate({ pathname: "/dashboard" });
  }, [isLoggedIn]);
  return (
    <SplashScreen>
      <Title>Welcome to Zenith.</Title>
      <Title>Start your projects quickly.</Title>
    </SplashScreen>
  );
}
