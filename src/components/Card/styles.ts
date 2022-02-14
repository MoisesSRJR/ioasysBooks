import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.div`
  width: 292px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(54, 11, 61, 0.13);
  border-radius: 4px;
  margin: 5px;
  display: flex;
  cursor: pointer;
`;

const ContainerImg = styled.div`
  width: 110px;
  margin: 0px 1px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 95%;
    height: 95%;
  }
`;

const ContainerText = styled.div`
  width: 160px;
  margin: 10px 5px 10px;

  div.header {
    height: 70px;

    small {
      font-size: 14px;
      font-weight: 500;

      &.sub {
        font-size: 12px;
        font-weight: 400;
        color: ${colors.pink100};
      }
    }
  }

  div.body {
    height: 70px;
    width: 100%;

    small {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.gray100};
    }
  }
`;

export { Container, ContainerImg, ContainerText };
