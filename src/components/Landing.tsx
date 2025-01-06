'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { FullPage } from '@/theme/globalStyles';

const Title = styled.h1``;

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const Landing = () => {
  const phrases = [
    'Ryan Simpson',
    'Software Engineer',
    'Programs daily',
    'some long witty text sentence here',
    'I',
    'Have ',
    'two or three',
    'Cats'
  ];
  const textRef = useRef(null);
  const phraseIndexRef = useRef(0);

  useEffect(() => {
    if (!textRef.current) return;

    const fx = new TextScramble(textRef.current);

    const nextPhrase = () => {
      fx.setText(phrases[phraseIndexRef.current]).then(() => {
        setTimeout(() => {
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;
          nextPhrase();
        }, 3000);
      });
    };

    nextPhrase();

    // Cleanup any running animation frame when the component unmounts
    return () => {
      cancelAnimationFrame(fx.frameRequest);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <FullPage id="landing">
      <Title>
        <div ref={textRef} className="text" />
      </Title>
    </FullPage>
  );
};

export default Landing;
