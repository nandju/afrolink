'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GetStartedButton } from '@/components';

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

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const CTASection: React.FC = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Envie de collaborer avec AfroLink ?</Title>
        <ButtonContainer>
          <GetStartedButton padding="1rem 2rem" />
        </ButtonContainer>
      </motion.div>
    </Section>
  );
};

export default CTASection;