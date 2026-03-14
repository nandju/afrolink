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

const BeforeHeroSection: React.FC = () => {


  return (
    <Section>
      <Header />
      <BackgroundImage />
      <Overlay />


      {/* Tagline top-right */}
      <TaglineBlock>
        <span>CREATIVE AGENCY</span>
        <strong>FOR OUTSIDER BRANDS</strong>
      </TaglineBlock>



      {/* Hero title bottom-left */}
      <BottomLeft>
        <HeroTitle>
          NOUS SOMMES L&apos;AGENCE<br />
          CRÉATIVE GLOBALE POUR<br />
          LES MARQUES<br />
          [HORS-NORMES]
        </HeroTitle>
      </BottomLeft>

      {/* Dark mode toggle bottom-right */}
      <DarkModeToggle>
        <span className="dot" /> DARK MODE
      </DarkModeToggle>
    </Section>
  );
};

export default BeforeHeroSection;