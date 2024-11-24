import React from 'react';
import { Server, Shield, Database } from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <div className="pt-20">
      <div className="bg-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            AI Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Enterprise-grade infrastructure designed for AI workloads.
          </p>
        </div>
      </div>

      {/* Detailed content sections */}
      <div className="container mx-auto px-6 py-16">
        {/* Scalable Computing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Scalable Computing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>

        {/* Storage Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Storage Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>

        {/* Security Framework Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Security Framework</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>
      </div>
    </div>
  );
}