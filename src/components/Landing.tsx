'use client';

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

// Function-based implementation of TextScramble
const useTextScramble = (el) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const frameRef = useRef(null); // Correctly defined here
  const resolveRef = useRef(null);
  const queueRef = useRef([]);

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  const update = () => {
    const queue = queueRef.current;
    if (!el.current || queue.length === 0) return;

    let output = '';
    let complete = 0;

    queue.forEach((item, i) => {
      const { from, to, start, end } = item;
      let { char } = item;

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
      frameRef.current++;
      requestAnimationFrame(update);
    }
  };

  const setText = (newText) => {
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
  const phrases = [
    'Ryan Simpson',
    'Software Engineer',
    'Believe in yourself.',
    'Stay positive.',
    'Ryan Simpson',
    'Software Engineer',
    'Success is not final.',
    'failure is not fatal.',
    'It is the courage to continue that counts.',
    'Ryan Simpson',
    'Software Engineer',
    'The only limit to our realization of tomorrow,',
    'is our doubts of today.',
    'Ryan Simpson',
    'Software Engineer',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Don’t watch the clock; do what it does. Keep going.'
  ];
  const textRef = useRef(null);
  const phraseIndexRef = useRef(0);

  const { setText, frameRef } = useTextScramble(textRef);

  useEffect(() => {
    if (!textRef.current) return;

    const nextPhrase = () => {
      setText(phrases[phraseIndexRef.current]).then(() => {
        setTimeout(() => {
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;
          nextPhrase();
        }, 3000);
      });
    };

    nextPhrase();

    return () => {
      // Cleanup the animation frame on unmount
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [phrases, setText]);

  return (
    <Container id="landing">
      <Title>
        <div ref={textRef} className="text" />
      </Title>
    </Container>
  );
};

export default Landing;
