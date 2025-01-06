import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { coromont } from '../theme/font/fonts.js';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html,body,main {
    margin: 0;
    padding: 0px 1rem;
    /* background: linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 80%); */
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-centuryGothic);
  }

  main {
    max-width: 98rem;
    margin-inline: auto;
  }

  h2,h4{
  font-family: ${coromont.style.fontFamily};
  }

  h2,h3 {
    font-size: 4rem
  }

  a {
    color: inherit;
    transition: color 0.3s ease;
  }
`;

export const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 4rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const PageNumber = styled.h4`
  font-size: 2rem;
  position: absolute;
  margin: 0;
  opacity: 0.2;
`;

export const Title = styled.h2`
  font-weight: normal;
  font-size: 4rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;
