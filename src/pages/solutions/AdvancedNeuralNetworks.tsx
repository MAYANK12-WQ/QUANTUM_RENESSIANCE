import React from 'react';
import { Brain, Network, GitBranch, Cpu, ArrowRight } from 'lucide-react';

export default function AdvancedNeuralNetworks() {
  const researchPapers = [
    {
      title: "Attention Is All You Need",
      authors: "Vaswani et al.",
      year: 2017,
      description: "Introduced the revolutionary Transformer architecture",
      link: "https://arxiv.org/abs/1706.03762"
    },
    {
      title: "Deep Residual Learning for Image Recognition",
      authors: "He et al.",
      year: 2015,
      description: "Presented ResNet architecture with skip connections",
      link: "https://arxiv.org/abs/1512.03385"
    },
    {
      title: "GPT-3: Language Models are Few-Shot Learners",
      authors: "Brown et al.",
      year: 2020,
      description: "Demonstrated the power of large language models",
      link: "https://arxiv.org/abs/2005.14165"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
            alt="Neural Network"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
              Advanced Neural Networks
            </h1>
            <p className="text-xl text-gray-300">
              Exploring the cutting-edge architectures revolutionizing artificial intelligence
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Interactive Neural Architecture Visualization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Network Architecture</h2>
          <div className="bg-black/50 rounded-2xl p-8 border border-gold/20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Input Layer",
                  description: "Data preprocessing and feature extraction"
                },
                {
                  icon: Network,
                  title: "Hidden Layers",
                  description: "Deep pattern recognition and feature learning"
                },
                {
                  icon: GitBranch,
                  title: "Skip Connections",
                  description: "Residual learning and gradient flow"
                },
                {
                  icon: Cpu,
                  title: "Output Layer",
                  description: "Final predictions and results"
                }
              ].map((layer, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gold/50 hidden md:block" />
                  )}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gold/10">
                    <layer.icon className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{layer.title}</h3>
                    <p className="text-gray-400 text-sm">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Key Concepts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Backpropagation",
                description: "The fundamental algorithm for training neural networks through gradient descent",
                features: [
                  "Chain rule application",
                  "Gradient computation",
                  "Weight updates",
                  "Error minimization"
                ]
              },
              {
                title: "Activation Functions",
                description: "Non-linear transformations enabling complex pattern learning",
                features: [
                  "ReLU",
                  "Sigmoid",
                  "Tanh",
                  "GELU"
                ]
              },
              {
                title: "Optimization Techniques",
                description: "Methods to improve training efficiency and model performance",
                features: [
                  "Adam optimizer",
                  "Learning rate scheduling",
                  "Batch normalization",
                  "Dropout regularization"
                ]
              }
            ].map((concept, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gold/10">
                <h3 className="text-xl font-semibold mb-4 text-gold">{concept.title}</h3>
                <p className="text-gray-300 mb-6">{concept.description}</p>
                <ul className="space-y-2">
                  {concept.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Landmark Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {paper.authors} ({paper.year})
                </p>
                <p className="text-gray-300">{paper.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gold">Real-world Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Computer Vision",
                description: "Image recognition, object detection, and scene understanding",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Natural Language Processing",
                description: "Language understanding, translation, and text generation",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
              }
            ].map((app, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gold">{app.title}</h3>
                    <p className="text-gray-300">{app.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}