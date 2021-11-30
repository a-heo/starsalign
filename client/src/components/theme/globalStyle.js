import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  html, body {
    display: flex; 
    flex: 1 1 auto;
    background-color: #f0f1b3;
    font-family: 'Zilla SLab', serif;
    min-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #5e3b4d;
    text-align: center;
    font-size: min(calc(1rem + 1vw), 50px);
  }
  #root {
    width: 100%;
  }
`;

export default GlobalStyle;
