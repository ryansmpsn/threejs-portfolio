'use client';

import { useEffect, useState } from 'react';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

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
    </FullPage>
  );
};
