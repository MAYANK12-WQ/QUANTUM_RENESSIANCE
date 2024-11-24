import React from 'react';
import { Workflow, GitBranch, Zap, Settings, ArrowRight } from 'lucide-react';

export default function ProcessAutomationPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Intelligent Process Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transform your workflows with AI-powered automation solutions.
          </p>
        </div>
      </div>

      {/* Interactive Workflow Visualization */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-blue-400/30"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  animation: `spin ${10 + i * 5}s linear infinite${i % 2 ? ' reverse' : ''}`
                }}
              >
                <div
                  className="absolute w-4 h-4 bg-blue-400 rounded-full"
                  style={{
                    top: '0%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              </div>
            ))}
            <Workflow className="w-16 h-16 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Automation Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Automation Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Workflow Engine",
                features: ["Process Modeling", "Decision Trees", "Event Handling"]
              },
              {
                icon: Zap,
                title: "Task Automation",
                features: ["Document Processing", "Data Entry", "Quality Checks"]
              },
              {
                icon: Settings,
                title: "Process Analytics",
                features: ["Performance Metrics", "Bottleneck Detection", "Optimization"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
                <component.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{component.title}</h3>
                <ul className="space-y-3">
                  {component.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Automation Flow</h2>
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {[
                "Input Processing",
                "AI Analysis",
                "Decision Making",
                "Task Execution",
                "Result Validation"
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold">{index + 1}</span>
                  </div>
                  <p className="mt-4 text-gray-300 text-center">{step}</p>
                  {index < 4 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services",
                applications: ["Transaction Processing", "Risk Assessment", "Compliance Monitoring"]
              },
              {
                title: "Healthcare",
                applications: ["Patient Data Management", "Claims Processing", "Appointment Scheduling"]
              },
              {
                title: "Manufacturing",
                applications: ["Quality Control", "Supply Chain Management", "Production Planning"]
              },
              {
                title: "Retail",
                applications: ["Inventory Management", "Order Processing", "Customer Service"]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((app, aIndex) => (
                    <li key={aIndex} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}