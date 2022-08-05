import { createTheme, ThemeProvider as MaterialThemeProvider } from "@mui/material";
import React from "react";
import { SupportedThemes, useTheming } from "../../hooks/useTheming";
import { darkPalette, lightPalette, Palette } from "./palette";

declare module "@mui/material/styles" {
  interface Theme {
    themedPalette: Palette;
  }

  interface ThemeOptions {
    themedPalette: Palette;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { theme } = useTheming();
  const appTheme = createTheme({
    themedPalette: theme === SupportedThemes.DARK ? darkPalette : lightPalette
  });
  return <MaterialThemeProvider theme={appTheme}>{children}</MaterialThemeProvider>;
}
