import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }
    html {
        font-family: 'Noto Sans JP', sans-serif;  
    }

    body {
        width: 100%;
        background-color: #3f3f3f;
    }
`