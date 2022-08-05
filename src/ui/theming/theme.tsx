import { createTheme, ThemeProvider as MaterialThemeProvider, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { darkPalette, lightPalette, Palette } from "./palette";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectActiveTheme, setActiveTheme, SupportedThemes } from "./themingSlice";

declare module "@mui/material/styles" {
  interface Theme {
    themedPalette: Palette;
  }

  interface ThemeOptions {
    themedPalette: Palette;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const activeTheme = useAppSelector(selectActiveTheme);
  const dispatch = useAppDispatch();
  const prefersLight = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      dispatch(setActiveTheme(savedTheme as SupportedThemes));
    } else {
      dispatch(setActiveTheme(prefersLight ? SupportedThemes.LIGHT : SupportedThemes.DARK));
    }
  }, []);

  const appTheme = useMemo(
    () =>
      createTheme({
        themedPalette: activeTheme === SupportedThemes.DARK ? darkPalette : lightPalette
      }),
    [activeTheme]
  );
  return <MaterialThemeProvider theme={appTheme}>{children}</MaterialThemeProvider>;
}
