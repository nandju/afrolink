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

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const MeetingScheduler: React.FC = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Meeting Scheduler</Title>
        <Description>
          Choose a time that works for you and let&apos;s talk about your ideas.
        </Description>
        {/* Intégration Calendly ou autre ici */}
      </motion.div>
    </Section>
  );
};

export default MeetingScheduler;