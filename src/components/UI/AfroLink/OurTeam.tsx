'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--Background);
  color: var(--white);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamMember = styled(motion.div)`
  padding: 2rem;
  background: linear-gradient(135deg, rgba(226, 124, 0, 0.1), rgba(255, 165, 0, 0.1));
  border: 1px solid rgba(226, 124, 0, 0.2);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(226, 124, 0, 0.2);
  }
`;

const MemberPhoto = styled.div`
  width: 100px;
  height: 100px;
  background: var(--accent-gradient);
  border-radius: 50%;
  margin: 0 auto 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--white);
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: var(--light-gray);
`;

const team = [
  { name: 'John Doe', role: 'Directeur Créatif' },
  { name: 'Jane Smith', role: 'Stratège Digital' },
  { name: 'Bob Johnson', role: 'Créateur de Contenu' },
  { name: 'Alice Brown', role: 'Chef de Projet' },
];

const OurTeam: React.FC = () => {
  const titlePhrases = ['Notre Équipe'];

  return (
    <Section>
      <MaskText phrases={titlePhrases} tag="h2" />
      <TeamGrid>
        {team.map((member, index) => (
          <TeamMember
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MemberPhoto />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamGrid>
    </Section>
  );
};

export default OurTeam;