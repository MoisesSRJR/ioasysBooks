import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.div`
  width: 368px;
  height: 60px;
  margin-left: 5%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.32);

  p {
    padding: 3px 15px;
    font-weight: 300;
    color: ${colors.gray100};
  }
  input {
    outline: none;
    border: none;
    background: none;
    width: 340px;
    margin-left: 14px;
    margin-right: 10px;
    color: white;
    font-size: 16px;

    }
`;

const ContainerMobile = styled.div`
  width: 95%;
  height: 60px;
  margin: auto;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.32);

  p {
    padding: 3px 15px;
    font-weight: 300;
    color: ${colors.gray100};
  }
  input {
    outline: none;
    border: none;
    background: none;
    width: 75%;
    margin-left: 14px;
    margin-right: 10px;
    color: white;
    font-size: 16px;
  }
`;

const ContainerInput = styled.div`
  margin-top: -15px;
  display: flex;
`;

export { Container, ContainerInput, ContainerMobile };
