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
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '3/4' }}
      />
      <TechnologyAccordion
        technologyTitle="Vue.js"
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '5/6' }}
      />
      <TechnologyAccordion
        technologyTitle="Angular"
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '2/3' }}
      />
      <TechnologyAccordion
        technologyTitle="Node.js "
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '4/5' }}
      />
      <TechnologyAccordion
        technologyTitle="Go"
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '1/2' }}
      />
      <TechnologyAccordion
        technologyTitle="Python"
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '3/4' }}
      />
      <TechnologyAccordion
        technologyTitle="Ruby"
        technologyDescription="A JavaScript library for building user interfaces."
        style={{ gridColumn: '5/6' }}
      />
    </TechnologyGrid>
  </FullPage>
);
