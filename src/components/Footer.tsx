'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Copyright = styled.p`
  font-size: 0.8rem;
`;

const Address = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
`;

export const Footer = () => (
  <StyledFooter>
    <Copyright>© Ryan Simpson {new Date().getFullYear()}</Copyright>
    <Address href="mailto:ryzizn@gmail.com" target="_blank">
      Ryzizn@gmail.com
    </Address>
  </StyledFooter>
);
