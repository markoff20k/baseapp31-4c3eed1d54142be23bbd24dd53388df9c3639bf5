import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Content, Login, Header, Input, Buttons } from "./style";
import logo from "../../../assets/recover.svg";
import { Checkbox } from "@mui/material";

export function RecoverPassword(props) {
  return (
    <Container>
      <Content>
        <Login>
          <Header>
            <img src={logo} alt="Logo" />
            <p>Redefinir senha</p>
            <p>
              Insira o email utilizado no cadastro para receber o link de
              <br />
              redefinição de senha
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
          </Input>
          <Buttons>
            <div className="access-account">
              <button>Redefinir senha</button>
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
