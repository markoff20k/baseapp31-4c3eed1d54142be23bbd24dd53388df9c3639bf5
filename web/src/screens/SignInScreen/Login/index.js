import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Content, Login, Header, Input, Buttons } from "./style";
import logo from "../../../assets/images/logo-icon-dark.svg";
import { Checkbox } from "@mui/material";

export function SignIn(props) {
  return (
    <Container>
      <Content>
        <Login>
          <Header>
            <img src={logo} alt="Logo" />
            <p>
              Faça o login com o email utilizado
              <br />
              no cadastro
            </p>
          </Header>
          <Input>
            <TextField
              className="input-login"
              // size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              className="input-login"
              // size="small"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
            />
            <div className="checkbox">
              <Checkbox className="checkbox-btn" />
              <p>Lembrar meus dados de login</p>
            </div>
          </Input>
          <Buttons>
            <div className="access-account">
              <button>Acessar plataforma</button>
              <button
                onClick={() => {
                  props.setIsRecover(true);
                  props.setIsRegister(false);
                }}
              >
                Esqueci minha senha
              </button>
            </div>
            <div className="create-account">
              <p>Não possui cadastro?</p>
              <button
                onClick={() => {
                  props.setIsRegister(true);
                  props.setIsRecover(false);
                }}
              >
                Criar conta
              </button>
            </div>
          </Buttons>
        </Login>
      </Content>
    </Container>
  );
}
