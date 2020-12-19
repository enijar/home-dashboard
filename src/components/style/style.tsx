import { createGlobalStyle } from "styled-components";
import vars from "../../config/vars";

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  html {
    font-size: ${vars.fontSize}px;
    font-family: ${vars.fontFamily};
  }

  a {
    text-decoration: none;
  }
`;
