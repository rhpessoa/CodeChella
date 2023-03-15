import Image from "next/image";
import React from "react";
import Logo from "../../../public/icons/logoCodeChellaWhite.svg";

export default function LogoSVG() {
  return (
    <>
      <Image
        alt="Logo codeChella"
        src={Logo}
        width={234}
        height={64}
      />
    </>
  );
}


