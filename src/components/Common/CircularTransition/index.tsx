'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { TransitionOverlay, Circle, PageName } from './styles';

interface CircularTransitionProps {
  children: React.ReactNode;
}

const CircularTransition: React.FC<CircularTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const router = useRouter();

  const startTransition = useCallback((href: string) => {
    const pageName = href.replace('/', '').charAt(0).toUpperCase() + href.slice(2) || 'Accueil';
    setTargetPage(pageName);
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 1500);
  }, [router]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && !link.href.includes('#')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          startTransition(href);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [startTransition]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <TransitionOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Circle
              initial={{ 
                scale: 0,
                x: '-50%',
                y: '-50%'
              }}
              animate={{ 
                scale: 300,
                x: '-50%',
                y: '-50%'
              }}
              exit={{ 
                scale: 0,
                x: '-50%',
                y: '-50%'
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
            <PageName
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {targetPage}
            </PageName>
          </TransitionOverlay>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default CircularTransition;
