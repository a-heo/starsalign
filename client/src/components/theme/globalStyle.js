import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  html, body {
    display: flex; 
    flex: 1 1 auto;
    background-color: white;
    font-family: 'Zilla Slab';
    min-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #aa96b7;
    text-align: center;
  }
  #root {
    width: 100%;
  }
  h2 {
    font-weight: normal;
    font-style: italic;
  }
  div {
    font-size: 1rem;
  }
  p {
    text-align: left;
  }
  b {
    font-size: calc(1rem + 1vw);
  }
  input {
    border: 1px;
    background-color: #e5edc4;
    font-family: 'Zilla SLab', serif;
    font-size: min(calc(1rem + 1vw), 48px);
    justify-content: flex-end;
    color:  #a3a7e4;
    padding: 0px 1vw 1vw;
    &:hover {
      font-weight: 700;
      font-style: italic;
      background: #a3a7e4;
      color: #f0f1b3;
      border: 1px solid #f0f1b3;
    &[type=submit] {
      background-color: #421b9b;
      &:hover {
        background: #a3a7e4;
        color: #f0f1b3;
      }
    }
  }
  }
  @media only screen and (max-width: 400px) {
    h1 {
        font-size: 2rem;
    }
`;

export default GlobalStyle;
