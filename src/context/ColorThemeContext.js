import React from "react";
import { themes } from "../styles/Theme";
import borealBanner from "../../public/images/bannerBoreal.png";
import summerBanner from "../../public/images/bannerSummer.png";
import borealBannerBottom from "../../public/images/bannerBorealBottom.png";
import summerBannerBottom from "../../public/images/bannerSummerBottom.png";
import imageSummer from "../../public/images/ImageSummer.png";
import imageBoreal from "../../public/images/ImageBoreal.png";
import LogoWhite from "../../public/icons/logoCodeChellaWhite.svg";
import LogoBlack from "../../public/icons/logoCodeChellaBlack.svg";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("boreal");
  const [themeImage, setThemeImage] = React.useState(borealBanner);
  const [imageTheme, setImageTheme] = React.useState(imageBoreal);
  const [imageThemeBottom, setImageThemeBottom] =
    React.useState(borealBannerBottom);
  const [bottomLogoColor, setBottomLogoColor] = React.useState(LogoWhite);
  const activeTheme = themes[theme];

  function toggleTheme() {
    if (theme === "summer") {
      setTheme("boreal");
      setThemeImage(borealBanner);
      setImageTheme(imageBoreal);
      setImageThemeBottom(borealBannerBottom);
      setBottomLogoColor(LogoWhite);
    } else {
      setTheme("summer");
      setThemeImage(summerBanner);
      setImageTheme(imageSummer);
      setImageThemeBottom(summerBannerBottom);
      setBottomLogoColor(LogoBlack);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        imageThemeBottom,
        imageTheme,
        themeImage,
        theme,
        activeTheme,
        toggleTheme,
        bottomLogoColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
