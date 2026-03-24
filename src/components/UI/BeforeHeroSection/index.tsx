"use client";
import React from 'react';
import Header from '../Header';
import {
  Section,
  BackgroundImage,
  Overlay,
  TaglineBlock,
  BottomLeft,
  HeroTitle,
  PlayIcon,
  DarkModeToggle,
} from './styles';

type BeforeHeroSectionProps = {
  backgroundImage?: string;
  title?: string;
  taglineSpan?: string;
  taglineStrong?: string;
};

const BeforeHeroSection: React.FC<BeforeHeroSectionProps> = ({
  backgroundImage = '/images/before-hero.jpg',
  title = "NOUS SOMMES L'AGENCE\nCRÉATIVE GLOBALE POUR\nLES MARQUES\n[HORS-NORMES]",
  taglineSpan = "AGENCE CRÉATIVE",
  taglineStrong = "POUR LES MARQUES HORS-NORMES",
}) => {
  return (
    <Section>
      <Header />
      <BackgroundImage style={{ backgroundImage: `url('${backgroundImage}')` }} />
      <Overlay />

      {/* Tagline top-right */}
      <TaglineBlock>
        <span>{taglineSpan}</span>
        <strong>{taglineStrong}</strong>
      </TaglineBlock>

      {/* Hero title bottom-left */}
      <BottomLeft>
        <HeroTitle>
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </HeroTitle>
      </BottomLeft>

      {/* Dark mode toggle bottom-right */}
      <DarkModeToggle>
        <span className="dot" /> MODE SOMBRE
      </DarkModeToggle>
    </Section>
  );
};

export default BeforeHeroSection;