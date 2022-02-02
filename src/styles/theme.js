import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Lato",
          fontSize: 14,
        },
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#52ab98" : grey[800],
            light: mode === "light" ? "#c8d8e4" : grey[700],
            dark: mode === "light" ? "#2b6777" : grey[900],
          },
          secondary: {
            main: mode === "light" ? blueGrey[500] : grey[800],
            light: mode === "light" ? blueGrey[50] : grey[700],
            dark: mode === "light" ? blueGrey[700] : grey[900],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
