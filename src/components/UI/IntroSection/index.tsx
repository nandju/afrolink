'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import lola_card from '../../../../public/images/format_3_courbe_truth.png';
import orange_card from '../../../../public/images/format_1_truth.png';
import terry_card from '../../../../public/images/format_2_truth.png';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Le studio Afrolink</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer>
          {/* Image : visuel gauche du carrousel studio - remplacez le PNG pour mettre en avant une nouvelle identité */}
          <LeftImage
            className={isHovered ? 'active' : ''}
            src={orange_card}
            alt="Visuel créatif latéral Afrolink"
          />
          {/* Image : visuel central du carrousel studio - mettez à jour ce PNG pour changer la mise en avant */}
          <MiddleImage
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={lola_card}
            alt="Visuel central Afrolink"
          />
          {/* Image : visuel droit du carrousel studio - remplacez ce fichier pour actualiser la galerie */}
          <RightImage
            className={isHovered ? 'active' : ''}
            src={terry_card}
            alt="Visuel créatif latéral Afrolink"
          />
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                {/* Image : pictogramme pour "{edge.point}" - remplacez le SVG pour modifier l'illustration */}
                <Image src={edge.icon} alt={`Icône ${edge.point}`} />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
