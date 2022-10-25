import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Components/Footer";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./Styles/Global/gloablTheme.style";
import { GlobalStyle } from "./Styles/Global/gloablStyle.style";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle></GlobalStyle>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
