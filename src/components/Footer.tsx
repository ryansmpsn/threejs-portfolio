'use client';

import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const Copyright = styled.p`
  font-size: 0.75rem;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 9px;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <Copyright>
      Copyright © {new Date().getFullYear()} Ryan Simpson | All Rights
      Reserved.
    </Copyright>
  </StyledFooter>
);
