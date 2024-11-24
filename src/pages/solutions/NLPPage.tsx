import React from 'react';
import { MessageSquare, Brain, GitBranch, ArrowRight } from 'lucide-react';

export default function NLPPage() {
  const researchPapers = [
    {
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      authors: "Devlin et al.",
      year: 2018,
      description: "Revolutionary bidirectional language model",
      link: "https://arxiv.org/abs/1810.04805"
    },
    {
      title: "GPT-3: Language Models are Few-Shot Learners",
      authors: "Brown et al.",
      year: 2020,
      description: "Scaling language models to 175 billion parameters",
      link: "https://arxiv.org/abs/2005.14165"
    },
    {
      title: "T5: Exploring the Limits of Transfer Learning",
      authors: "Raffel et al.",
      year: 2019,
      description: "Unified text-to-text transformer approach",
      link: "https://arxiv.org/abs/1910.10683"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
            alt="NLP"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
              Natural Language Processing
            </h1>
            <p className="text-xl text-gray-300">
              Advanced language understanding and generation capabilities
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Architecture Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">NLP Architecture</h2>
          <div className="bg-black/50 rounded-2xl p-8 border border-gold/20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Text Processing",
                  description: "Tokenization and preprocessing"
                },
                {
                  icon: Brain,
                  title: "Embedding Layer",
                  description: "Semantic representation learning"
                },
                {
                  icon: GitBranch,
                  title: "Attention Mechanism",
                  description: "Context-aware processing"
                },
                {
                  icon: MessageSquare,
                  title: "Output Generation",
                  description: "Text generation and analysis"
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

        {/* Research Papers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Latest Research</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-gold">Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Translation",
                description: "Neural machine translation across languages",
                features: ["Multi-language support", "Context preservation", "Idiomatic translation"]
              },
              {
                title: "Text Generation",
                description: "Advanced content generation capabilities",
                features: ["Creative writing", "Technical documentation", "Code generation"]
              },
              {
                title: "Sentiment Analysis",
                description: "Understanding emotional context in text",
                features: ["Opinion mining", "Brand monitoring", "Customer feedback analysis"]
              }
            ].map((app, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gold/10">
                <h3 className="text-xl font-semibold mb-4 text-gold">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, fIndex) => (
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
      </div>
    </div>
  );
}