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
import booksImg from "../../assets/Books.png";
import quotesImg from "../../assets/Quotes.png";
import useWindowSize from "../../hooks/useWindowSize";

export function Detail() {
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
                <img src={booksImg} />
              </ContainerImg>
              <ContainerImg>
                <div className="title">
                  <p>Change By Design Second line exampl...</p>
                </div>
                <div className="subTitle">
                  <p>Tim Brown, Julie Zhuo, Fried Maximiilian</p>
                </div>
                <p>INFORMAÇÕES</p>
                <div className="information">
                  <Row>
                    <p>Páginas</p>
                    <p className="hover">304 Páginas</p>
                  </Row>
                  <Row>
                    <p>Editora</p>
                    <p className="hover">Editora Loyola</p>
                  </Row>
                  <Row>
                    <p>Publicação</p>
                    <p className="hover">2020</p>
                  </Row>
                  <Row>
                    <p>Idioma</p>
                    <p className="hover">Inglês</p>
                  </Row>
                  <Row>
                    <p>Título Original</p>
                    <p className="hover">Change By Design</p>
                  </Row>
                  <Row>
                    <p>ISBN-10</p>
                    <p className="hover">0067949933</p>
                  </Row>
                  <Row>
                    <p>ISBN-13</p>
                    <p className="hover">978-9403204055</p>
                  </Row>
                </div>
                <p>RESENHA DA EDITORA</p>
                <div className="description">
                  <p>
                    {" "}
                    <img src={quotesImg} /> Resenha da editora The subject of
                    “design thinking” is the rage at business schools,
                    throughout corporations, and increasingly in the popular
                    press—due in large part to the work of IDEO, a leading
                    design firm, and its celebrated CEO, Tim Brown, who uses
                    this book to show how the techniques and strategies of
                    design belong at every level of business.
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
                <img src={booksImg} />
              </ContainerImgMobile>
              <ContainerImgMobile>
                <div className="title">
                  <p>Change By Design Second line exampl...</p>
                </div>
                <div className="subTitle">
                  <p>Tim Brown, Julie Zhuo, Fried Maximiilian</p>
                </div>
                <p>INFORMAÇÕES</p>
                <div className="information">
                  <Row>
                    <p>Páginas</p>
                    <p className="hover">304 Páginas</p>
                  </Row>
                  <Row>
                    <p>Editora</p>
                    <p className="hover">Editora Loyola</p>
                  </Row>
                  <Row>
                    <p>Publicação</p>
                    <p className="hover">2020</p>
                  </Row>
                  <Row>
                    <p>Idioma</p>
                    <p className="hover">Inglês</p>
                  </Row>
                  <Row>
                    <p>Título Original</p>
                    <p className="hover">Change By Design</p>
                  </Row>
                  <Row>
                    <p>ISBN-10</p>
                    <p className="hover">0067949933</p>
                  </Row>
                  <Row>
                    <p>ISBN-13</p>
                    <p className="hover">978-9403204055</p>
                  </Row>
                </div>
                <p>RESENHA DA EDITORA</p>
                <div className="description">
                  <p>
                    {" "}
                    <img src={quotesImg} /> Resenha da editora The subject of
                    “design thinking” is the rage at business schools,
                    throughout corporations, and increasingly in the popular
                    press—due in large part to the work of IDEO, a leading
                    design firm, and its celebrated CEO, Tim Brown, who uses
                    this book to show how the techniques and strategies of
                    design belong at every level of business.
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
