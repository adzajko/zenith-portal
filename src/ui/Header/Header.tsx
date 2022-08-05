import React from "react";
import { Box, MenuItem, styled, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import { selectActiveTheme, setActiveTheme, SupportedThemes } from "../theming/themingSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.themedPalette.backgroundAlt,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[10],
  display: "flex",
  justifyContent: "space-between"
}));

const Logo = styled("img")({
  width: "50px"
});

const OPTIONS = [
  {
    value: SupportedThemes.DARK,
    label: "Dark"
  },
  { value: SupportedThemes.LIGHT, label: "Light" }
];

const ThemeSelector = styled(TextField)(({ theme }) => ({
  width: "200px",
  "& label": {
    color: theme.themedPalette.primary
  },
  "& label.Mui-focused": {
    color: theme.themedPalette.primary
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.themedPalette.primary
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.themedPalette.primary
    },
    "&:hover fieldset": {
      borderColor: theme.themedPalette.primary
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.themedPalette.primary
    }
  }
}));

export function Header(): JSX.Element {
  const activeTheme = useAppSelector(selectActiveTheme);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveTheme(event.target.value as SupportedThemes));
    localStorage.setItem("theme", event.target.value);
  };
  return (
    <StyledHeader>
      <Logo src={logo} alt="Zenith Logo" />
      <ThemeSelector
        select
        variant="outlined"
        label="Select Theme"
        value={activeTheme}
        onChange={handleChange}>
        {OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </ThemeSelector>
    </StyledHeader>
  );
}
