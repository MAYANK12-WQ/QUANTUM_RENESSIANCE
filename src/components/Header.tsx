import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const languages = ['EN', 'ES', 'FR', 'DE', 'JP'];
  const navigation = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Services', href: '/services' },
    { name: 'AI Agents', href: '/agents' },
    { name: 'RAG Solutions', href: '/rag' },
    { name: 'Demo', href: '/demo' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gold/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold/80 rounded-lg transform rotate-45 hover:rotate-180 transition-transform duration-500"></div>
              <div className="absolute inset-1 bg-black rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gold font-light text-xl tracking-wider">QUANTUM</span>
              <span className="text-gold/80 text-sm tracking-widest">RENAISSANCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Globe className="w-5 h-5 text-gold mr-2" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-gold border-none focus:ring-0 text-sm font-medium"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-black">
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gold"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center pt-4 border-t border-gold/20">
                <Globe className="w-5 h-5 text-gold mr-2" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-gold border-none focus:ring-0 text-sm font-medium"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-black">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}