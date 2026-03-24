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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ValueItem = styled(motion.div)`
  padding: 2rem;
  background: linear-gradient(135deg, rgba(226, 124, 0, 0.1), rgba(255, 165, 0, 0.1));
  border: 1px solid rgba(226, 124, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(226, 124, 0, 0.2);
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--white);
`;

const values = ['Créativité', 'Innovation', 'Collaboration', 'Impact'];

const OurValues: React.FC = () => {
  const titlePhrases = ['Nos Valeurs'];

  return (
    <Section>
      <MaskText phrases={titlePhrases} tag="h2" />
      <ValuesGrid>
        {values.map((value, index) => (
          <ValueItem
            key={value}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ValueTitle>{value}</ValueTitle>
          </ValueItem>
        ))}
      </ValuesGrid>
    </Section>
  );
};

export default OurValues;