import React from "react";
import Image from "next/image";
import MenuHeader from "../../../public/icons/headerMenu.svg";
import styled from "styled-components";
import { ThemeContext } from "@/context/ColorThemeContext";

const Lista = styled.div`
  text-align: center;
  list-style-type: none;
  top: 14.2%;
  right: 0;
  position: absolute;
  width: 11.2em;
  padding: 0 1em;
  li {
    font-size: 18px;
    padding: 1em;
    border-bottom: 1px solid white;
    color: white;
    font-weight: 700;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover {
    font-size: 20px;
  }
`;
export default function Menu() {
  const { toggleTheme } = React.useContext(ThemeContext);
  const [isOpened, setIsOpened] = React.useState(false);
  function OpenMenu() {
    if (!isOpened) return setIsOpened(true);
    else {
      setIsOpened(false);
    }
  }

  return (
    <>
      <a
        onClick={() => {
          OpenMenu();
        }}
      >
        <Image alt="Menu do Header" src={MenuHeader} width={32} height={40} />
      </a>
      {isOpened && (
        <Lista className="ListaMenu">
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
          <li>
            <button onClick={toggleTheme}>
              <a>Trocar de tema</a>
            </button>
          </li>
        </Lista>
      )}
    </>
  );
}
