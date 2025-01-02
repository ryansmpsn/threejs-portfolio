'use client';

import styled from 'styled-components';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

const Summary = styled.p`
  font-size: 1.5rem;
`;

const Details = styled.p`
  font-size: 1rem;
  max-width: 18.75rem;
  text-align: center;
  margin-inline: auto;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.h3`
  margin: 0;
`;
const StatTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.muted};
`;

export const About = () => (
  <FullPage id="about">
    <Content>
      <PageNumber>/01</PageNumber>
      <Title>About Me</Title>
      <Summary>
        Ryan, a software engineer with a passion for building web applications.
        Has experience with a variety of technologies and languages, including
        JavaScript, TypeScript, React, Node.js, and Python. Always looking to
        learn new things and improve skills.
      </Summary>
      <Details>
        I am currently working as a full-stack developer at a startup in
        Vancouver, BC. I am responsible for building and maintaining the
        company's web application, which is used by thousands of users every
        day. My role involves working closely with the design and product teams
        to implement new features and improve the user experience. I also help
        to maintain the backend services and ensure the application is scalable
        and performant.
      </Details>
      <Stats>
        <StatRow>
          <Stat>
            <StatValue>1.75+</StatValue>
            <StatTitle>Cups of coffee / day</StatTitle>
          </Stat>
          <Stat>
            <StatValue>30+</StatValue>
            <StatTitle>Projects Completed</StatTitle>
          </Stat>
        </StatRow>
        <StatRow>
          <Stat>
            <StatValue>+35%</StatValue>
            <StatTitle>Free time spent coding</StatTitle>
          </Stat>
          <Stat>
            <StatValue>+95%</StatValue>
            <StatTitle>Work done in dark mode</StatTitle>
          </Stat>
        </StatRow>
      </Stats>
    </Content>
  </FullPage>
);
