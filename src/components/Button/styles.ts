import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.button`
  background: white;
  width: 85px;
  height: 36px;
  border-radius: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.pink200};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-top: -17px;
  margin-right: 12px;
  border: none;
`;

export default Container;
