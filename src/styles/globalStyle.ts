import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    :root {
        --black-color: #000000;
        --white-color: #FFFFFF;
        --gray100-color: #DDDDDD;
        --gray200-color: #CBCBCB;
        --gray300-color: #BEBEBE;
        --gray400-color: #A8A8A8;
        --gray500-color: #9B9B9B;
        --purple-color: #6200F0;
        --box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.20);
        --button-shadow : 0px 2px 2px rgba(0, 0, 0, 0.15);
    }
    body {
        background-color: #fff;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
