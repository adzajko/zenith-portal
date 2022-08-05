import { useEffect, useState } from "react";

export enum SupportedThemes {
  LIGHT = "light",
  DARK = "dark"
  // Add additional themes here
}

interface ThemingOutput {
  theme: SupportedThemes;
  switchTheme: (theme: SupportedThemes) => void;
}

export const useTheming = (): ThemingOutput => {
  const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.DARK);
  const osPreference = "(prefers-color-scheme: dark)";

  const switchTheme = (newTheme: SupportedThemes) => {
    setTheme(theme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme in SupportedThemes) {
      setTheme(savedTheme as SupportedThemes);
    } else if (window.matchMedia && window.matchMedia(osPreference).matches) {
      setTheme(SupportedThemes.LIGHT);
    }
  }, []);

  return { theme, switchTheme };
};
