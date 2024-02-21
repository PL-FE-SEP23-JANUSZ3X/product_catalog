import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { SnackbarProvider } from "./context/useSnackContext";
import { InteractionsProvider } from "./context/useInteractionsContext";
import env from "react-dotenv";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY
 
if (PUBLISHABLE_KEY === null || PUBLISHABLE_KEY === undefined || PUBLISHABLE_KEY === '') {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SnackbarProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <InteractionsProvider>
            <App />
          </InteractionsProvider>
        </ClerkProvider>
      </SnackbarProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
