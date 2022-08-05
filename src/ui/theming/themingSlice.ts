import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export enum SupportedThemes {
  LIGHT = "light",
  DARK = "dark"
  // Add additional themes here
}

interface ThemingState {
  activeTheme: SupportedThemes;
}

const initialState: ThemingState = {
  activeTheme: SupportedThemes.DARK
};

const themingSlice = createSlice({
  name: "Theming",
  initialState,
  reducers: {
    setActiveTheme: (state, { payload }: PayloadAction<SupportedThemes>) => {
      state.activeTheme = payload;
    }
  }
});

export const { setActiveTheme } = themingSlice.actions;

export const selectActiveTheme = ({ theme }: RootState) => theme.activeTheme;

export default themingSlice.reducer;
