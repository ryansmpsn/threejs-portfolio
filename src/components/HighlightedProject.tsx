'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlusRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Plus = styled.div`
  position: relative;
  height: 11px;
  width: 11px;
`;
const PlusHorizontal = styled.div`
  position: absolute;
  background-color: #dfdad7;
  width: 11px;
  height: 0.5px;
  top: 5px;
`;
const PlusVertical = styled.div`
  position: absolute;
  background-color: #dfdad7;
  width: 0.5px;
  height: 11px;
  left: 5.5px;
`;

const ImageContainer = styled.div`
  margin: -1px 10px;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: none;
  }
`;

const StyledImage = styled(Image)`
  aspect-ratio: 1/1;
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
  cursor: pointer;
  object-fit: contain;

  &:hover,
  &:focus {
    filter: none;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectText = styled.p`
  margin: 0.3125rem 0.625rem;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const ProjectDate = styled.p`
  margin: 0.3125rem 0.625rem;
  font-size: 0.625rem;
`;

interface HighlightedProjectProps {
  size: number;
  projectTitle: string;
  projectDate: string;
  src: string;
}

export const HighlightedProject: React.FC<HighlightedProjectProps> = ({
  size,
  projectTitle,
  projectDate,
  src
}) => {
  // TODO: paralax on scroll
  return (
    <ProjectImageContainer>
      <PlusRow>
        <Plus>
          <PlusHorizontal />
          <PlusVertical />
        </Plus>
        <Plus>
          <PlusHorizontal />
          <PlusVertical />
        </Plus>
      </PlusRow>
      <ImageContainer>
        <StyledImage
          src={src}
          width={size}
          height={size}
          alt={`${projectTitle} thumbnail`}
        />
      </ImageContainer>
      <ProjectDescription>
        <ProjectText>{projectTitle}</ProjectText>
        <ProjectDate>{projectDate}</ProjectDate>
      </ProjectDescription>
      <PlusRow>
        <Plus>
          <PlusHorizontal />
          <PlusVertical />
        </Plus>
        <Plus>
          <PlusHorizontal />
          <PlusVertical />
        </Plus>
      </PlusRow>
    </ProjectImageContainer>
  );
};

HighlightedProject.propTypes = {
  size: PropTypes.number.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDate: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
