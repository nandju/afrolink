'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ic_import from '../../../../public/svgs/ic_import.svg';
import { Inner, SecondOverlay, Wrapper } from './styles';

type PreloaderProps = {
  setComplete: Dispatch<SetStateAction<boolean>>;
};

const logoLetters = Array.from('Afro');

const Preloader = ({ setComplete }: PreloaderProps) => {
  const spans = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const secondOverlayRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: 'back.out(1.7)' },
    });

    timeline.to(imageRef.current, {
      rotate: '360deg',
      duration: 1.4,
    });

    timeline.to(imageRef.current, {
      y: '-100%',
    });

    timeline.to(spans.current, {
      y: '-100%',
      duration: 1.4,
      stagger: 0.05,
    });

    timeline.to(
      [wrapperRef.current, secondOverlayRef.current],
      {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        stagger: 0.2,
        onComplete: () => setComplete(true),
      },
      '-=0.8',
    );

    timeline.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1,
      ease: [0.83, 0, 0.17, 1] as any,
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          {/* Image : icône animée du préchargement Afrolink - modifier ici pour un nouveau pictogramme */}
          <Image ref={imageRef} src={ic_import} alt="Icône de préchargement Afrolink" />
          <div>
            {logoLetters.map((letter, index) => (
              <div
                key={letter + index}
                ref={(element) => {
                  spans.current[index] = element;
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef} />
    </>
  );
};

export default Preloader;
