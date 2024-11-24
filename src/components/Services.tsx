import React from 'react';
import { Bot, MessageSquareCode, Workflow, LineChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: <Bot />,
      title: "AI Agents for Businesses",
      description: "Intelligent agents that automate customer service, lead generation, and task management with unprecedented accuracy."
    },
    {
      icon: <MessageSquareCode />,
      title: "Chatbot RAG Solutions",
      description: "Advanced Retrieval-Augmented Generation chatbots delivering context-aware, accurate conversations."
    },
    {
      icon: <Workflow />,
      title: "Custom AI Solutions",
      description: "Tailored generative AI tools designed to meet your unique business challenges and objectives."
    },
    {
      icon: <LineChart />,
      title: "AI Strategy Consulting",
      description: "Expert guidance to define and implement your AI roadmap for maximum business impact."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-300">
            Discover our comprehensive suite of AI solutions designed to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}