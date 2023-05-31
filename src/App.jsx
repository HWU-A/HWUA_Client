import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import ScrollToTop from "./ScrollToTop";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import RouterConfig from "./RouterConfig";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner primary="true" />}>
            <RouterConfig />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
