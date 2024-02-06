/* eslint-disable @typescript-eslint/no-empty-function */
import { createTheme, PaletteMode, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import customTheme from "./theme";

type ThemeContextType = {
  mode: string;
  theme: Theme;
  toggleColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  theme: createTheme(),
  toggleColorMode: () => {},
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () =>
  setMode(prevMode => prevMode === "light" ? "dark" : "light");

  const customisedTheme = useMemo(
    () => createTheme(customTheme(mode)),
    [mode]
  );


  const value = {
    theme: customisedTheme,
    mode,
    toggleColorMode,
  };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);