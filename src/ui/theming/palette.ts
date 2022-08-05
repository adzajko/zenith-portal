export interface Palette {
  primary: string;
  secondary: string;
  background: string;
  backgroundAlt: string;
  text: string;
}

export const lightPalette: Palette = {
  primary: "#ff6d5b",
  secondary: "#FAE3C6",
  background: "white",
  backgroundAlt: "#f5f5f5",
  text: "#0C0C0C"
};

export const darkPalette: Palette = {
  primary: "#ff6d5b",
  secondary: "#FAE3C6",
  background: "#212121",
  backgroundAlt: "#0C0C0C",
  text: "white"
};
