import React from 'react';
import { Brain, Cpu, Network, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Enterprise AI Integration",
      description: "Transform your business operations with our enterprise-grade AI solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      features: [
        "Custom AI model development",
        "Seamless system integration",
        "Scalable infrastructure",
        "24/7 monitoring and support"
      ],
      icon: Brain,
      link: "/solutions/enterprise-ai"
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered workflows.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      features: [
        "Workflow optimization",
        "Document processing",
        "Decision automation",
        "Performance analytics"
      ],
      icon: Cpu,
      link: "/solutions/process-automation"
    },
    {
      title: "Neural Network Solutions",
      description: "Advanced neural networks designed for your specific needs.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      features: [
        "Deep learning models",
        "Pattern recognition",
        "Predictive analytics",
        "Real-time processing"
      ],
      icon: Network,
      link: "/solutions/neural-networks"
    },
    {
      title: "Secure AI Infrastructure",
      description: "Enterprise-grade security for your AI implementations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      features: [
        "End-to-end encryption",
        "Access control",
        "Audit logging",
        "Compliance management"
      ],
      icon: Lock,
      link: "/solutions/security"
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            AI Solutions Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover our comprehensive suite of AI solutions designed to transform your business and drive innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.link}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              </div>

              <div className="relative p-8">
                <solution.icon className="w-12 h-12 text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}