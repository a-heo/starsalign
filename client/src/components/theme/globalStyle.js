import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  :root {
  --green: #B1C5A0;
  --lilac: #A994BD;
  --lightpink: #D9A9A9;
  --pink: #D98BA0;
  --darkpink: #D96C94;
  --black: #171321;
  --white: #f7f8fa;
  --font-size: 1.3rem;
  --regular: "Red Hat Display", sans-serif;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex; 
    flex: 1 1 auto;
    background-color: white;
    font-family: 'Red Hat Display';
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
    font-family: 'Red Hat Display';
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
  ${'' /* doesn't work  */}
  ${'' /* @media (min-width: 850px) {
    nav {
      max-width: 1200px;
      margin: 0 auto;
    }
    nav li:first-child {
      flex-basis: auto;
      text-align: left;
      margin-right: auto;
    }
  } */}
`;

export default GlobalStyle;
