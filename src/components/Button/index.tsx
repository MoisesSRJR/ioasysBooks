import { Link, To } from "react-router-dom";
import Container from "./styles";

interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps): JSX.Element {
  return <Container data-testid="link-button">{label}</Container>;
}

Button.defaultProps = {
  bgColor: "#fff",
  borderColor: undefined,
  color: "#000",
};
