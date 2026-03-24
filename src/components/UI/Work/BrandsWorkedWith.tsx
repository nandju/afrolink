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

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  height: 100px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #666;
`;

const brands = ['Marque 1', 'Marque 2', 'Marque 3', 'Marque 4', 'Marque 5', 'Marque 6'];

const BrandsWorkedWith: React.FC = () => {
  return (
    <Section>
      <Title>Marques Avec Lesquelles Nous Avons Travaillé</Title>
      <LogosGrid>
        {brands.map((brand, index) => (
          <Logo
            key={brand}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {brand}
          </Logo>
        ))}
      </LogosGrid>
    </Section>
  );
};

export default BrandsWorkedWith;