import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#000",
    },
    secondary: {main: "#FFD563"},
    // primary: { 500: '#e91e63' },
    // - 8F2D56 - FBB13C - 73D2DE - 119DA4
    // FDFDFC - FFD563 - F8B500 - 00ADB5 - 0F1928
    type: "dark",
  },
});

export default theme;
