'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const TransitionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--Background);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Circle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: var(--accent-gradient);
  border-radius: 50%;
  transform-origin: center;
`;

export const PageName = styled(motion.div)`
  position: absolute;
  color: var(--white);
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 10;
  text-shadow: 0 0 30px rgba(226, 124, 0, 0.5);
`;
