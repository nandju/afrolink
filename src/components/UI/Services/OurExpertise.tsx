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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceItem = styled(motion.div)`
  background: linear-gradient(135deg, rgba(226, 124, 0, 0.1), rgba(255, 165, 0, 0.1));
  border: 1px solid rgba(226, 124, 0, 0.2);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(226, 124, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(226, 124, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 1rem;
`;

const services = [
  'Stratégie de Marque',
  'Gestion des Réseaux Sociaux',
  'Création de Contenu',
  'Campagnes Digitales',
  'Conception de Sites Web',
  'Direction Créative',
];

const OurExpertise: React.FC = () => {
  const titlePhrases = ['Notre Expertise'];

  return (
    <Section>
      <MaskText phrases={titlePhrases} tag="h2" />
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceItem
            key={service}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceTitle>{service}</ServiceTitle>
          </ServiceItem>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default OurExpertise;