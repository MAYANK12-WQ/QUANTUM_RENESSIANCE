import React from 'react';
import { Network, Lock, GitBranch } from 'lucide-react';

export default function IntegrationPage() {
  return (
    <div className="pt-20">
      <div className="bg-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Integration Layer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Seamlessly connect AI capabilities with your existing infrastructure.
          </p>
        </div>
      </div>

      {/* Detailed content sections */}
      <div className="container mx-auto px-6 py-16">
        {/* API Gateway Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">API Gateway</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>

        {/* Data Connectors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Data Connectors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>

        {/* Service Mesh Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Service Mesh</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content here */}
          </div>
        </section>
      </div>
    </div>
  );
}