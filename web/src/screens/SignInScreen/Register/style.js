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

  @media screen and (max-width: 1440px){
    height: auto;
  }
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
  /* height: 662px; */
  border-radius: 20px;
  background-color: #161d26;
   margin-top: 80px;

  @media screen and (max-width: 1440px) {
    width: 440px;
    height: 710px;
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  background-color: #161d26;
  text-align: center;

  @media screen and (max-width: 1440px) {
    height: 125px;
  }

  img {
    width: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 1440px) {
      width: 30px;
      margin-bottom: 25px;
    }
  }

  p {
    color: #fff;
    font-size: 20px;

    @media screen and (max-width: 1440px) {
      font-size: 16px;
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

  .checkbox-toggle {
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

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

    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 26px;
      margin-top: 12px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #272c35;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #16837c;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #16837c;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;

export const Buttons = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1440px) {
    height: 170px;
  }

  .register-account {
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
        color: ${(props) => props.theme.white};
        font-size: 14px;

        span {
          color: ${(props) => props.theme.primary};
        }
      }

      /* @media screen and (max-width: 1440px) {
        width: 70%;
        padding: 7px;
      } */
    }
  }

  .checkbox {
    width: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 22px;

    /* @media screen and (max-width: 1440px) {
      width: 75%;
    } */

    p {
      margin-top: 13px;
      color: ${(props) => props.theme.white};
      font-size: 12px;

      span {
        color: ${(props) => props.theme.primary};
      }

      @media screen and (max-width: 1440px) {
        font-size: 12px;
      }
    }

    .checkbox-btn {
    }
  }
`;
