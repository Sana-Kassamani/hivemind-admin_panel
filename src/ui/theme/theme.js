import { createTheme } from "@mui/material";

export const colors = {
  primary: "#FAD02C",
  primaryLight: "#FEF2C2",
  primaryDark: "#EDBE06",
  secondary: "#4F1308",
  textColor: "#050F24",
  backgroundColor: "#F0F2F5",
  cardColor: "#fcfcfc",
  dividerColor: "#E1E1E1",
};
const themeSettings = () => {
  return {
    palette: {
      primary: {
        main: colors.primary,
        light: colors.primaryLight,
        dark: colors.primaryDark,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.backgroundColor,
      },
      neutral: {
        main: colors.cardColor,
      },
    },
    typography: {
      fontFamily: "Comme",
      fontSize: 18,
      h1: {
        fontFamily: "Tomorrow",
        fontSize: 24,
      },
      h2: {
        fontFamily: "Comme",
        fontSize: 20,
      },
      h3: {
        fontFamily: "Comme",
        fontSize: 18,
      },
      h4: {
        fontFamily: "Comme",
        fontSize: 18,
      },
      h5: {
        fontFamily: "Comme",
        fontSize: 16,
      },
      h6: {
        fontFamily: "Comme",
        fontSize: 12,
      },
    },
  };
};

export const theme = createTheme(themeSettings());
