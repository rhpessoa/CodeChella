import React from "react";
import { themes } from "../styles/Theme";
import borealBanner from "../../public/images/bannerBoreal.png";
import summerBanner from "../../public/images/bannerSummer.png";
import imageSummer from "../../public/images/ImageSummer.png";
import imageBoreal from "../../public/images/ImageBoreal.png";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("boreal");
  const [themeImage, setThemeImage] = React.useState(borealBanner);
  const [imageTheme, setImageTheme] = React.useState(imageBoreal);
  const activeTheme = themes[theme];

  function toggleTheme() {
    if (theme === "summer") {
      setTheme("boreal");
      setThemeImage(borealBanner);
      setImageTheme(imageBoreal);
    } else {
      setTheme("summer");
      setThemeImage(summerBanner);
      setImageTheme(imageSummer);
    }
  }

  return (
    <ThemeContext.Provider
      value={{ imageTheme, themeImage, theme, activeTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
