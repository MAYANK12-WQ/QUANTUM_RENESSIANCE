import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AIAgents from '../components/AIAgents';
import AgentsSection from '../components/AgentsSection';
import RAGSection from '../components/RAGSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <AIAgents />
      <AgentsSection />
      <RAGSection />
    </>
  );
}