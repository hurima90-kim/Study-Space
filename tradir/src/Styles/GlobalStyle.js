import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif,Slack-Lato,appleLogo;
        background-color: #fff;
        font-size: 16px;
    };

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };

    a {
    color: inherit;
    text-decoration: none;
    };

    ol, ul, li {
    list-style: none;
    };
    
    img {
    width: 100%;
    height: 100%;
    };
`;

export default GlobalStyle;
