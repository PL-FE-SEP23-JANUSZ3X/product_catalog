import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { SnackbarProvider } from "./context/useSnackContext";
import { OrderProvider } from "./context/useOrderContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SnackbarProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </SnackbarProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
