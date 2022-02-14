import { useState, useEffect } from "react";
import { Container, ContainerImg, ContainerText } from "./styles";
import bookImg from "../../assets/Book.png";
import { useModal } from "../../context/ModalContext";
import { Detail } from "../../components/ModalDetail";
import { tabBooks, useTabBooks } from "../../context/books";

interface CardProps {
  book: tabBooks;
  onClick: () => void;
}

export default function Card({ book, onClick }: CardProps): JSX.Element {
  return (
    <Container onClick={() => onClick()}>
      <>
        <ContainerImg>
          <img src={book.imageUrl} />
        </ContainerImg>
        <ContainerText>
          <div className="header">
            <small>{book.title}</small>
            <br></br>
            <small className="sub">{book.authors}</small>
          </div>
          <div className="body">
            <small>{book.pageCount} páginas </small>
            <br></br>
            <small>{book.publisher}</small> <br></br>
            <small>Publicado em {book.published}</small>
          </div>
        </ContainerText>
      </>
    </Container>
  );
}
