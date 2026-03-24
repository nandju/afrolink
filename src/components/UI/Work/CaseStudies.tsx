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

const CaseStudy = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #111;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const CaseStudies: React.FC = () => {
  return (
    <Section>
      <Title>Études de Cas</Title>
      <CaseStudy
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectTitle>Campagne Digitale pour une Marque de Mode</ProjectTitle>
        <Description>
          Nous avons développé une stratégie de communication digitale complète incluant la création de contenu, les visuels de campagne et l&apos;activation des réseaux sociaux.
        </Description>
      </CaseStudy>
    </Section>
  );
};

export default CaseStudies;