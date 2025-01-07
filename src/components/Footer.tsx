'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Copyright = styled.p`
  font-size: 0.75rem;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 9px;
  }
`;

const Address = styled(Link)`
  font-size: 0.75rem;
  text-decoration: none;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 9px;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <Copyright>© {new Date().getFullYear()} Ryan Simpson</Copyright>
    <Address href="mailto:ryzizn@gmail.com" target="_blank">
      Ryzizn@gmail.com
    </Address>
  </StyledFooter>
);
