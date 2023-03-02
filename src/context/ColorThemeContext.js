import React from "react";
import { themes } from "../styles/Theme";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("boreal");
  const activeTheme = themes[theme];

  function toggleTheme() {
    if (theme === "summer") return setTheme("boreal");
    else {
      setTheme("summer");
    }
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
