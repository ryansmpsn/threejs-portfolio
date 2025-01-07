'use client';

import styled from 'styled-components';

import {
  Content,
  FullPage,
  PageNumber,
  Summary,
  Title
} from '@/theme/globalStyles';

import { TechnologyAccordion } from './TechnologyAccordion';

const TechnologyGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  margin-top: 6rem;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 2rem;
  }
`;

const StyledTechnologyAccordion1 = styled(TechnologyAccordion)``;

const StyledTechnologyAccordion2 = styled(TechnologyAccordion)`
  grid-column: 3/4;

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 2/3;
    grid-column: 2/3;
  }
`;
const StyledTechnologyAccordion3 = styled(TechnologyAccordion)`
  grid-column: 5/6;

  @media ${({ theme }) => theme.device.laptop} {
    grid-row: 4/5;
    grid-column: 2/3;
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;

const StyledTechnologyAccordion4 = styled(TechnologyAccordion)`
  grid-column: 2/3;

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 4/5;
    grid-column: 2/3;
  }
`;
const StyledTechnologyAccordion5 = styled(TechnologyAccordion)`
  grid-column: 4/5;

  @media ${({ theme }) => theme.device.laptop} {
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 5/6;

    grid-column: 1/2;
  }
`;
const StyledTechnologyAccordion6 = styled(TechnologyAccordion)`
  grid-column: 1/2;

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 7/8;
    grid-column: 2/3;
  }
`;
const StyledTechnologyAccordion7 = styled(TechnologyAccordion)`
  grid-column: 3/4;

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 8/9;
    grid-column: 1/2;
  }
`;
const StyledTechnologyAccordion8 = styled(TechnologyAccordion)`
  grid-column: 5/6;

  @media ${({ theme }) => theme.device.laptop} {
    grid-row: 4/5;
    grid-column: 4/5;
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-row: 9/10;
    grid-column: 2/3;
  }
`;

export const Technology = () => (
  <FullPage id="technology">
    <Content>
      <PageNumber>/03</PageNumber>
      <Title>Technology</Title>
      <Summary>
        I am experienced with a variety of technologies and languages, below are
        some of the latest i've used on recent projects. I'm always looking to
        learn new things and improve my skills.
      </Summary>
    </Content>
    <TechnologyGrid>
      <StyledTechnologyAccordion1
        technologyTitle="React"
        technologyDescription="A JavaScript library for building dynamic and interactive user interfaces, primarily for single-page applications."
      />
      <StyledTechnologyAccordion2
        technologyTitle="Next.js"
        technologyDescription="A React-based framework for building fast, production-ready web applications with features like server-side rendering, static site generation, and API routes."
      />
      <StyledTechnologyAccordion3
        technologyTitle="Angular"
        technologyDescription="A comprehensive TypeScript-based web application framework for building scalable and dynamic single-page applications with a strong focus on structure and maintainability."
      />
      <StyledTechnologyAccordion4
        technologyTitle="Three.js"
        technologyDescription="A powerful JavaScript library for creating and rendering 3D graphics in the browser using WebGL."
      />
      <StyledTechnologyAccordion5
        technologyTitle="Konva.js"
        technologyDescription="A JavaScript library for creating 2D canvas-based graphics, providing high performance and interactivity for applications like image editing and complex visualizations."
      />
      <StyledTechnologyAccordion6
        technologyTitle="Go"
        technologyDescription="An open-source programming language designed for simplicity, performance, and scalability, often used in systems programming and cloud-native applications."
      />
      <StyledTechnologyAccordion7
        technologyTitle="React Native"
        technologyDescription="A framework for building native mobile applications using React, allowing developers to write cross-platform apps with a single codebase."
      />
      <StyledTechnologyAccordion8
        technologyTitle="Node.js"
        technologyDescription="A JavaScript runtime built on Chrome's V8 engine, enabling server-side execution of JavaScript for building scalable, high-performance network applications."
      />
    </TechnologyGrid>
  </FullPage>
);
