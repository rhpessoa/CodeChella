import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ThemeContext } from "@/context/ColorThemeContext";

const BottomBannerContainer = styled.div`
  background-color: #4650bd;
`;
export default function BottomBanner() {
  const { imageThemeBottom } = React.useContext(ThemeContext);
  return (
    <BottomBannerContainer suppressHydrationWarning className="BottomBanner">
      <Image
        className="BannerImage"
        src={imageThemeBottom}
        alt="Banner"
        width={1440}
        height={338}
        sizes="100vw"
        style={{
          width: "100vw",
          height: "auto",
        }}
      />
    </BottomBannerContainer>
  );
}
