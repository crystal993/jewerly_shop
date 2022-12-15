import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;