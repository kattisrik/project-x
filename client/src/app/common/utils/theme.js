import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    typography: {
      h1: {
        fontSize: "3rem"
      }
    },
    palette: {
      type: "light",
      primary: {
        main: "#f32f32"
      },
      secondary: {
        main: "#828282"
      }
    }
  });

  export default theme;