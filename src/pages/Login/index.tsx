import React from "react";
import { Container, Card, ContainerMobile, CardMobile } from "./styles";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import useWindowSize from "../../hooks/useWindowSize";

export default function Login(): JSX.Element {

  // Const para utilizar o windows size
  const { width } = useWindowSize();

  return (
    <>
      {width > 919 ? (
        <Container id="container">
          <Card>
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <Input label="E-mail" name={""} type="email" autoComplete="off"/>
            <Input
              label="Senha"
              name={""}
              type="password"
              autoComplete="off"
              button={<Button label="Entrar" />}
            />
          </Card>
        </Container>
      ) : (
        <ContainerMobile id="containerMobile">
          <CardMobile>
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <Input label="E-mail" name={""} type="email" autoComplete="off"/>
            <Input
              label="Senha"
              name={""}
              type="password"
              autoComplete="off"
              button={<Button label="Entrar" />}
            />
          </CardMobile>
        </ContainerMobile>
      )}
    </>
  );
}
