import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { SnackbarProvider } from "./context/useSnackContext";
import { InteractionsProvider } from "./context/useInteractionsContext";
import env from "react-dotenv";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SnackbarProvider>
        <InteractionsProvider>
          <App />
        </InteractionsProvider>
      </SnackbarProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
