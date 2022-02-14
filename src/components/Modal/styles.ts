import styled from "styled-components";

type ContainerProps = {
  zIndex?: number;
};

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  transition: width 0.2s;
  z-index: ${(props) => (props.zIndex ? `${props.zIndex}` : "1")};
`;

export default Container;
