import React from 'react';
import { Database, Network, Brain, Cpu } from 'lucide-react';

export default function RAGSection() {
  return (
    <section id="rag" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            RAG Solutions: The Future of AI Understanding
          </h2>
          
          {/* RAG Diagram */}
          <div className="relative bg-gray-900 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Database className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-400 text-sm">Structured and unstructured data sources</p>
              </div>
              <div className="text-center relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -translate-y-1/2 hidden md:block"></div>
                <Network className="w-12 h-12 mx-auto text-purple-400 mb-4 relative z-10" />
                <h3 className="text-lg font-semibold mb-2">RAG Processing</h3>
                <p className="text-gray-400 text-sm">Advanced retrieval and generation</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enhanced Response</h3>
                <p className="text-gray-400 text-sm">Accurate, contextual answers</p>
              </div>
            </div>
          </div>

          {/* RAG Content */}
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">What is RAG?</h3>
              <p className="text-gray-300 leading-relaxed">
                Retrieval-Augmented Generation (RAG) represents a breakthrough in AI technology, combining the power of large language models with precise information retrieval. This hybrid approach enables AI systems to provide accurate, contextual responses by accessing and leveraging specific knowledge bases.
              </p>
            </div>

            {/* NVIDIA Integration */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <Cpu className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">NVIDIA RAG Implementation</h4>
                  <p className="text-gray-300 mb-4">
                    Our RAG solutions leverage NVIDIA's cutting-edge technology, including their Triton Inference Server and TensorRT-LLM, enabling high-performance, scalable AI deployments with optimized inference capabilities.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Hardware-accelerated inference</li>
                    <li>Optimized knowledge retrieval</li>
                    <li>Enterprise-grade scalability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Future Opportunities */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Future Opportunities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multi-Modal RAG",
                    description: "Integration with images, audio, and video content for comprehensive understanding."
                  },
                  {
                    title: "Real-Time Learning",
                    description: "Continuous knowledge base updates with self-improving capabilities."
                  },
                  {
                    title: "Cross-Language Support",
                    description: "Seamless multilingual information retrieval and generation."
                  },
                  {
                    title: "Industry Specialization",
                    description: "Domain-specific RAG models for healthcare, finance, and legal sectors."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-black/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
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