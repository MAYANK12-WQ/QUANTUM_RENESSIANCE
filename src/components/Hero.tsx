import React from 'react';
import { Brain, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Neural network animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1
            }}
          >
            <div className="relative">
              <Sparkles className="text-gold" size={Math.random() * 20 + 10} />
              {Math.random() > 0.5 && (
                <div className="absolute h-[100px] w-[1px] bg-gradient-to-b from-gold/20 to-transparent transform -rotate-45"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-8">
          {/* Animated Logo */}
          <div className="relative w-24 h-24 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold/80 rounded-2xl rotate-45 animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-12 h-12 text-gold" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold/80 to-gold animate-gradient">
              Pioneering Excellence
            </span>
            <br />
            <span className="text-white">
              Through Advanced AI
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future with sophisticated AI agents and RAG solutions that transform business possibilities into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link 
              to="/ai-solutions"
              className="group px-8 py-4 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-black rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/25"
            >
              Explore AI Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="group px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold/10 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              Schedule a Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}