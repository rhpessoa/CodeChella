import React from "react";
import { themes } from "../styles/Theme";
import borealBanner from "../../public/images/bannerBoreal.png";
import summerBanner from "../../public/images/bannerSummer.png";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("boreal");
  const [themeImage, setThemeImage] = React.useState(borealBanner);
  const activeTheme = themes[theme];

  function toggleTheme() {
    if (theme === "summer") {
      setTheme("boreal");
      setThemeImage(borealBanner);
    } else {
      setTheme("summer");
      setThemeImage(summerBanner);
    }
  }

  return (
    <ThemeContext.Provider value={{ themeImage,theme, activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
