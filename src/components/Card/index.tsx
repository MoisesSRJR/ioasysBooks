import React from "react";
import { Container, ContainerImg, ContainerText } from "./styles";
import bookImg from "../../assets/Book.png";
import { useModal } from "../../context/ModalContext";
import { Detail } from "../../components/ModalDetail";

export default function Card(): JSX.Element {
  // Const para abrir modal
  const { isModalOpen, modalId, openModal } = useModal();
  return (
    <Container onClick={() => openModal("detail")}>
      <ContainerImg>
        <img src={bookImg} />
      </ContainerImg>
      <ContainerText>
        <div className="header">
          <small>The Power of Habit</small>
          <br></br>
          <small className="sub">Charles Duhigg</small>
        </div>
        <div className="body">
          <small>150 páginas Editora Loyola Publicado em 2020</small>
        </div>
      </ContainerText>
      {isModalOpen && modalId === "detail" && <Detail />}
    </Container>
  );
}
