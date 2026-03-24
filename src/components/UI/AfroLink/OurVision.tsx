'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--Background);
  color: var(--white);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: var(--light-gray);
`;

const OurVision: React.FC = () => {
  const titlePhrases = ['Notre Vision'];
  const descriptionPhrases = [
    'Devenir une agence créative leader façonnant l\'avenir de la communication digitale en Afrique.'
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

export default OurVision;