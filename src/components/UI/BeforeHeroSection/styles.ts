import styled, { keyframes } from 'styled-components';



const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Root section ───────────────────────────────────────────── */
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
`;

/* ─── Background & overlay ───────────────────────────────────── */
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background: center / cover no-repeat;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  z-index: 2;
`;

/* ─── Tagline (top-right) ────────────────────────────────────── */
export const TaglineBlock = styled.div`
  position: absolute;
  top: 5.5rem;
  right: 2.5rem;
  z-index: 10;
  text-align: right;
  color: #fff;
  line-height: 1.15;
  animation: ${fadeIn} 0.9s ease 0.4s both;

  span {
    display: block;
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  strong {
    display: block;
    font-size: 1.15rem;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;



export const PlayIcon = styled.span`
  font-size: 1.1rem;
  display: block;
`;

/* ─── Bottom-left title ──────────────────────────────────────── */
export const BottomLeft = styled.div`
  position: absolute;
  bottom: 3.5rem;
  left: 2.5rem;
  z-index: 10;
  animation: ${fadeIn} 1s ease 0.2s both;

  @media (max-width: 768px) {
    bottom: 2rem;
    left: 1.2rem;
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 3.6rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin: 0;
`;

/* ─── Dark mode toggle (bottom-right) ────────────────────────── */
export const DarkModeToggle = styled.div`
  position: absolute;
  bottom: 1.6rem;
  right: 2.5rem;
  z-index: 10;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.7);
    display: inline-block;
  }

  @media (max-width: 600px) { display: none; }
`;

