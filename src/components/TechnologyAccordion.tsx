'use client';

import { animated, config, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';

import ArrowIcon from '../../public/right-arrow.svg';

const Accordion = styled(animated.div)`
  height: min-content;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;

  --size: 20px;
  --thickness: 1px;
  --gap: 1rem;

  padding: calc(var(--gap) + var(--thickness));
  outline: var(--thickness) solid ${({ theme }) => theme.muted};
  outline-offset: calc(-1 * var(--thickness));
  mask:
    conic-gradient(at var(--size) var(--size), #0000 75%, #000 0) 0 0 /
      calc(100% - var(--size)) calc(100% - var(--size)),
    linear-gradient(#000 0 0) content-box;
  transition: outline-offset 0.2s;

  &:hover {
    outline-offset: calc(var(--gap) / -3);
  }
`;

const TechnologyTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 0;
`;

const TechnologyDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
`;

const StyledArrowIcon = styled(animated.svg)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  margin-bottom: -0.125rem;

  * {
    stroke: ${({ theme }) => theme.text};
  }
`;

interface TechnologyAccordionProps {
  technologyTitle: string;
  technologyDescription: string;
  style?: React.CSSProperties;
}

export const TechnologyAccordion: React.FC<TechnologyAccordionProps> = ({
  technologyTitle,
  technologyDescription,
  style
}) => {
  const [open, setOpen] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState(0);

  const [ref, { height }] = useMeasure();

  useEffect(() => {
    setAccordionHeight(height);
  }, [height, open]);

  const openAnimation = useSpring({
    from: { height: '20px' },
    to: { height: open ? `${accordionHeight + 40}px` : '20px' },
    config: config.stiff
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(-45deg)'
    },
    to: {
      transform: open ? 'rotate(45deg)' : 'rotate(-45deg)'
    },
    config: config.wobbly
  });

  return (
    <div style={style}>
      <Accordion style={openAnimation} onClick={() => setOpen(!open)}>
        <TechnologyTitle>
          {technologyTitle}
          <StyledArrowIcon style={iconAnimation}>
            <ArrowIcon />
          </StyledArrowIcon>
        </TechnologyTitle>

        <TechnologyDescription ref={ref}>
          {technologyDescription}
        </TechnologyDescription>
      </Accordion>
    </div>
  );
};

TechnologyAccordion.propTypes = {
  technologyTitle: PropTypes.string.isRequired,
  technologyDescription: PropTypes.string.isRequired
};
