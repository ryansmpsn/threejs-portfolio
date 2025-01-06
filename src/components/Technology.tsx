'use client';

import styled from 'styled-components';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

import { TechnologyAccordion } from './TechnologyAccordion';

const Summary = styled.p`
  font-size: 1.5rem;
`;

const TechnologyGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(3, auto);
  font-size: 1.5rem;
  gap: 1rem;
  margin-top: 6rem;
`;

export const Technology = () => (
  <FullPage id="technology">
    <Content>
      <PageNumber>/03</PageNumber>
      <Title>Technology</Title>
      <Summary>
        Ryan, a software engineer with a passion for building web applications.
        Has experience with a variety of technologies and languages, including
        JavaScript, TypeScript, React, Node.js, and Python. Always looking to
        learn new things and improve skills.
      </Summary>
    </Content>
    <TechnologyGrid>
      <TechnologyAccordion
        technologyTitle="React"
        technologyDescription="A JavaScript library for building user interfaces."
      />
      <TechnologyAccordion
        technologyTitle="Next.js"
        technologyDescription="A JavaScript framework for building server-side rendered React applications."
        style={{ gridColumn: '3/4' }}
      />
      <TechnologyAccordion
        technologyTitle="Angular"
        technologyDescription="A JavaScript framework for building user interfaces."
        style={{ gridColumn: '5/6' }}
      />
      <TechnologyAccordion
        technologyTitle="Three.js"
        technologyDescription="A TypeScript-based open-source web application framework."
        style={{ gridColumn: '2/3' }}
      />
      <TechnologyAccordion
        technologyTitle="Konva.js"
        technologyDescription="A JavaScript runtime built on Chrome's V8 JavaScript engine."
        style={{ gridColumn: '4/5' }}
      />
      <TechnologyAccordion
        technologyTitle="Go"
        technologyDescription="An open-source programming language that makes it easy to build simple, reliable, and efficient software."
        style={{ gridColumn: '1/2' }}
      />
      <TechnologyAccordion
        technologyTitle="React Native"
        technologyDescription="A high-level, interpreted programming language with dynamic semantics."
        style={{ gridColumn: '3/4' }}
      />
      <TechnologyAccordion
        technologyTitle="Python"
        technologyDescription="A dynamic, open-source programming language with a focus on simplicity and productivity."
        style={{ gridColumn: '5/6' }}
      />
    </TechnologyGrid>
  </FullPage>
);
