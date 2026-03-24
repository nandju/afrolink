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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProcessItem = styled(motion.div)`
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

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--light-gray);
`;

const processes = [
  {
    title: 'Découvrir',
    description: 'Comprendre votre marque et vos objectifs.',
  },
  {
    title: 'Stratégiser',
    description: 'Créer un plan de communication solide.',
  },
  {
    title: 'Créer',
    description: 'Concevoir du contenu et des campagnes.',
  },
  {
    title: 'Lancer et Optimiser',
    description: 'Publier et améliorer les performances.',
  },
];

const OurProcess: React.FC = () => {
  const titlePhrases = ['Notre Processus'];

  return (
    <Section>
      <MaskText phrases={titlePhrases} tag="h2" />
      <ProcessGrid>
        {processes.map((process, index) => (
          <ProcessItem
            key={process.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProcessTitle>{process.title}</ProcessTitle>
            <ProcessDescription>{process.description}</ProcessDescription>
          </ProcessItem>
        ))}
      </ProcessGrid>
    </Section>
  );
};

export default OurProcess;