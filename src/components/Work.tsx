'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

import { HighlightedProject } from './HighlightedProject';

const Projects = styled.div`
  width: 100%;
  margin: 2rem 0px;
  max-width: 90rem;
`;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const HalfSizeProject = styled.div`
  width: 25%;
`;

const FullSizeProject = styled.div`
  width: 55%;
`;

const StackedHighlightedProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

const CenteredHighlightedProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Work = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('work');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= windowHeight) {
          setScrollPercent(0);
        } else if (rect.bottom <= 0) {
          setScrollPercent(100);
        } else {
          const newScrollPercent = (
            100 -
            ((rect.top + rect.height) / windowHeight / 2) * 100
          ).toFixed(2);

          setScrollPercent(parseFloat(newScrollPercent));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FullPage id="work">
      <Content>
        <PageNumber>/02</PageNumber>
        <Title>Featured Projects</Title>
      </Content>

      <Projects>
        <ProjectRow>
          <HalfSizeProject>
            <HighlightedProject
              size={200}
              projectTitle="projectTitle"
              projectDate="Mar 2024"
            />
          </HalfSizeProject>
          <CenteredHighlightedProject>
            <FullSizeProject>
              <HighlightedProject
                size={400}
                projectTitle="projectTitle"
                projectDate="Mar 2024"
              />
            </FullSizeProject>
          </CenteredHighlightedProject>
        </ProjectRow>
        <ProjectRow>
          <FullSizeProject>
            <HighlightedProject
              size={400}
              projectTitle="projectTitle"
              projectDate="Mar 2024"
            />
          </FullSizeProject>
          <StackedHighlightedProjects>
            <HalfSizeProject>
              <HighlightedProject
                size={200}
                projectTitle="projectTitle"
                projectDate="Mar 2024"
              />
            </HalfSizeProject>
            <CenteredHighlightedProject>
              <HalfSizeProject>
                <HighlightedProject
                  size={200}
                  projectTitle="projectTitle"
                  projectDate="Mar 2024"
                />
              </HalfSizeProject>
            </CenteredHighlightedProject>
          </StackedHighlightedProjects>
        </ProjectRow>
      </Projects>
    </FullPage>
  );
};
