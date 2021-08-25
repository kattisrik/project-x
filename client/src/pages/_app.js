import '../styles/globals.css';
import dynamic from "next/dynamic";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css';
import theme from 'theme';
const Navbar = dynamic(
  import("components/Navbar")
);
const ProjectX = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ theme }>
      <Paper style={ { height: "100vh" } }>
        <Container disableGutters={ true } maxWidth={ false }>
          <div class="container">
            <Navbar />
            <Component { ...pageProps } />
          </div>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default ProjectX;
