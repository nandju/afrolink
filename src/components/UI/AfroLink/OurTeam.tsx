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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamMember = styled(motion.div)`
  padding: 2rem;
  background: #111;
  border-radius: 8px;
`;

const MemberPhoto = styled.div`
  width: 100px;
  height: 100px;
  background: #333;
  border-radius: 50%;
  margin: 0 auto 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const team = [
  { name: 'John Doe', role: 'Creative Director' },
  { name: 'Jane Smith', role: 'Digital Strategist' },
  { name: 'Bob Johnson', role: 'Content Creator' },
  { name: 'Alice Brown', role: 'Project Manager' },
];

const OurTeam: React.FC = () => {
  return (
    <Section>
      <Title>Our Team</Title>
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