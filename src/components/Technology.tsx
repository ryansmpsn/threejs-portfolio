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
        some of my favorite. I'm always looking to learn new things and improve
        my skills.
      </Summary>
    </Content>
    <TechnologyGrid>
      <StyledTechnologyAccordion1
        technologyTitle="React"
        technologyDescription="A JavaScript library for building user interfaces."
      />
      <StyledTechnologyAccordion2
        technologyTitle="Next.js"
        technologyDescription="A JavaScript framework for building server-side rendered React applications."
      />
      <StyledTechnologyAccordion3
        technologyTitle="Angular"
        technologyDescription="A JavaScript framework for building user interfaces."
      />
      <StyledTechnologyAccordion4
        technologyTitle="Three.js"
        technologyDescription="A TypeScript-based open-source web application framework."
      />
      <StyledTechnologyAccordion5
        technologyTitle="Konva.js"
        technologyDescription="A JavaScript runtime built on Chrome's V8 JavaScript engine."
      />
      <StyledTechnologyAccordion6
        technologyTitle="Go"
        technologyDescription="An open-source programming language that makes it easy to build simple, reliable, and efficient software."
      />
      <StyledTechnologyAccordion7
        technologyTitle="React Native"
        technologyDescription="A high-level, interpreted programming language with dynamic semantics."
      />
      <StyledTechnologyAccordion8
        technologyTitle="Python"
        technologyDescription="A dynamic, open-source programming language with a focus on simplicity and productivity."
      />
    </TechnologyGrid>
  </FullPage>
);
