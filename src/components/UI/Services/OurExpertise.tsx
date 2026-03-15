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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceItem = styled(motion.div)`
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 1rem;
`;

const services = [
  'Brand Strategy',
  'Social Media Management',
  'Content Creation',
  'Digital Campaigns',
  'Website Design',
  'Creative Direction',
];

const OurExpertise: React.FC = () => {
  return (
    <Section>
      <Title>Our Expertise</Title>
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