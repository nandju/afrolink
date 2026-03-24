'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--Background);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--white);
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: var(--light-gray);
`;

const WhyChooseAfroLink: React.FC = () => {
  const titlePhrases = ['Pourquoi Choisir AfroLink'];
  const descriptionPhrases = [
    'Une agence digitale créative basée en Côte d\'Ivoire aidant les marques à se connecter, s\'engager et grandir grâce à une communication impactante.'
  ];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MaskText phrases={titlePhrases} tag="h2" />
        <MaskText phrases={descriptionPhrases} tag="p" />
      </motion.div>
    </Section>
  );
};

export default WhyChooseAfroLink;