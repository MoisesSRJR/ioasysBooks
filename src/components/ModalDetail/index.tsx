/*eslint-disable */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { useRef } from "react";
import {
  Container,
  ContainerImg,
  Row,
  ButtonContainer,
  ContainerMobile,
  ContainerImgMobile,
  ButtonContainerMobile,
} from "./styles";
import { VscChromeClose } from "react-icons/vsc";
import { useModal } from "../../context/ModalContext";
import { Modal } from "../Modal";
import quotesImg from "../../assets/Quotes.png";
import useWindowSize from "../../hooks/useWindowSize";
import { tabBooks } from "../../context/books";

interface CardProps {
  book?: tabBooks;
}

export function Detail({ book }: CardProps) {
  // Const para remover o modal
  const { removeModal } = useModal();
  // Const para utilizar o windows size
  const { width } = useWindowSize();

  return (
    <>
      {width > 919 ? (
        <Modal>
          <ButtonContainer>
            <button onClick={() => removeModal()}>
              <VscChromeClose size={17} />
            </button>
          </ButtonContainer>
          <div id="modal" className="show-modal">
            <Container>
              <ContainerImg>
                <img src={book?.imageUrl} />
              </ContainerImg>
              <ContainerImg>
                <div className="title">
                  <p>{book?.title}</p>
                </div>
                <div className="subTitle">
                  <p>{book?.authors}</p>
                </div>
                <p>INFORMAÇÕES</p>
                <div className="information">
                  <Row>
                    <p>Páginas</p>
                    <p className="hover">{book?.pageCount} Páginas</p>
                  </Row>
                  <Row>
                    <p>Editora</p>
                    <p className="hover">{book?.publisher}</p>
                  </Row>
                  <Row>
                    <p>Publicação</p>
                    <p className="hover">{book?.published}</p>
                  </Row>
                  <Row>
                    <p>Idioma</p>
                    <p className="hover">{book?.language}</p>
                  </Row>
                  <Row>
                    <p>Título Original</p>
                    <p className="hover">{book?.title}</p>
                  </Row>
                  <Row>
                    <p>ISBN-10</p>
                    <p className="hover">{book?.isbn10}</p>
                  </Row>
                  <Row>
                    <p>ISBN-13</p>
                    <p className="hover">{book?.isbn13}</p>
                  </Row>
                </div>
                <p>RESENHA DA EDITORA</p>
                <div className="description">
                  <p>
                    {" "}
                    <img src={quotesImg} /> {book?.description}
                  </p>
                </div>
              </ContainerImg>
            </Container>
          </div>
        </Modal>
      ) : (
        <Modal>
          <ButtonContainerMobile>
            <button>
              <VscChromeClose size={17} onClick={removeModal} />
            </button>
          </ButtonContainerMobile>
          <div id="modal" data-testid="register-modal" className="show-modal">
            <ContainerMobile>
              <ContainerImgMobile>
                <img src={book?.imageUrl} />
              </ContainerImgMobile>
              <ContainerImgMobile>
                <div className="title">
                  <p>{book?.title}</p>
                </div>
                <div className="subTitle">
                  <p>{book?.authors}</p>
                </div>
                <p>INFORMAÇÕES</p>
                <div className="information">
                  <Row>
                    <p>Páginas</p>
                    <p className="hover">{book?.pageCount} Páginas</p>
                  </Row>
                  <Row>
                    <p>Editora</p>
                    <p className="hover">{book?.publisher}</p>
                  </Row>
                  <Row>
                    <p>Publicação</p>
                    <p className="hover">{book?.published}</p>
                  </Row>
                  <Row>
                    <p>Idioma</p>
                    <p className="hover">{book?.language}</p>
                  </Row>
                  <Row>
                    <p>Título Original</p>
                    <p className="hover">{book?.title}</p>
                  </Row>
                  <Row>
                    <p>ISBN-10</p>
                    <p className="hover">{book?.isbn10}</p>
                  </Row>
                  <Row>
                    <p>ISBN-13</p>
                    <p className="hover">{book?.isbn13}</p>
                  </Row>
                </div>
                <p>RESENHA DA EDITORA</p>
                <div className="description">
                  <p>
                    {" "}
                    <img src={quotesImg} /> {book?.description}
                  </p>
                </div>
              </ContainerImgMobile>
            </ContainerMobile>
          </div>
        </Modal>
      )}
    </>
  );
}
