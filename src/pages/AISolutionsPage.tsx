import React from 'react';
import { Brain, Cpu, Network, Shield, ArrowRight, GitBranch } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
            AI Solutions Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover our comprehensive suite of AI solutions designed to transform your business and drive innovation.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Brain,
              title: "Advanced Neural Networks",
              description: "State-of-the-art neural architectures for complex problem-solving",
              features: ["Deep Learning", "Pattern Recognition", "Predictive Analytics"],
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
            },
            {
              icon: Network,
              title: "Natural Language Processing",
              description: "Understanding and generating human language with unprecedented accuracy",
              features: ["Text Analysis", "Sentiment Analysis", "Language Generation"],
              image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
            },
            {
              icon: Shield,
              title: "Computer Vision",
              description: "Advanced image and video processing capabilities",
              features: ["Object Detection", "Image Recognition", "Video Analysis"],
              image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
            },
            {
              icon: GitBranch,
              title: "Reinforcement Learning",
              description: "Self-improving AI systems that learn from experience",
              features: ["Adaptive Learning", "Decision Making", "Optimization"],
              image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387"
            }
          ].map((solution, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="absolute inset-0">
                <img
                  src={`${solution.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={solution.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="relative p-8">
                <solution.icon className="w-12 h-12 text-gold mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-2 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* AI Capabilities Diagram */}
        <div className="mt-24 bg-black/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gold">
            AI Capabilities Overview
          </h2>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Core AI",
                  features: ["Machine Learning", "Deep Learning", "Neural Networks"]
                },
                {
                  icon: Cpu,
                  title: "Processing",
                  features: ["Real-time Analysis", "Batch Processing", "Stream Processing"]
                },
                {
                  icon: Shield,
                  title: "Security",
                  features: ["Data Protection", "Model Security", "Privacy Preservation"]
                }
              ].map((capability, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gold/20">
                    <capability.icon className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {capability.title}
                    </h3>
                    <ul className="space-y-2">
                      {capability.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Quotes Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gold">
            Industry Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "AI is not just about automation; it's about augmenting human capabilities to achieve what was previously impossible.",
                author: "Quantum Renaissance",
                role: "AI Research Team"
              },
              {
                quote: "The future of business lies in the seamless integration of AI with human expertise.",
                author: "Quantum Renaissance",
                role: "Innovation Lab"
              }
            ].map((quote, index) => (
              <div key={index} className="bg-black/50 rounded-xl p-8 border border-gold/20">
                <p className="text-xl font-light italic text-gray-300 mb-6">
                  "{quote.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-0.5 bg-gold/50 mr-4"></div>
                  <div>
                    <p className="text-gold font-medium">{quote.author}</p>
                    <p className="text-gold/60 text-sm">{quote.role}</p>
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