import Image from "next/image";
import React from "react";
import { ThemeContext } from "@/context/ColorThemeContext";
export default function Banner() {
  const { themeImage } = React.useContext(ThemeContext);
  return (
    <div>
      <Image
        className="BannerImage"
        src={themeImage}
        alt="Banner"
        width={1440}
        height={407}
        sizes="100vw"
        style={{
          width: "100vw",
          height: "auto",
        }}
      />
    </div>
  );
}
