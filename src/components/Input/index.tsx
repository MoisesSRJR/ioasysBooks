import React, { InputHTMLAttributes } from "react";
import { Container, ContainerInput, ContainerMobile } from "./styles";
import useWindowSize from '../../hooks/useWindowSize';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  Width?: string;
  name: string;
  button?: React.ReactNode;
  type?: "text" | "email" | "password";
}

export default function Input({
  label,
  Width,
  name,
  type,
  button,
  ...props
}: InputProps): JSX.Element {

  const { width } = useWindowSize();

  return (
    <>
    {width > 919 ? (
    <Container>
      <p>{label}</p>
      <ContainerInput >
        <input name={name} id={name} type={type} autoComplete="off"{...props} /> {button}
      </ContainerInput>
    </Container>
    ):(
<ContainerMobile>
      <p>{label}</p>
      <ContainerInput>
        <input name={name} id={name} type={type} autoComplete="off"{...props} /> {button}
      </ContainerInput>
    </ContainerMobile>
      )}
</>
  );
}
