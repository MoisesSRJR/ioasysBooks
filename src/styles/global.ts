import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`

button{
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .hidden-bar {
    overflow: hidden;
  }

  a{
    text-decoration: none;
  }

  body, textarea, button{
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }

  input, label {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }
  `;

export default GlobalStyles;