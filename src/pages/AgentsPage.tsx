import React from 'react';
import { Bot, GitBranch, Workflow, Shield, Brain, Zap } from 'lucide-react';

export default function AgentsPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            AI Agents Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Next-generation AI agents that understand, learn, and evolve with your business needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Agent Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Bot,
              title: "Task Agents",
              description: "Automate routine tasks and workflows with intelligent agents."
            },
            {
              icon: Brain,
              title: "Learning Agents",
              description: "Agents that improve through experience and feedback."
            },
            {
              icon: Shield,
              title: "Security Agents",
              description: "Protect your systems with AI-powered security monitoring."
            }
          ].map((agent, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <agent.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">
                {agent.title}
              </h3>
              <p className="text-gray-300">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[
            {
              icon: GitBranch,
              title: "Multi-Agent Collaboration",
              description: "Agents working together to solve complex problems",
              features: [
                "Inter-agent communication",
                "Task distribution",
                "Collective intelligence",
                "Synchronized operations"
              ]
            },
            {
              icon: Workflow,
              title: "Adaptive Learning",
              description: "Continuous improvement through experience",
              features: [
                "Pattern recognition",
                "Behavioral adaptation",
                "Performance optimization",
                "Knowledge retention"
              ]
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Advanced security measures for AI operations",
              features: [
                "Access control",
                "Data encryption",
                "Audit logging",
                "Compliance monitoring"
              ]
            },
            {
              icon: Zap,
              title: "Real-time Processing",
              description: "Instant response and decision making",
              features: [
                "Quick analysis",
                "Immediate responses",
                "Live monitoring",
                "Dynamic adaptation"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
              <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.features.map((item, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
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