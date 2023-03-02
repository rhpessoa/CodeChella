import Image from "next/image";
import MenuHeader from "../../../public/icons/headerMenu.svg";

export default function Menu() {
  return (
    <>
      <a
        onClick={() => {
          alert("Você me clicou");
        }}
      >
        <Image alt="Menu do Header" src={MenuHeader} width={32} height={40} />
      </a>
    </>
  );
}
