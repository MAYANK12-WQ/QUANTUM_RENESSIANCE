import React from 'react';
import { Quote } from 'lucide-react';

export default function AIAgents() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* 3D Model Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80"
            alt="AI Visualization"
            className="w-full h-full object-cover opacity-50 animate-pulse"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            The Future of AI: Meet the Agents
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            AI agents are the cornerstone of the digital revolution. At Quantum Renaissance, we craft intelligent agents that don't just respond—they understand, adapt, and evolve with your business. From personalized customer experiences to autonomous decision-making, the opportunities are limitless.
          </p>

          {/* Quotes Section */}
          <div className="space-y-8">
            {[
              {
                quote: "AI will create a tidal wave of new opportunities.",
                author: "Andrew Ng"
              },
              {
                quote: "AI agents are transforming how businesses operate, and the future is just beginning.",
                author: "Andrew Ng"
              }
            ].map((quote, index) => (
              <div key={index} className="relative">
                <Quote className="absolute -left-8 -top-2 w-6 h-6 text-blue-400 opacity-50" />
                <blockquote className="pl-8 border-l-2 border-blue-400">
                  <p className="text-xl font-light italic text-gray-300 mb-2">{quote.quote}</p>
                  <footer className="text-sm text-blue-400">— {quote.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}