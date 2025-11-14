'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { useState, type ReactNode } from 'react';
import StyledComponentsRegistry from '../../../libs/registry';
import { Footer, Header, Preloader } from '..';
import { GlobalStyles } from './GlobalStyles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
