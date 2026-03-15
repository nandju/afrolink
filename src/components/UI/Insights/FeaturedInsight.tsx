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

const FeaturedArticle = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ArticleTitle = styled.h3`
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
`;

const ArticleContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
`;

const FeaturedInsight: React.FC = () => {
  return (
    <Section>
      <Title>Featured Insight</Title>
      <FeaturedArticle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArticleTitle>Digital Marketing Trends in Africa</ArticleTitle>
        <ArticleContent>
          Explore the latest trends shaping digital marketing across the African continent.
        </ArticleContent>
      </FeaturedArticle>
    </Section>
  );
};

export default FeaturedInsight;