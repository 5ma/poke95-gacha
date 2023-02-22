import "./App.css";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { MenuBar } from "./components/menuBar/menuBar";
import { styleReset } from "react95";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: DotGothic16, 'ms_sans_serif', sans-serif;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <MenuBar />
      </ThemeProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  background-color: teal;
`;
