import Image from "next/image";
import WPPIcon from "../../../../public/icons/WhatsApp.svg";
import TwitchIcon from "../../../../public/icons/Twitch.svg";
import InstaIcon from "../../../../public/icons/Instagram.svg";
import TwitterIcon from "../../../../public/icons/Twitter.svg";
import WPPIconBlack from "../../../../public/icons/WhatsAppBlack.svg";
import TwitchIconBlack from "../../../../public/icons/TwitchBlack.svg";
import InstaIconBlack from "../../../../public/icons/InstaBlack.svg";
import TwitterIconBlack from "../../../../public/icons/TwitterBlack.svg";
import React from "react";
import { ThemeContext } from "@/context/ColorThemeContext";
import styled from "styled-components";

const SocialMediaContain = styled.div`
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
  .IconesContain:not(:last-child) {
    padding-right: 0.5em;
  }
`;
export default function SocialMedia() {
  const { theme } = React.useContext(ThemeContext);
  const [whatsApp, setWhatsApp] = React.useState(WPPIcon);
  const [twitch, setTwitch] = React.useState(TwitchIcon);
  const [instagram, setInstagram] = React.useState(InstaIcon);
  const [twitter, setTwitter] = React.useState(TwitterIcon);
  React.useEffect(() => {
    if (theme === "boreal") {
      setWhatsApp(WPPIcon);
      setTwitch(TwitchIcon);
      setInstagram(InstaIcon);
      setTwitter(TwitterIcon);
    } else {
      setWhatsApp(WPPIconBlack);
      setTwitch(TwitchIconBlack);
      setInstagram(InstaIconBlack);
      setTwitter(TwitterIconBlack);
    }
  }, [theme]);
  return (
    <SocialMediaContain suppressHydrationWarning>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Wpp icone" src={whatsApp} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitch icone" src={twitch} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Insta icone" src={instagram} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitter icone" src={twitter} width={32} height={32} />
        </a>
      </div>
    </SocialMediaContain>
  );
}
