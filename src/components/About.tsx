import React from 'react';
import { Cpu, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Who We Are
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Quantum Renaissance, we believe in the transformative power of AI. Our mission is to bridge the gap between futuristic technology and real-world solutions, offering innovative tools and strategies to help businesses thrive in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Cpu className="w-8 h-8" />,
              title: "Innovation First",
              description: "Pushing the boundaries of what's possible with cutting-edge AI technology."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Trusted Excellence",
              description: "Delivering reliable, secure, and scalable AI solutions for enterprise needs."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Future Ready",
              description: "Preparing your business for tomorrow's challenges with advanced AI capabilities."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}