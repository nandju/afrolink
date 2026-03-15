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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CategoryItem = styled(motion.div)`
  padding: 1.5rem;
  background: #111;
  border-radius: 8px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
`;

const categories = ['Branding', 'Marketing', 'Social Media', 'Strategy'];

const Categories: React.FC = () => {
  return (
    <Section>
      <Title>Categories</Title>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryItem
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <CategoryTitle>{category}</CategoryTitle>
          </CategoryItem>
        ))}
      </CategoriesGrid>
    </Section>
  );
};

export default Categories;