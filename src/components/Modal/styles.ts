import styled from 'styled-components';

type ContainerProps = {
  zIndex?: number;
};

const Container = styled.div<ContainerProps>`
  div.background {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 200vh;
    background: rgba(0, 0, 0, 0.1);
    transition: width 0.2s;
    z-index: ${(props) => (props.zIndex ? `${props.zIndex}` : '1')};
  }
`;

export default Container;
