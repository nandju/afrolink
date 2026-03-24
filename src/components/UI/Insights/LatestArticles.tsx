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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArticleItem = styled(motion.div)`
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 1rem;
`;

const articles = [
  'Tendances du marketing digital en Afrique',
  'Comment le branding construit des entreprises solides',
  'Stratégies de réseaux sociaux pour les marques modernes',
  'Narration créative en marketing',
];

const LatestArticles: React.FC = () => {
  return (
    <Section>
      <Title>Articles Récents</Title>
      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleItem
            key={article}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArticleTitle>{article}</ArticleTitle>
          </ArticleItem>
        ))}
      </ArticlesGrid>
    </Section>
  );
};

export default LatestArticles;