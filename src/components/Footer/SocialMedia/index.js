import Image from "next/image";
import WPPIcon from "../../../../public/icons/WhatsApp.svg";
import TwitchIcon from "../../../../public/icons/Twitch.svg";
import InstaIcon from "../../../../public/icons/Instagram.svg";
import TwitterIcon from "../../../../public/icons/Twitter.svg";
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
  return (
    <SocialMediaContain suppressHydrationWarning>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Wpp icone" src={WPPIcon} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitch icone" src={TwitchIcon} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Insta icone" src={InstaIcon} width={32} height={32} />
        </a>
      </div>
      <div className="IconesContain">
        <a href="#">
          <Image alt="Twitter icone" src={TwitterIcon} width={32} height={32} />
        </a>
      </div>
    </SocialMediaContain>
  );
}
