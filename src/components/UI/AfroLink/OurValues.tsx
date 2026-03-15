'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #000;
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
  background: #f5f5f5;
  border-radius: 8px;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
`;

const values = ['Creativity', 'Innovation', 'Collaboration', 'Impact'];

const OurValues: React.FC = () => {
  return (
    <Section>
      <Title>Our Values</Title>
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