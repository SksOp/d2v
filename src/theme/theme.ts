import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  // add typography to use source sans pro as default font
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});

export default theme;
