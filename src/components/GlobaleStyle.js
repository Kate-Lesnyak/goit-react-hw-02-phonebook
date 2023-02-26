import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* background-color: var(--primary-white-color);
  color: var(--primary-text-color); */
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

а {
  text-decoration: none;
  color: inherit;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1 {
font-size: 32px;
}

h2 {
font-size: 24px;
}

h1 , h2 {
line-height: 1.22;
color: #FFFFFF;
background-color: #338309;
text-align: center;
margin-bottom: 20px;
padding: 10px;
text-transform: uppercase;
}
`;
