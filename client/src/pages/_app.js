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
    <>
      <header>
        <Navbar />
      </header>
      <main class='container-fluid'>
        <Component { ...pageProps } />
      </main>
    </>
  );
}

export default ProjectX;
