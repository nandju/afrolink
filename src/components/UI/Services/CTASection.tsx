'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GetStartedButton } from '@/components';
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

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const CTASection: React.FC = () => {
  const titlePhrases = ['Construisons ensemble votre prochaine campagne digitale.'];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MaskText phrases={titlePhrases} tag="h2" />
        <ButtonContainer>
          <GetStartedButton padding="1rem 2rem" />
        </ButtonContainer>
      </motion.div>
    </Section>
  );
};

export default CTASection;