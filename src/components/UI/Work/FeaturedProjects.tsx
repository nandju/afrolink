'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectItem = styled(motion.div)`
  background: linear-gradient(135deg, rgba(226, 124, 0, 0.1), rgba(255, 165, 0, 0.1));
  border: 1px solid rgba(226, 124, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(226, 124, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(226, 124, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: var(--accent-gradient); /* Placeholder */
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--light-gray);
  line-height: 1.6;
`;

const projects = [
  {
    title: 'Campagne de Marque',
    description: 'Développement complet de campagne de marque.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Stratégie de Réseaux Sociaux',
    description: 'Stratégies engageantes de réseaux sociaux.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Conception de Site Web',
    description: 'Conceptions de sites web modernes et responsives.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Lancement de Produit',
    description: 'Campagnes de lancement de produit réussies.',
    image: '/images/project4.jpg',
  },
];

const FeaturedProjects: React.FC = () => {
  const titlePhrases = ['Projets Présentés'];

  return (
    <Section>
      <MaskText phrases={titlePhrases} tag="h2" />
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectImage>
              <Image src={project.image} alt={project.title} width={300} height={200} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectItem>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default FeaturedProjects;