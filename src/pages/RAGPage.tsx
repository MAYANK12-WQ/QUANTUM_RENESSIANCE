import React from 'react';
import { Database, Network, Brain, Cpu, GitBranch, Search } from 'lucide-react';

export default function RAGPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            RAG Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced Retrieval-Augmented Generation for precise, context-aware AI interactions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* RAG Process Visualization */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Knowledge Base",
                description: "Structured data storage"
              },
              {
                icon: Search,
                title: "Retrieval",
                description: "Context-aware search"
              },
              {
                icon: Brain,
                title: "Processing",
                description: "AI-powered analysis"
              },
              {
                icon: Network,
                title: "Generation",
                description: "Accurate responses"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-400/50"></div>
                )}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                  <step.icon className="relative z-10 w-12 h-12 mx-auto text-blue-400 mb-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "Contextual Understanding",
              description: "Advanced algorithms ensure responses are relevant and accurate."
            },
            {
              icon: GitBranch,
              title: "Multi-Source Integration",
              description: "Seamlessly combine data from various knowledge bases."
            },
            {
              icon: Cpu,
              title: "Real-time Processing",
              description: "Instant retrieval and generation of responses."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
              <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Architecture</h3>
              <ul className="space-y-3">
                {[
                  "Vector database integration",
                  "Semantic search capabilities",
                  "Neural network processing",
                  "Dynamic response generation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Improved accuracy",
                  "Reduced hallucination",
                  "Faster response times",
                  "Lower operational costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}