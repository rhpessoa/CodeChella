import styled from "styled-components";

const MusicalSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2em;
  .AttractionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .LineUpContainer {
      margin: 2em 0;
      h3 {
        font-weight: 400;
        font-size: 48px;
        line-height: 62px;
        font-family: "Calistoga", cursive;
      }
    }
    .EventDate {
      margin-bottom: 2.6em;
      width: 70%;
      padding: 1em;
      color: white;
      font-family: "Calistoga", cursive;
    }
    .MainEvent {
      margin-bottom: 2rem;
      span {
        font-weight: 800;
        font-size: 48px;
        line-height: 56px;
      }
    }
    .SecondEvent {
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      ul:first-child,
      ul:nth-child(2) {
        font-size: 40px;
        line-height: 47px;
        font-weight: 700;
      }
      ul:last-child,
      ul:nth-child(5) {
        font-weight: 500;
      }
      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
        li:first-child {
          margin-bottom: 1rem;
        }
        li:last-child {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .AttractionContainer {
      .EventDate {
        width: 55%;
      }
      .SecondEvent {
        display: flex;
        flex-direction: column;
        ul {
          display: flex;
          flex-direction: row;
          margin-bottom: 2rem;
          li:first-child {
            margin-bottom: 0rem;
          }
          li:last-child {
            margin-bottom: 0rem;
          }
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 50%;
          }
        }
        ul:last-child {
          margin: 0 4em;
        }
      }
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 100%;
    .AttractionContainer {
      width: 100%;
      .EventDate {
        width: 20%;
      }
      .SecondEvent {
        flex-direction: row;
        flex-wrap: wrap;
        ul:nth-child(3) {
          li:first-child {
            margin-left: 2em;
          }
        }
        ul:nth-child(4) {
          li:last-child {
            margin-right: 2em;
          }
        }
        ul:nth-child(5) {
          li:first-child {
            margin-left: 4em;
          }
        }
        ul:nth-child(6) {
          li:last-child {
            margin-right: 4em;
          }
        }
        ul {
          flex-basis: 50%;
          li:first-child {
            margin-bottom: 0rem;
          }
          li:last-child {
            margin-bottom: 0rem;
          }
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 50%;
            padding: 1rem;
          }
        }
        ul:last-child {
          margin: 0;
        }
      }
    }
  }
`;
export default function MusicalAttraction() {
  return (
    <MusicalSectionContainer suppressHydrationWarning>
      <div className="AttractionContainer">
        <div className="LineUpContainer">
          <h3>/Line-Up/</h3>
        </div>
        <div className="EventDate">
          <span>{"SÁBADO <11/03>"} </span>
        </div>
        <div className="MainEvent">
          <span>System of a DOM</span>
        </div>
        <ul className="SecondEvent">
          <ul>
            <li>Python Maiden</li>
            <li>Apollo Client 2001</li>
          </ul>
          <ul>
            <li>Bon Java</li>
            <li>NickCallback</li>
          </ul>
          <ul>
            <li>Linkin Promises</li>
            <li>Fullstack Fighters</li>
          </ul>
          <ul>
            <li>Papa React</li>
            <li>Angular in Chains</li>
          </ul>
          <ul>
            <li>Agnostic Front-end</li>
            <li>SlipkNode</li>
          </ul>
          <ul>
            <li>Pink Flutter</li>
            <li>Kiss</li>
          </ul>
        </ul>
      </div>
      <div className="AttractionContainer">
        <div className="LineUpContainer">
          <h3>/Line-Up/</h3>
        </div>
        <div className="EventDate">
          <span>{"DOMINGO <12/03>"} </span>
        </div>
        <div className="MainEvent">
          <span>Lana Del Ploy</span>
        </div>
        <ul className="SecondEvent">
          <ul>
            <li>Dual Lib</li>
            <li>The Backnd</li>
          </ul>
          <ul>
            <li>CSS Styles</li>
            <li>ArrayAna Grande</li>
          </ul>
          <ul>
            <li>DJ Query</li>
            <li>Miley Cypress</li>
          </ul>
          <ul>
            <li>The Bootstrap Boys</li>
            <li>Json Derulo</li>
          </ul>
          <ul>
            <li>CloudPlay</li>
            <li>Dev Lovato</li>
          </ul>
          <ul>
            <li>Rubycat Dolls</li>
            <li>Jenkins Brothers</li>
          </ul>
        </ul>
      </div>
    </MusicalSectionContainer>
  );
}
