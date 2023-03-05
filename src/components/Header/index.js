import LogoSVG from "@/components/Logo";
import Menu from "@/components/Menu";
import styled from "styled-components";
const HeaderContain = styled.div`
  color: white;
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
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    .LogoHeader {
      margin-left: 2.5em;
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
