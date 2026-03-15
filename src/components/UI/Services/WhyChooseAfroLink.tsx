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

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const WhyChooseAfroLink: React.FC = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Why Choose AfroLink</Title>
        <Description>
          A creative digital agency based in Côte d&apos;Ivoire helping brands connect, engage and grow through impactful communication.
        </Description>
      </motion.div>
    </Section>
  );
};

export default WhyChooseAfroLink;