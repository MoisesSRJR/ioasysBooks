import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Card from "../../components/Card";
import { Detail } from "../../components/ModalDetail";
import { useAuth } from "../../context/AuthContext";
import { tabBooks, useTabBooks } from "../../context/books";
import { useModal } from "../../context/ModalContext";
import useWindowSize from "../../hooks/useWindowSize";
import {
  Container, ContainerBook, ContainerBookMobile, ContainerMobile, ContainerTitle, ContainerTitleMobile
} from "./styles";


export default function Home(): JSX.Element {
  // Const para utilizar o windows size
  const { width } = useWindowSize();
  // Const para abrir modal
  const { isModalOpen, modalId, openModal } = useModal();
  // Const para utilizar useAuth
  const { logout } = useAuth();
  // Const para utilizar tabBooks
  const { tabBooks, getBooks } = useTabBooks();
  // Const que seta o id para abrir o modal
  const [book, setBook] = useState <tabBooks>();

  // useEffect que verifica e exibe o getBooks 
  useEffect(() => {
    getBooks(1);
  }, []);

  return (
    <>
      {width > 919 ? (
        <Container id="container">
          <ContainerTitle id="containerTitle">
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <div className="logout">
              <p>Bem vindo</p>
              <button onClick={logout}>
                <FiLogOut size={18} />
              </button>
            </div>
          </ContainerTitle>
          <ContainerBook id="containerBook">
            {tabBooks.map((books) => (
              <Card
                book={books}
                onClick={() => {
                  openModal(books.id);
                  setBook(books);
                }}
              />
            ))}
            {isModalOpen && modalId === book?.id && <Detail book={book} />}
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
            {tabBooks.map((books) => (
              <Card
                book={books}
                onClick={() => {
                  openModal(books.id);
                  setBook(books);
                }}
              />
            ))}
            {isModalOpen && modalId === book?.id && <Detail book={book} />}
          </ContainerBookMobile>
        </ContainerMobile>
      )}
    </>
  );
}
