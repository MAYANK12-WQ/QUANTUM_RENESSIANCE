import React from 'react';
import { Brain, Cpu, Network, ArrowRight, GitBranch, Workflow } from 'lucide-react';

export default function EnterpriseAIPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Enterprise AI Integration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your business with cutting-edge AI solutions designed for enterprise-scale operations.
          </p>
        </div>
      </div>

      {/* 3D Interactive Model */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-40 animation-delay-200"></div>
            <div className="absolute inset-16 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full animate-pulse opacity-60 animation-delay-400"></div>
            <Brain className="absolute inset-0 m-auto w-16 h-16 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Architecture Diagram */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Enterprise AI Architecture</h2>
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI Core",
                  features: ["Model Management", "Training Pipeline", "Inference Engine"]
                },
                {
                  icon: Network,
                  title: "Integration Layer",
                  features: ["API Gateway", "Data Connectors", "Service Mesh"]
                },
                {
                  icon: Cpu,
                  title: "Infrastructure",
                  features: ["Scalable Computing", "Storage Solutions", "Security Framework"]
                }
              ].map((section, index) => (
                <div key={index} className="relative">
                  {index < 2 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-400 hidden md:block" />
                  )}
                  <div className="text-center p-6 bg-gray-800 rounded-xl">
                    <section.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-white">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-gray-400">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: GitBranch,
                title: "Assessment",
                description: "Evaluate current infrastructure and needs"
              },
              {
                icon: Workflow,
                title: "Design",
                description: "Create custom AI architecture"
              },
              {
                icon: Cpu,
                title: "Integration",
                description: "Seamless system implementation"
              },
              {
                icon: Brain,
                title: "Optimization",
                description: "Continuous improvement and scaling"
              }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl">
                <step.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Increased Operational Efficiency",
              "Enhanced Decision Making",
              "Scalable AI Solutions",
              "Secure Data Handling",
              "Real-time Analytics",
              "Cost Optimization"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}