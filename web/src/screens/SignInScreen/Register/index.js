import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Content, Login, Header, Input, Buttons } from "./style";
import { HeaderLoggedOut } from "../../../components/Header/HeaderLoggedOut";
import logo from "../../../assets/logo-icon-dark.svg";
import { Checkbox } from "@mui/material";

export function Register(props) {
  return (
    <Container>
      <Content>
        {/* <HeaderLoggedOut /> */}
        <Login>
          <Header>
            <img src={logo} alt="Logo" />
            <p>Inicie sua jornada de investimentos</p>
          </Header>
          <Input>
            <TextField
              className="input-login"
              // size="small"
              id="outlined-basic"
              label="Nome completo"
              variant="outlined"
            />
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
            <TextField
              className="input-login"
              // size="small"
              id="outlined-basic"
              label="Confirma senha"
              variant="outlined"
            />
            <div className="checkbox-toggle">
              <p>Inserir código de convite</p>
              {/* <Checkbox className="checkbox-btn" /> */}
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <TextField
              className="input-login"
              // size="small"
              id="outlined-basic"
              label="Digite o código de convite"
              variant="outlined"
            />
          </Input>
          <Buttons>
            <div className="checkbox">
              <Checkbox className="checkbox-btn" />
              <p>
                Li e aceito os <span>Termos de Uso</span> e a{" "}
                <span>Política de Privacidade</span>
              </p>
            </div>
            <div className="register-account">
              <button>Criar conta</button>
              <button>
                Já possui conta?{" "}
                <span onClick={() => props.setIsRegister(false)}>
                  Acessar plataforma
                </span>
              </button>
            </div>
          </Buttons>
        </Login>
      </Content>
    </Container>
  );
}
