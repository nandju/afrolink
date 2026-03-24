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

const OurStory: React.FC = () => {
  const titlePhrases = ['Notre Histoire'];
  const descriptionPhrases = [
    'AfroLink a été créée pour aider les marques et les organisations à construire une communication digitale forte.',
    'Basée en Côte d\'Ivoire, nous combinons créativité, stratégie et technologie pour créer des expériences de marque significatives.'
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

export default OurStory;