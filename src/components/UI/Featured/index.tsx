'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <>
                {/* Image : visuel mobile des réalisations Afrolink - remplacer pour mettre en avant une autre campagne */}
              <Image
                src={featured_mobile_banner}
                  alt="Créations Afrolink en version mobile"
                fill
              />
              </>
            ) : (
              <>
                {/* Image : bannière desktop des réalisations Afrolink - modifier le fichier PNG pour mettre à jour le portfolio */}
                <Image src={big_banner} alt="Créations Afrolink en version desktop" fill />
              </>
            )}
          </Div>
        </ImageContainer>
        <h2>Ils propulsent leurs marques avec Afrolink</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            {/* Image : logos des partenaires Afrolink - remplacer l'image pour afficher de nouveaux clients */}
            <Image src={companies_image} alt="Logos de partenaires Afrolink" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
