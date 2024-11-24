import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "AI is the new electricity.",
    author: "Andrew Ng",
    role: "Co-founder of Google Brain"
  },
  {
    text: "Artificial intelligence is the future, not only for Russia, but for all humankind.",
    author: "Vladimir Putin",
    role: "President of Russia"
  },
  {
    text: "AI will be the best or worst thing ever for humanity.",
    author: "Elon Musk",
    role: "CEO of Tesla & SpaceX"
  },
  {
    text: "In the long term, artificial intelligence and automation are going to be taking over so much of what gives humans a feeling of purpose.",
    author: "Matt Bellamy",
    role: "Musician"
  }
];

export default function AIQuotes() {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="relative bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-white/20" />
              <div className="ml-8">
                <p className="text-xl font-light italic text-white mb-4">{quote.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-0.5 bg-white/20 mr-4"></div>
                  <div>
                    <p className="text-white font-medium">{quote.author}</p>
                    <p className="text-white/60 text-sm">{quote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}