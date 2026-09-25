import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider, TasksContextProvider, ThemeContextProvider, useTheme } from "./context/ContextProvider.jsx";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.js";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.page};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ThemeApp = () => {
  const { isDark } = useTheme();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksContextProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <ThemeApp />
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </TasksContextProvider>
  </StrictMode>,
);
