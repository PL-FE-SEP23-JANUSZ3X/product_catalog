import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { SnackbarProvider } from "./context/useSnackContext";
import { InteractionsProvider } from "./context/useInteractionsContext";

const PUBLISHABLE_KEY = 'pk_test_ZXhhY3QtbWFydGluLTgyLmNsZXJrLmFjY291bnRzLmRldiQ'
 
if (PUBLISHABLE_KEY === null || PUBLISHABLE_KEY === undefined) {
  throw new Error("Missing Publishable Key")
}

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
