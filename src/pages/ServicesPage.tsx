import React from 'react';
import { Bot, MessageSquareCode, Workflow, LineChart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Bot className="w-16 h-16" />,
      title: "AI Agents for Businesses",
      description: "Intelligent agents that automate customer service, lead generation, and task management with unprecedented accuracy.",
      features: [
        "24/7 Customer Support",
        "Lead Qualification",
        "Task Automation",
        "Performance Analytics"
      ]
    },
    {
      icon: <MessageSquareCode className="w-16 h-16" />,
      title: "Chatbot RAG Solutions",
      description: "Advanced Retrieval-Augmented Generation chatbots delivering context-aware, accurate conversations.",
      features: [
        "Context-Aware Responses",
        "Multi-Language Support",
        "Knowledge Base Integration",
        "Real-time Learning"
      ]
    },
    {
      icon: <Workflow className="w-16 h-16" />,
      title: "Custom AI Solutions",
      description: "Tailored generative AI tools designed to meet your unique business challenges and objectives.",
      features: [
        "Custom Model Development",
        "Integration Services",
        "Performance Optimization",
        "Scalability Planning"
      ]
    },
    {
      icon: <LineChart className="w-16 h-16" />,
      title: "AI Strategy Consulting",
      description: "Expert guidance to define and implement your AI roadmap for maximum business impact.",
      features: [
        "AI Readiness Assessment",
        "Implementation Planning",
        "ROI Analysis",
        "Training & Support"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive AI solutions tailored to transform your business operations and drive innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}