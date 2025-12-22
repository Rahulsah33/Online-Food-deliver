import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E91E63",
    },
    secondary: {
      main: "#5A20CB",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#DCD5D5",
      secondary: "#BEBEBE",
    },
  },
});
