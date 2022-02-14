import React, { useState } from "react";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { LoginRequest, useAuth } from "../../context/AuthContext";
import useWindowSize from "../../hooks/useWindowSize";
import { Card, CardMobile, Container, ContainerMobile } from "./styles";

export default function Login(): JSX.Element {
  // Const para utilizar o windows size
  const { width } = useWindowSize();
  // Const para utilizar useAuth
  const { login } = useAuth();
  //const para mandar os dados do input
  const [DadosLogin, setDadosLogin] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  // Função para mandar os dados para o modal pelo onChnage
  function Dados(event: React.FormEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    setDadosLogin({ ...DadosLogin, [name]: event.currentTarget.value });
  }

  // Função que emvia as informações dos DadosInclude
  function Submit(dados: any) {
    dados.preventDefault();
    login(DadosLogin);
  }
  return (
    <>
      {width > 919 ? (
        <Container id="container">
          <Card>
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <form onSubmit={Submit} autoComplete="off">
              <Input
                label="E-mail"
                name={"email"}
                type="email"
                autoComplete="off"
                value={DadosLogin.email}
                onChange={Dados}
              />
              <Input
                label="Senha"
                name={"password"}
                type="password"
                autoComplete="off"
                value={DadosLogin.password}
                onChange={Dados}
                button={<Button label="Entrar" type="submit" />}
              />
            </form>
          </Card>
        </Container>
      ) : (
        <ContainerMobile id="containerMobile">
          <CardMobile>
            <div className="title">
              <p className="bold">ioasys</p> <p>Books</p>
            </div>
            <Input
              label="E-mail"
              name={"email"}
              type="email"
              autoComplete="off"
              value={DadosLogin.email}
            />
            <Input
              label="Senha"
              name={"password"}
              type="password"
              autoComplete="off"
              value={DadosLogin.password}
              button={<Button label="Entrar" type="submit" />}
            />
          </CardMobile>
        </ContainerMobile>
      )}
    </>
  );
}
