import React from 'react';
import { Network, Brain, Cpu, GitBranch, ArrowRight } from 'lucide-react';

export default function NeuralNetworkPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Neural Network Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced neural networks designed for complex problem-solving and pattern recognition.
          </p>
        </div>
      </div>

      {/* Interactive Neural Network Visualization */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-3xl mx-auto">
            {/* Neural Network Layers Visualization */}
            <div className="absolute inset-0 flex items-center justify-between px-12">
              {[0, 1, 2].map((layer) => (
                <div key={layer} className="relative h-64">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-blue-400 rounded-full"
                      style={{
                        top: `${(i * 33)}%`,
                        animation: `pulse 2s infinite ${i * 0.2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                  ))}
                </div>
              ))}
              {/* Connecting Lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                  </defs>
                  {/* Add dynamic SVG paths here */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Network Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Network Architecture</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Network,
                title: "Input Layer",
                description: "Data preprocessing and feature extraction"
              },
              {
                icon: Brain,
                title: "Hidden Layers",
                description: "Deep learning and pattern recognition"
              },
              {
                icon: Cpu,
                title: "Processing Units",
                description: "Parallel computation and optimization"
              },
              {
                icon: GitBranch,
                title: "Output Layer",
                description: "Results generation and validation"
              }
            ].map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6">
                <component.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{component.title}</h3>
                <p className="text-gray-400">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Vision",
                features: ["Image Recognition", "Object Detection", "Scene Understanding"]
              },
              {
                title: "Natural Language",
                features: ["Text Analysis", "Language Translation", "Sentiment Analysis"]
              },
              {
                title: "Predictive Analytics",
                features: ["Pattern Recognition", "Anomaly Detection", "Forecasting"]
              }
            ].map((app, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-400">{app.title}</h3>
                <ul className="space-y-4">
                  {app.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Model Types</h3>
              <ul className="space-y-3">
                {[
                  "Convolutional Neural Networks (CNN)",
                  "Recurrent Neural Networks (RNN)",
                  "Transformer Models",
                  "Generative Adversarial Networks (GAN)"
                ].map((model, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {model}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Optimization</h3>
              <ul className="space-y-3">
                {[
                  "Gradient Descent Algorithms",
                  "Batch Normalization",
                  "Dropout Regularization",
                  "Learning Rate Scheduling"
                ].map((opt, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {opt}
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