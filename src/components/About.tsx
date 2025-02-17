'use client';

import styled from 'styled-components';

import {
  Content,
  FullPage,
  PageNumber,
  Summary,
  Title
} from '@/theme/globalStyles';

const Details = styled.p`
  font-size: 1rem;
  max-width: 18.75rem;
  text-align: center;
  margin-inline: auto;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 10px;
  }
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
  margin: 0px;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 16px;
  }
`;
const StatTitle = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.muted};

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 10px;
  }
`;

export const About = () => (
  <FullPage id="about">
    <Content>
      <PageNumber>/01</PageNumber>
      <Title>About Me</Title>
      <Summary>
        I am a software engineer with a passion for building web applications
        based in Orlando Florida. With 7 years of experience, i've been able to
        bring to life pixel perfect websites with stunning designs.
      </Summary>
      <Details>
        I am currently working as a full-stack developer at a startup in
        Chicago, IL. I am responsible for building and maintaining the company's
        web applications, which are used by thousands of users every day. My
        role involves working closely with the design and product teams to
        implement new features and improve the user experience.
      </Details>
      <Stats>
        <StatRow>
          <Stat>
            {/* TODO: count up numbers when in view */}
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
