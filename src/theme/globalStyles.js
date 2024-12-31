import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,body, main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 80%);
    /* background: ${({ theme }) => theme.body}; */
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
