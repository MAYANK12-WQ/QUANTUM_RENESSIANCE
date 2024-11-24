import React from 'react';
import { Eye, Camera, Cpu, GitBranch, ArrowRight } from 'lucide-react';

export default function ComputerVisionPage() {
  const researchPapers = [
    {
      title: "ResNet: Deep Residual Learning",
      authors: "He et al.",
      year: 2015,
      description: "Revolutionary residual network architecture",
      link: "https://arxiv.org/abs/1512.03385"
    },
    {
      title: "YOLO: Real-Time Object Detection",
      authors: "Redmon et al.",
      year: 2016,
      description: "Single-stage object detection system",
      link: "https://arxiv.org/abs/1506.02640"
    },
    {
      title: "Mask R-CNN",
      authors: "He et al.",
      year: 2017,
      description: "Instance segmentation framework",
      link: "https://arxiv.org/abs/1703.06870"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=2000&q=80"
            alt="Computer Vision"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
              Computer Vision
            </h1>
            <p className="text-xl text-gray-300">
              Advanced visual perception and understanding for machines
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Vision Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Vision Pipeline</h2>
          <div className="bg-black/50 rounded-2xl p-8 border border-gold/20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Image Acquisition",
                  description: "Input processing and enhancement"
                },
                {
                  icon: Eye,
                  title: "Feature Detection",
                  description: "Pattern and object recognition"
                },
                {
                  icon: GitBranch,
                  title: "Segmentation",
                  description: "Scene decomposition"
                },
                {
                  icon: Cpu,
                  title: "Understanding",
                  description: "Semantic interpretation"
                }
              ].map((stage, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gold/50 hidden md:block" />
                  )}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gold/10">
                    <stage.icon className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-white">{stage.title}</h3>
                    <p className="text-gray-400 text-sm">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gold">Key Research</h2>
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
                title: "Object Detection",
                description: "Real-time object identification and tracking",
                features: ["Multi-object tracking", "Pose estimation", "3D reconstruction"]
              },
              {
                title: "Image Segmentation",
                description: "Precise object and scene segmentation",
                features: ["Instance segmentation", "Semantic segmentation", "Panoptic segmentation"]
              },
              {
                title: "Scene Understanding",
                description: "Comprehensive scene analysis and interpretation",
                features: ["Depth estimation", "Scene classification", "Activity recognition"]
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