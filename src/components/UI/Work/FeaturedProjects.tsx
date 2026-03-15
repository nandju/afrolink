'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectItem = styled(motion.div)`
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #ccc; /* Placeholder */
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const projects = [
  {
    title: 'Brand Campaign',
    description: 'Comprehensive brand campaign development.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Social Media Strategy',
    description: 'Engaging social media strategies.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Website Design',
    description: 'Modern and responsive website designs.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Product Launch',
    description: 'Successful product launch campaigns.',
    image: '/images/project4.jpg',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <Section>
      <Title>Featured Projects</Title>
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