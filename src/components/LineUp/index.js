import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { ThemeContext } from "@/context/ColorThemeContext";
import MusicalAttraction from "./MusicalAttraction";
const LineUpContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1.5em;
  .ImageContain {
    margin: 2em 0;
  }
  .LineUpInfo {
    text-align: center;
    span {
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
    }
    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
    }
    .ButtonContainer {
    }
    .ButtonComprar {
      cursor: pointer;
      width: 90vw;
      background-color: #4650bd;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      border-radius: 16px;
      padding: 0.5em 1em;
      font-size: 20px;
      box-shadow: 4px 4px 0px #444444;
    }
  }
  .BottomBanner {
    margin-top: 0.5em;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 4.5em;
    .InfoShowContainer {
      margin: 0 6.5em;
    }
    .LineUpInfo {
      margin: 0 0.5em;
      .ButtonComprar {
        width: 38.5vw;
      }
    }
    .BottomBanner {
      margin-top: 0.5em;
      margin: 0;
      padding: 0;
    }
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 4em;
    .BannerSection {
      display: flex;
    }
    .ImageContain {
      margin: 0;
      flex-basis: 45%;
      margin-right: 2em;
    }
    .LineUpInfo {
      flex-basis: 55%;
      margin: auto 0;
      .InfoShowContainer {
        margin: 0 7.5em;
      }
      .InfoContainer {
        margin: 0 7em;
      }
      .ButtonContainer {
        margin: 2em 0;
      }
      .ButtonComprar {
        width: 25vw;
      }
    }
    .BottomBanner {
      margin-top: 0.5em;
      margin: 0;
      padding: 0;
    }
  }
`;

export default function LineUp() {
  const { imageTheme} = React.useContext(ThemeContext);
  return (
    <LineUpContain suppressHydrationWarning>
      <section className="BannerSection">
        <div className="ImageContain">
          <Image
            className="BannerImage"
            src={imageTheme}
            alt="Banner"
            style={{ width: "100vw", maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="LineUpInfo">
          <div className="InfoShowContainer">
            <span>{"< 11 e 12 de Março > Aluródromo de São Paulo"}</span>
          </div>
          <div className="InfoContainer">
            <p>
              Hora de programar nossa memória com novas lembranças! Uma nova
              experiência sobre música, linguagens e, claro, tecnologia! Somos
              um festival diverso, com vários artistas e referências.
              Divirta-se!
            </p>
          </div>
          <div className="ButtonContainer">
            <button className="ButtonComprar">Comprar Ingresso!</button>
          </div>
        </div>
      </section>
      <MusicalAttraction />
    </LineUpContain>
  );
}
