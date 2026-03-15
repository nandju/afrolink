'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #000;
  color: #fff;
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
`;

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const processes = [
  {
    title: 'Discover',
    description: 'Understanding your brand and goals.',
  },
  {
    title: 'Strategize',
    description: 'Creating a strong communication plan.',
  },
  {
    title: 'Create',
    description: 'Designing content and campaigns.',
  },
  {
    title: 'Launch & Optimize',
    description: 'Publishing and improving performance.',
  },
];

const OurProcess: React.FC = () => {
  return (
    <Section>
      <Title>Our Process</Title>
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