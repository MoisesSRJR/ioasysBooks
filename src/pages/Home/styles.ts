import styled from "styled-components";
import backImg from "../../assets/back.png";

const Container = styled.div`
  background: url(${backImg}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  
  #modal {
    margin: auto;
    margin-top: 1.5% !important;
    height: 610px;
    border-radius: 15px;
    background-color: white;
    transition: width 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .show-modal {
    width: 887px !important ;
  }
`;

const ContainerMobile = styled.div`
  background: url(${backImg}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  
  #modal {
    margin: auto;
    margin-top: 3% !important;
    height: 610px;
    border-radius: 15px;
    background-color: white;
    transition: width 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .show-modal {
    width: 90% !important ;
  }
`;

const ContainerTitle = styled.div`
  width: 85%;
  height: 110px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.title {
    display: flex;
    height: 70px;
    align-items: center;
    padding-left: 29px;
    gap: 5px;

    p {
      font-size: 28px;
      font-weight: 300;

      &.bold {
        font-weight: 700;
        font-size: 32px;
      }
    }
  }

  div.logout {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding-right: 30px;

    p {
      font-size: 13px;
      font-weight: 300;

      &.bold {
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
`;

const ContainerTitleMobile = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.title {
    display: flex;
    height: 70px;
    align-items: center;
    padding-left: 9px;
    gap: 5px;

    p {
      font-size: 28px;
      font-weight: 300;

      &.bold {
        font-weight: 700;
        font-size: 32px;
      }
    }
  }

  div.logout {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding-right: 10px;

    p {
      font-size: 13px;
      font-weight: 300;

      &.bold {
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
`;

const ContainerBook = styled.div`
  width: 85%;
  margin: auto;
  height: auto;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 20px;
  padding-left: 55px;
`;

const ContainerBookMobile = styled.div`
  width: 100%;
  margin: auto;
  height: auto;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

const Footer = styled.div`
   width: 100%;
  height: 80px;
  margin: auto;
  background-color: coral;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterMobile = styled.div`
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: coral;
`;

export { Container, ContainerTitle, ContainerBook, Footer, ContainerMobile, ContainerTitleMobile, ContainerBookMobile, FooterMobile };
