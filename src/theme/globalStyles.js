import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { coromont } from '../theme/font/fonts.js';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.background};
  }

  html,body,main {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-family: var(--font-centuryGothic);
  }
  
  main {
    padding: 0px 2rem;
    background: transparent;
    max-width: 98rem;
    margin-inline: auto;
    position: relative;
  }

  h1,h2,h4{
  font-family: ${coromont.style.fontFamily};
  }

  h2,h3 {
    font-size: 4rem;
    
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 3rem;
    }

    @media ${({ theme }) => theme.device.tablet} {
      font-size: 2rem;
    }

    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 1.5rem;
    }
  }

  a {
    color: inherit;
    transition: color 0.3s ease;
  }
`;

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 4rem;
  margin-bottom: 12.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 6rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const PageNumber = styled.h4`
  font-size: 2rem;
  position: absolute;
  margin: 0px;
  opacity: 0.2;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  margin: 0px;
  margin-bottom: 4rem;
  text-align: center;
  text-transform: uppercase;

  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 2rem;
  }
`;

export const Summary = styled.p`
  font-size: 1.5rem;
  margin-top: 0px;

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 1.25rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    margin-bottom: 2rem;
    font-size: 0.875rem;
    text-align: center;
  }
`;
