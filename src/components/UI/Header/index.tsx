'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { GetStartedButton } from '@/components';
import { BurgerMenu, CallToActions, Inner, LogoContainer, Nav, Wrapper } from './styles';
import afrolinkLogo from '../../../../public/svgs/logo_Afrolink-removebg-preview_3.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          {/* Image : logo principal Afrolink - remplacer le fichier SVG pour mettre à jour l'identité visuelle */}
          <Image src={afrolinkLogo} alt="Logo Afrolink" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            />
            {/* Image : icône de menu mobile - substituer le SVG pour changer le pictogramme */}
            <Image src={ic_bars} alt="Icône menu mobile" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, index) => (
            <AnimatedLink key={link.linkTo + index} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <AnimatedLink title="Se connecter" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
