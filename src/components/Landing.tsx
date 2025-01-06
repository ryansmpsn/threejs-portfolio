'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { FullPage } from '@/theme/globalStyles';

const Title = styled.h1``;

const phrases = [
  'Ryan Simpson,',
  'sooner or later',
  "you're going to realize",
  'just as I did',
  "that there's a difference",
  'between knowing the path',
  'and walking the path'
];

const randomChar = (chars: string) => {
  return chars[Math.floor(Math.random() * chars.length)];
};

const useTextScramble = (phrases: string[], interval: number) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const [text, setText] = useState('');
  const queueRef = useRef<
    { from: string; to: string; start: number; end: number; char?: string }[]
  >([]);
  const frameRef = useRef(0);
  const resolveRef = useRef<() => void>();
  const frameRequestRef = useRef<number>();
  const phraseIndexRef = useRef(0);

  const update = () => {
    let output = '';
    let complete = 0;
    const queue = queueRef.current;

    queue.forEach((item) => {
      if (frameRef.current >= item.end) {
        complete++;
        output += item.to;
      } else if (frameRef.current >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = randomChar(chars);
        }
        output += `<span class="dud">${item.char}</span>`;
      } else {
        output += item.from;
      }
    });

    setText(output);

    if (complete === queue.length) {
      resolveRef.current?.();
    } else {
      frameRequestRef.current = requestAnimationFrame(update);
      frameRef.current++;
    }
  };

  const setTextWithScramble = (newText: string) => {
    const oldText = text;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => {
      resolveRef.current = resolve;
    });

    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 80);
      const end = start + Math.floor(Math.random() * 80);
      queueRef.current.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequestRef.current!);
    frameRef.current = 0;
    update();

    return promise;
  };

  useEffect(() => {
    const nextPhrase = () => {
      setTextWithScramble(phrases[phraseIndexRef.current]).then(() => {
        setTimeout(() => {
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;
          nextPhrase();
        }, interval);
      });
    };

    nextPhrase();

    return () => {
      cancelAnimationFrame(frameRequestRef.current!);
    };
  }, [phrases, interval]);

  return text;
};

export const Landing: React.FC = () => {
  const scrambledText = useTextScramble(phrases, 800);

  return (
    <FullPage id="landing">
      <Title>
        <span dangerouslySetInnerHTML={{ __html: scrambledText }} />
      </Title>
    </FullPage>
  );
};
