'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section<{ $isMenuOpen: boolean }>`
  position: relative;
  padding: 1rem 0;
  background: transparent;
  z-index: 50;
  opacity: ${props => (props.$isMenuOpen ? '0' : '1')};
  pointer-events: ${props => (props.$isMenuOpen ? 'none' : 'auto')};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  img {
    width: 120px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img:first-child {
      width: 80px;
    }
  }
`;

export const BurgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 51;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 40;
    animation: ${props => props.$isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.2s ease-in'};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Drawer = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #000 0%, #111 100%);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    z-index: 45;
    animation: ${props => props.$isOpen ? 'slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'slideOut 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #e27c00, #ffa500);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;

export const DrawerNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(226, 124, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      color: #ffa500;
      border-bottom-color: #ffa500;
      transform: translateX(8px);
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const DrawerActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(226, 124, 0, 0.3);

  a,
  button {
    width: 100%;
    text-align: center;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  margin-right: -6.3rem;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div span {
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;