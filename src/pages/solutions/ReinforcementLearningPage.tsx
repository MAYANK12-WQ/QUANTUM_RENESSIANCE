import React from 'react';
import { Target, GitBranch, Brain, Zap, ArrowRight } from 'lucide-react';

export default function ReinforcementLearningPage() {
  const researchPapers = [
    {
      title: "DQN: Playing Atari with Deep RL",
      authors: "Mnih et al.",
      year: 2013,
      description: "Deep Q-Network breakthrough",
      link: "https://arxiv.org/abs/1312.5602"
    },
    {
      title: "AlphaGo: Mastering the Game of Go",
      authors: "Silver et al.",
      year: 2016,
      description: "Revolutionary game-playing AI",
      link: "https://www.nature.com/articles/nature16961"
    },
    {
      title: "PPO: Proximal Policy Optimization",
      authors: "Schulman et al.",
      year: 2017,
      description: "Stable policy gradient method",
      link: "https://arxiv.org/abs/1707.06347"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=2000&q=80"
            alt="Reinforcement Learning"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
              Reinforcement Learning
            </h1>
            <p className="text-xl text-gray-300">
              Teaching AI through experience and reward-based learning
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* RL Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Learning Process</h2>
          <div className="bg-black/50 rounded-2xl p-8 border border-gold/20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "State Observation",
                  description: "Environment analysis"
                },
                {
                  icon: Brain,
                  title: "Action Selection",
                  description: "Policy-based decisions"
                },
                {
                  icon: GitBranch,
                  title: "Reward Processing",
                  description: "Feedback evaluation"
                },
                {
                  icon: Zap,
                  title: "Policy Update",
                  description: "Strategy optimization"
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gold/50 hidden md:block" />
                  )}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gold/10">
                    <phase.icon className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{phase.title}</h3>
                    <p className="text-gray-400 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Breakthrough Research</h2>
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
                title: "Game AI",
                description: "Advanced game-playing agents",
                features: ["Strategic planning", "Real-time decisions", "Multi-agent systems"]
              },
              {
                title: "Robotics",
                description: "Autonomous robotic control",
                features: ["Motion planning", "Task learning", "Adaptive control"]
              },
              {
                title: "Resource Management",
                description: "Optimal resource allocation",
                features: ["Dynamic scheduling", "Resource optimization", "Adaptive planning"]
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