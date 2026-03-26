'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { GetStartedButton } from '@/components';
import {
  BurgerMenu,
  CallToActions,
  DesktopNav,
  Drawer,
  DrawerActions,
  DrawerNav,
  Inner,
  LogoContainer,
  Wrapper,
} from './styles';
import afrolinkLogo from '../../../../public/svgs/logo_Afrolink-removebg-preview_3.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-menu]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Fermer le menu au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Wrapper data-menu $isMenuOpen={isOpen}>
        <Inner>
          <LogoContainer>
            <Link href="/" onClick={closeMenu}>
              <Image src={afrolinkLogo} alt="Logo Afrolink" priority />
            </Link>
            <BurgerMenu
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Ouvrir le menu"
              data-menu
            >
              <motion.div
                variants={menu}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
              />
              <Image
                src={ic_bars}
                alt="Icône menu mobile"
                width={24}
                height={24}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </BurgerMenu>
          </LogoContainer>

          <DesktopNav>
            {links.map((link, index) => (
              <AnimatedLink key={link.linkTo + index} title={link.linkTo} url={link.url} />
            ))}
          </DesktopNav>

          <CallToActions>
            <AnimatedLink title="Afrolink" url="/afrolink" />
            <GetStartedButton padding="0.5rem 0.75rem" />
          </CallToActions>
        </Inner>
      </Wrapper>

      <Drawer $isOpen={isOpen}>
        <DrawerNav>
          {links.map((link, index) => (
            <a
              key={link.linkTo + index}
              href={link.url}
              onClick={closeMenu}
            >
              {link.linkTo}
            </a>
          ))}
        </DrawerNav>
        <DrawerActions>
          <AnimatedLink title="Afrolink" url="/afrolink" />
          <GetStartedButton padding="0.75rem 1rem" />
        </DrawerActions>
      </Drawer>
    </>
  );
};

export default Header;