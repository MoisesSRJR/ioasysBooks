import React from "react";
import {
  Container,
  ContainerTitle,
  ContainerBook,
  Footer,
  ContainerMobile,
  ContainerTitleMobile,
  ContainerBookMobile,
  FooterMobile,
} from "./styles";
import { FiLogOut } from "react-icons/fi";
import Card from "../../components/Card";
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../context/ModalContext";
import { Detail } from "../../components/ModalDetail";

export default function Home(): JSX.Element {
  // Const para utilizar o windows size
  const { width } = useWindowSize();

  // Const para abrir modal
  const { isModalOpen, modalId, openModal } = useModal();

  return (
    <>
      {width > 919 ? (
        <Container id="container">
          <ContainerTitle id="containerTitle">
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <div className="logout">
              <p>Bem vindo,</p> <p className="bold">Guilherme!</p>
              <button>
                <FiLogOut size={18} />
              </button>
            </div>
          </ContainerTitle>
          <ContainerBook id="containerBook">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {isModalOpen && modalId === "detail" && <Detail />}
          </ContainerBook>
        </Container>
      ) : (
        <ContainerMobile id="containerMobile">
          <ContainerTitleMobile id="containerTitleMobile">
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <div className="logout">
              <button>
                <FiLogOut size={18} />
              </button>
            </div>
          </ContainerTitleMobile>
          <ContainerBookMobile id="containerbookMobile">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ContainerBookMobile>
        </ContainerMobile>
      )}
    </>
  );
}
