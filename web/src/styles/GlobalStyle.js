import { createGlobalStyle } from "styled-components";
import imgUSDT from "../assets/images/USDT.svg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Raleway:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth !important;
    font-family: 'Inter', sans-serif;
    outline: none !important;
  }

  a{
    text-decoration: none;
    list-style: none;
  }

  td, th{
    @media screen and (max-width: 1440px) {
     font-size: 14px;
    }
  }

  html, body{
    object-fit: cover;
    background-color: ${(props) => props.theme.background};
  }

  .activeMenu {
    background-color: ${(props) => props.theme.backgroundTertiary};
  }

  .isOpened{
    width: calc(100% - 280px) !important;
    margin-left: 280px !important;

    @media screen and (max-width: 1440px) {
      width: calc(100% - 230px) !important;
      margin-left: 230px !important;
    }
  }

  .isOpenedd{
    width: 120px;
    /* transition: all 450ms ease-in-out; */
  }

  .displayNone{
    /* transition: transform 440ms !important;
    transform: translateX(0) scale(0) !important; */
    display: none;
  }

  .carousel{
    height: 100%;
    display: flex !important;
    align-items: center !important;

    img{
      margin-left: 740px;

      @media screen and (max-width: 1440px) {
        margin-left: 82%;
      }
    }
  }

  .carousel-item{
    width: 100% !important;
    margin-bottom: 40px;
    background-color: transparent;

    @media screen and (max-width: 1440px) {
      width: 65% !important;
      margin-bottom: 0px;
    }
  }

  .carousel-caption{
    width: 40%;
    height: 100%;
    position: absolute !important;
    right: 15% !important;
    bottom: 1.25rem !important;
    left: 20% !important;
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
    color: ${(props) => props.theme.white} !important;
    text-align: left;

    h1{
      @media screen and (max-width: 1440px) {
        font-size: 25px;
      }
    }

    p{
      @media screen and (max-width: 1440px) {
        font-size: 12px;
      }
    }
  }

  .carousel-control-next{
    width: 45px;
    height: 45px;
    border-radius: 15px;
    top: 180px;
    right: 70px;
    background-color: ${(props) => props.theme.backgroundTertiary};
    background-size: cover;

    @media screen and (max-width: 1440px) {
      right: 20px;
    }
  }

  .carousel-control-prev{
    width: 45px;
    height: 45px;
    border-radius: 15px;
    top: 180px;
    left: 70px;
    background-color: ${(props) => props.theme.backgroundTertiary};
    background-size: cover;

    @media screen and (max-width: 1440px) {
      left: 20px;
    }
  }

  .carousel-indicators [data-bs-target]{
    width: 8px;
    height: 8px;
    border-radius: 50px !important;
    border: none;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.primary};
  }

  .btn-caption{
    border: none;
    outline: none;
    padding: 13px 20px;
    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  .card{
    width: 348px;
    height: 467px;
    margin-right: 20px;
    border: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #161D26;
    /* float: left; */

      @media screen and (max-width: 1440px) {
        height: 337px;
      }



    span{
      position: absolute;
      color: #000;
      background-color: #11ECC7;
      top: 10px;
      left: 10px;
      padding: 1px 5px;
      border-radius: 8px;
      font-size: 14px;
    }
  }

  .cardImg{
    width: 162px;
    align-self: center;
    justify-self: center;
    margin-top: 60px;
    margin-bottom: -40px;
  }

  .cardBody{
    margin-top: 90px;
    background-color: #F2F4F8;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

  }

  .carouselTokens{
    width: 100%;
    border: 1px solid red;
  }

  .cardTitle{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: -40px !important;

    div{
      padding: 13px 15px;
      border-radius: 10px;
      background-color: #161D26;
      border: 3px solid #fff;
    }

    p{
      margin: 10px 8px;
      font-size: 14px;
    }

    .validation{
      width: 12px;
      margin-bottom: 12px;
    }
  }

  .div-description1{
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: 22px;
      margin: 0px;
    }

    span{
      font-size: 12px;
    }
  }

  .div-description2{
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: 14px;
      margin: 5px 0;
    }

    strong {
      color: #16837C;
    }
  }

  .div-description3{
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: 14px;
      margin: 0px 0;
    }

    span{
      font-size: 12px;
    }
  }

  .evolution{
    width: 100%;
    margin-top: 10px;
  }

  .progress-bar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: var(--bs-progress-bar-color);
    text-align: center;
    white-space: nowrap;
    background-color: #16837C !important;
    transition: var(--bs-progress-bar-transition);
  }

  .btn-token{
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    
    button{
      margin: 10px 0;
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 10px;
      background-color: #16837C;
      color: #fff;

      &:nth-child(2){
        background-color: transparent;
        color: #16837C;
      }
    }
  }

  .cardImgKnowledge{
    
  }

  .cardBodyKnowledge{
    background-color: #F2F4F8;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${(props) => props.theme.backgroundCards};

    
    button{
      margin: 10px 0;
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 10px;
      background-color: #16837C;
      color: #fff;
    }
  }

  .div-cripto{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.lineDeposit};
    margin-bottom: 5px;

    button{
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 10px;
      margin: 5px;
      background-color: ${(props) => props.theme.cripto};
      

      &:nth-child(2){
        opacity: 0.4;
      }
    }
  }

  .div-cripto2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    button{
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 10px;
      margin: 5px;
      color: ${(props) => props.theme.primary};
      background-color: transparent;
    }
  }

  .td{
    display: flex;
    align-items: end;
    justify-content: start;
    border: none;
  }

  .btn-negociar{
    font-size: 14px;
      padding: 8px;
      border: none;
      outline: none;
      border-radius: 10px;
      background-color: #16837C;
      color: #fff;

      @media screen and (max-width: 1440px) {
        font-size: 12px;
        margin-right: 15px;
      }
  }

  .btn-percent{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 50px;

    @media screen and (max-width: 1440px) {
      padding: 15px 30px;
    }

    button{
      padding: 10px;
      border: none;
      border-radius: 10px;
      background-color: ${(props) => props.theme.cripto};
    }
  }

  .input-select{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.search};
  }

  .input-insta{
    width: 75% !important;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: right;
    border: none !important;
  }

  .select{
    width: 25%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none !important;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.search};
    outline: none;
    color: ${(props) => props.theme.search};
    background-color: ${(props) => props.theme.backgroundCards};
    padding-left: 15px;

      &::-webkit-input-placeholder {
        color: ${(props) => props.theme.search};
        background-color: transparent;
        font-family: "Inter", sans-serif;
      }
  }

  .option {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .h3-card{
    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }
  }
  .text-card{
      @media screen and (max-width: 1440px) {
        font-size: 14px !important;
      }
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, 
  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate{
    color: ${props => props.theme.primary} !important;
  }

  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
    color: ${props => props.theme.primary} !important;
    border-radius: 10px !important;
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root,
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .MuiOutlinedInput-notchedOutline{
    border-color: rgba(255, 255, 255, 0.3) !important;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused 
  .MuiOutlinedInput-notchedOutline{
    border-color: rgba(255, 255, 255, 0.3) !important;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
    border-radius: 10px !important;
  }

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    padding: 14px 14px !important;
    color: rgba(255, 255, 255, 0.5) !important;
  }

`;
