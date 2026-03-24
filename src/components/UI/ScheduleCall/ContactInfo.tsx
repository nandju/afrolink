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

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const InfoItem = styled(motion.div)`
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

const InfoDetail = styled.p`
  font-size: 1rem;
  color: #666;
`;

const contactInfo = [
  { title: 'Localisation', detail: 'Abidjan, Côte d\'Ivoire' },
  { title: 'Email', detail: 'contact@afrolink.com' },
  { title: 'Téléphone', detail: '+225 XX XX XX XX' },
];

const ContactInfo: React.FC = () => {
  return (
    <Section>
      <Title>Informations de Contact</Title>
      <InfoGrid>
        {contactInfo.map((info, index) => (
          <InfoItem
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <InfoTitle>{info.title}</InfoTitle>
            <InfoDetail>{info.detail}</InfoDetail>
          </InfoItem>
        ))}
      </InfoGrid>
    </Section>
  );
};

export default ContactInfo;