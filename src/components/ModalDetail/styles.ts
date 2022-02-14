import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.div`
  width: 830px;
  height: auto;
  display: flex;
  gap: 20px;

  p {
    font-weight: 500;
    font-size: 12px;
  }
`;

const ContainerMobile = styled.div`
  width: 93%;
  height: 585px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    position: absolute;
    border-radius: 80px;
    height: 100px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f6f5f8;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.pink200};
    border-radius: 80px;
  }

  &::-webkit-scrollbar-track-piece {
    height: 138px;
  }

  &.spacing {
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  p {
    font-weight: 500;
    font-size: 12px;
  }
`;

const ContainerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  div.title {
    height: 85px;
    margin-top: -10px;
    padding-right: 15px;

    p {
      font-size: 28px;
      font-weight: 500;
    }
  }
  div.subTitle {
    height: 30px;
    margin-top: -16px;
    padding-right: 15px;

    p {
      font-size: 12px;
      color: ${colors.pink100};
      font-weight: 400;
    }
  }

  div.information {
    height: 175px;
    margin-bottom: 40px;
    padding-right: 15px;
  }

  div.description {
    height: auto;
    padding-right: 15px;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.gray100};
      text-align: justify;
    }
  }
`;

const ContainerImgMobile = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40px;

  img {
    width: 100%;
    height: 105%;
  }

  div.title {
    height: 130px;
    margin-top: -10px;
    padding-right: 15px;

    p {
      font-size: 28px;
      font-weight: 500;
    }
  }
  div.subTitle {
    height: 30px;
    margin-top: -16px;
    padding-right: 15px;

    p {
      font-size: 12px;
      color: ${colors.pink100};
      font-weight: 400;
    }
  }

  div.information {
    height: 175px;
    margin-bottom: 40px;
    padding-right: 15px;
  }

  div.description {
    height: 165px;
    padding-right: 15px;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.gray100};
      text-align: justify;
    }
  }
`;

const Row = styled.div`
  display: flex;
  height: 25px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    font-weight: 500;

    &.hover {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.gray100};
    }
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  height: 65px;
  justify-content: flex-end;
  align-items: end;
  z-index: 2;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 30px;

    & > svg {
      pointer-events: none;
    }
  }
`;

const ButtonContainerMobile = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: flex-end;
  align-items: end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 5%;
  }
`;

export {
  Container,
  ContainerImg,
  Row,
  ButtonContainer,
  ContainerMobile,
  ContainerImgMobile,
  ButtonContainerMobile,
};
