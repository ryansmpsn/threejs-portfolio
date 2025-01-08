'use client';

import styled from 'styled-components';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

import { HighlightedProject } from './HighlightedProject';

const Projects = styled.div`
  width: 100%;
  margin: 2rem 0px;

  @media ${({ theme }) => theme.device.mobileL} {
    margin: 0px;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;

  @media ${({ theme }) => theme.device.laptop} {
    flex-wrap: wrap;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
  }
`;

const StackedHighlightedProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;

  @media ${({ theme }) => theme.device.laptop} {
    display: contents;
  }
`;

const CenteredHighlightedProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.device.laptop} {
    display: contents;
  }
`;

const QuarterSizeProject = styled.div`
  width: 35%;

  @media ${({ theme }) => theme.device.laptop} {
    flex: 1;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;

const HalfSizeProject = styled.div`
  width: 25%;

  @media ${({ theme }) => theme.device.laptop} {
    flex: 1;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;

const FullSizeProject = styled.div`
  width: 55%;

  @media ${({ theme }) => theme.device.laptop} {
    flex: 1;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;

export const Work = () => {
  // const [scrollPercent, setScrollPercent] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById('work');
  //     if (element) {
  //       const rect = element.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       if (rect.top >= windowHeight) {
  //         setScrollPercent(0);
  //       } else if (rect.bottom <= 0) {
  //         setScrollPercent(100);
  //       } else {
  //         const newScrollPercent = (
  //           100 -
  //           ((rect.top + rect.height) / windowHeight / 2) * 100
  //         ).toFixed(2);

  //         setScrollPercent(parseFloat(newScrollPercent));
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <FullPage id="projects">
      <Content>
        <PageNumber>/02</PageNumber>
        <Title>Projects</Title>
      </Content>

      <Projects>
        <ProjectRow>
          <HalfSizeProject>
            <HighlightedProject
              size={200}
              projectTitle="Superplastic"
              projectDate="Sep 2023"
              src={'/superplastic_logo.svg'}
            />
          </HalfSizeProject>
          <CenteredHighlightedProject>
            <FullSizeProject>
              <HighlightedProject
                size={400}
                projectTitle="Starface"
                projectDate="Apr 2023"
                src={'/big_yellow_render_v2.gif'}
              />
            </FullSizeProject>
          </CenteredHighlightedProject>
        </ProjectRow>
        <ProjectRow>
          <FullSizeProject>
            <HighlightedProject
              size={400}
              projectTitle="Plume"
              projectDate="Mar 2024"
              src={'/plume_logo.svg'}
            />
          </FullSizeProject>
          <StackedHighlightedProjects>
            <QuarterSizeProject>
              <HighlightedProject
                size={200}
                projectTitle="Graveflex"
                projectDate="Nov 2022"
                src={'/graveflex_logo.svg'}
              />
            </QuarterSizeProject>
            <CenteredHighlightedProject>
              <QuarterSizeProject>
                <HighlightedProject
                  size={200}
                  projectTitle="Vilano"
                  projectDate="Apr 2021"
                  src={'/vilano_logo.png'}
                />
              </QuarterSizeProject>
            </CenteredHighlightedProject>
          </StackedHighlightedProjects>
        </ProjectRow>
      </Projects>
    </FullPage>
  );
};
