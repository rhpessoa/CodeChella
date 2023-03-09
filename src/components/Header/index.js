import LogoSVG from "@/components/Logo";
import Menu from "@/components/Menu";
import Head from "next/head";
import styled from "styled-components";
const HeaderContain = styled.div`
  height: 8em;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .LogoHeader {
    margin-left: 1.5em;
  }
  .LogoMenu {
    margin-right: 1.5em;
  }
  a {
    cursor: pointer;
  }
  .ListaHeader {
    display: none;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 8.5em;
    padding: 1.32em 0;
    font-size: 18px;
    font-weight: 700;
    .LogoHeader {
      margin-left: 0;
    }
    .LogoMenu {
      display: none;
    }
    .ListaHeader {
      display: flex;
      padding: 0 3.75em;
      list-style-type: none;
      li:not(:last-child) {
        padding-right: 3.2em;
      }
      a:hover {
        border-bottom: 2px solid white;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    height: 6.7em;
    padding: 0;
    .LogoHeader {
      margin-left: 6.7em;
    }
    .ListaHeader {
      li:not(:last-child) {
        padding-right: 1.8em;
      }
    }
  }
`;
export default function Header() {
  return (

      <HeaderContain suppressHydrationWarning className="Header">
        <Head>
          <title>CodeChella</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="LogoHeader">
          <LogoSVG />
        </div>
        <div className="ListaHeader">
          <li>
            <a>A experiência</a>
          </li>
          <li>
            <a>Mapa de Setores</a>
          </li>
          <li>
            <a>Informações</a>
          </li>
          <li>
            <a>Ingresso</a>
          </li>
        </div>
        <div className="LogoMenu">
          <Menu />
        </div>
      </HeaderContain>
  );
}
