'use client';

import Link from 'next/link';
import styled from 'styled-components';

import RSLogo from '../../public/rs-logo.svg';

const MainNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-between;
  z-index: 1;
`;

const HomeLink = styled(Link)`
  svg {
    width: 30px;
    height: 30px;
    filter: invert(100%);
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavText = styled(Link)`
  text-decoration: none;

  &:hover {
    /* TODO: fix muted import color */
    color: #4c4c4c;
  }
`;

const ContactButton = styled(Link)`
  font-size: 1rem;

  &:hover {
    color: #4c4c4c;
  }
`;

export const NavBar = () => (
  <MainNav>
    {/* TODO: scroll to top */}
    <HomeLink href="#landing">
      <RSLogo />
    </HomeLink>
    <NavItems>
      <NavItem>
        <NavText href="#about">About Me</NavText>
      </NavItem>
      <NavItem>
        <NavText href="#work">Featured Work</NavText>
      </NavItem>
      <NavItem>
        <NavText href="#technology">Technology</NavText>
        {/* TODO: Open and close random accordions in an interval, stop flow when user interacts with accordions */}
      </NavItem>
    </NavItems>

    <ContactButton href="#contact">Contact</ContactButton>
  </MainNav>
);
