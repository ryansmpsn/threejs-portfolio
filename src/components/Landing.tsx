'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 65vh;
  max-width: 50rem;
  margin-inline: auto;
  display: flex;
  padding-top: 10rem;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3.5rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 2.5rem;
  }
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

const CtaButton = styled(Link)`
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  font-size: 0.875rem;
`;

const phrases = [
  'Ryan Simpson',
  'Application Engineer',
  'Shipped product features used by thousands of users.',
  'Modern frontend systems, measurable outcomes.',
  'Ryan Simpson',
  'Application Engineer'
];

// Function-based implementation of TextScramble
const useTextScramble = (el: React.MutableRefObject<HTMLElement | null>) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRef = useRef<number | null>(0); // Correctly defined here
  const resolveRef = useRef<((value?: unknown) => void) | null>(null);
  type QueueItem = {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  };

  const queueRef = useRef<QueueItem[]>([]);

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  const update = () => {
    const queue = queueRef.current;
    if (!el.current || queue.length === 0) return;

    let output = '';
    let complete = 0;

    queue.forEach((item, i) => {
      const { from, to, start, end } = item;
      let { char } = item;

      if (!frameRef.current) {
        return;
      }

      if (frameRef.current >= end) {
        complete++;
        output += to;
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.08) {
          char = randomChar();
          queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    });

    el.current.innerHTML = output;

    if (complete === queue.length) {
      resolveRef.current?.();
    } else {
      if (frameRef.current !== null) {
        frameRef.current++;
      }
      requestAnimationFrame(update);
    }
  };

  const setText = (newText: string) => {
    if (!el.current) return Promise.resolve();

    const oldText = el.current.innerText || '';
    const length = Math.max(oldText.length, newText.length);

    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 200);
      const end = start + Math.floor(Math.random() * 200);
      queueRef.current.push({ from, to, start, end });
    }

    frameRef.current = 0;

    return new Promise((resolve) => {
      resolveRef.current = resolve;
      requestAnimationFrame(update);
    });
  };

  return { setText, frameRef };
};

const Landing = () => {
  const textRef = useRef(null);
  const phraseIndexRef = useRef(0);

  const { setText, frameRef } = useTextScramble(textRef);

  useEffect(() => {
    if (!textRef.current) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    const nextPhrase = () => {
      setText(phrases[phraseIndexRef.current]).then(() => {
        timeoutId = setTimeout(() => {
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;
          nextPhrase();
        }, 3000);
      });
    };

    nextPhrase();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const frame = frameRef.current;
      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
      clearTimeout(timeoutId);
    };
  }, [setText, frameRef]);

  return (
    <Container id="landing">
      <Title>
        <div ref={textRef} className="text" aria-live="polite" />
      </Title>
      <CtaRow>
        <CtaButton href="mailto:ryzizn@gmail.com">Email</CtaButton>
        <CtaButton href="https://www.linkedin.com/in/ryan-developer/">
          LinkedIn
        </CtaButton>
        <CtaButton href="https://github.com/ryansmpsn">GitHub</CtaButton>
        <CtaButton href="/Ryan-Simpson-Resume.pdf">Resume PDF</CtaButton>
      </CtaRow>
    </Container>
  );
};

export default Landing;
