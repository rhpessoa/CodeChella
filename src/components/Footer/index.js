import styled from "styled-components";
import LogoSVG from "../Logo";
import SocialMedia from "./SocialMedia";

const FooterContain = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  width: 100vw;
  height: 19.5em;
  display: flex;
  justify-content: center;
  text-align: center;
  .InfoFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
  }
  .RedesFooter {
    margin-top: 0.5em;
  }
  .RegistroFooter {
    margin-top: 1.6em;
  }
  @media screen and (min-width: 768px) {
    height: 12.6em;
    .RedesFooter {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.5em;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    height: 11.6em;
    .teste {
      display: flex;
      flex-direction: row;
    }
    .InfoFooter {
      width: 55vw;
    }
    .RegistroFooter {
      width: 45vw;
      margin: auto;
      div {
        margin-right: 2em;
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterContain suppressHydrationWarning className="Footer">
      <div className="teste">
        <div className="InfoFooter">
          <LogoSVG />
          <div className="RedesFooter">
            <span>Acesse nossas redes:</span>
            <SocialMedia />
          </div>
        </div>

        <div className="RegistroFooter">
          <div>
            <span>
              Desenvolvido por Alura. Projeto fictício sem fins comerciais.
            </span>
          </div>
        </div>
      </div>
    </FooterContain>
  );
}
