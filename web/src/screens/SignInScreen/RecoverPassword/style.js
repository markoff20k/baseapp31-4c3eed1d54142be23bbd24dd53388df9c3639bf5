import styled from "styled-components";
import background from "../../../assets/background-signin.png";

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  width: 480px;
  height: 662px;
  border-radius: 20px;
  background-color: #161d26;

  @media screen and (max-width: 1440px) {
    width: 440px;
    height: 540px;
    margin-top: 80px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  background-color: #161d26;
  text-align: center;
  margin-top: 140px;

  @media screen and (max-width: 1440px) {
    height: 125px;
  }

  img {

    @media screen and (max-width: 1440px) {
      width: 100px;
    }
  }

  p {
    color: #fff;
    font-size: 14px;

    &:nth-child(2){
      margin-top: 20px;
      font-size: 16px;
    }

    @media screen and (max-width: 1440px) {
      font-size: 12px;
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;

  .input-login {
    width: 90%;
    color: #fff;
    background-color: #272c35;
    border-radius: 15px;
    margin: 15px 0;
    outline: none;

    @media screen and (max-width: 1440px) {
      width: 90%;
      color: #fff;
      background-color: #272c35;
      border-radius: 15px;
      margin: 10px 0;
      outline: none;
    }
  }

  .checkbox {
    width: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    /* @media screen and (max-width: 1440px) {
      width: 75%;
    } */

    p {
      margin-top: 13px;
      color: ${(props) => props.theme.white};
      font-size: 14px;

      @media screen and (max-width: 1440px) {
        font-size: 12px;
      }
    }

    .checkbox-btn {
    }
  }
`;

export const Buttons = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1440px) {
    height: 140px;
  }

  .access-account {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
      border: none;
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};

      &:nth-child(2) {
        background-color: transparent;
        color: ${(props) => props.theme.primary};
        font-size: 14px;
      }

      /* @media screen and (max-width: 1440px) {
        width: 70%;
        padding: 7px;
      } */
    }
  }

  .create-account {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
      color: ${(props) => props.theme.white};
      font-size: 18px;

      @media screen and (max-width: 1440px) {
        font-size: 14px;
      }
    }

    button {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.primary};
      background-color: transparent;
      color: ${(props) => props.theme.primary};

      @media screen and (max-width: 1440px) {
        /* width: 70%; */
        padding: 7px;
      }
    }
  }
`;
