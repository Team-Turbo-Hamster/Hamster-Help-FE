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
          fontWeightLight: 300,
          fontWeightMedium: 400,
          fontWeightRegular: 500,
          fontWeightBold: 900,
        },
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#52ab98" : grey[300],
            light: mode === "light" ? "#c8d8e4" : grey[100],
            dark: mode === "light" ? "#2b6777" : grey[600],
          },
          secondary: {
            main: blueGrey[500],
            light: blueGrey[50],
            dark: blueGrey[700],
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
