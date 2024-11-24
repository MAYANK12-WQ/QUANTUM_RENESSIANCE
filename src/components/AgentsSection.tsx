import React from 'react';
import { Bot, GitBranch, Workflow, Shield } from 'lucide-react';

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            AI Agents: The Next Evolution
          </h2>

          {/* Multi-Agent System Visualization */}
          <div className="relative bg-gray-900 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Bot, label: "Task Execution" },
                { icon: GitBranch, label: "Decision Making" },
                { icon: Workflow, label: "Collaboration" },
                { icon: Shield, label: "Security" }
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                    <Icon className="w-12 h-12 mx-auto text-blue-400 relative z-10" />
                  </div>
                  <p className="mt-4 text-sm text-gray-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Types */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Types of AI Agents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Autonomous Agents",
                  description: "Self-directed AI systems capable of completing complex tasks without human intervention.",
                  features: ["Goal-oriented behavior", "Environmental adaptation", "Learning capabilities"]
                },
                {
                  title: "Collaborative Agents",
                  description: "Multi-agent systems working together to solve complex problems.",
                  features: ["Inter-agent communication", "Task distribution", "Collective intelligence"]
                },
                {
                  title: "Specialized Agents",
                  description: "Domain-specific AI agents optimized for particular industries or tasks.",
                  features: ["Industry expertise", "Custom workflows", "Specialized knowledge"]
                },
                {
                  title: "Learning Agents",
                  description: "Agents that improve their performance through experience and feedback.",
                  features: ["Continuous learning", "Performance optimization", "Adaptive behavior"]
                }
              ].map((agent, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">{agent.title}</h4>
                  <p className="text-gray-300 mb-4">{agent.description}</p>
                  <ul className="space-y-2">
                    {agent.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Future of AI Agents */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">The Future of AI Agents</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                The evolution of AI agents is rapidly advancing, with emerging technologies enabling more sophisticated and capable systems. Future developments will focus on enhanced autonomy, improved collaboration between agents, and deeper integration with human workflows.
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {[
                  "Advanced reasoning capabilities",
                  "Emotional intelligence integration",
                  "Cross-platform compatibility",
                  "Enhanced security protocols",
                  "Real-time adaptation",
                  "Seamless human collaboration"
                ].map((feature, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-4 text-center text-gray-400">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}