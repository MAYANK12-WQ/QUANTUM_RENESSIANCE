import React from 'react';
import { Shield, Lock, Key, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Secure AI Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Enterprise-grade security solutions for AI implementations.
          </p>
        </div>
      </div>

      {/* Interactive Security Shield Animation */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Animated Security Layers */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute rounded-lg border-2 border-blue-400/30"
                style={{
                  width: `${200 + i * 60}px`,
                  height: `${200 + i * 60}px`,
                  animation: `pulse ${2 + i * 0.5}s infinite`
                }}
              ></div>
            ))}
            <Shield className="relative z-10 w-24 h-24 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Security Layers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Security Framework</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Access Control",
                features: ["Role-based Access", "Multi-factor Authentication", "Session Management"]
              },
              {
                icon: Key,
                title: "Data Protection",
                features: ["End-to-end Encryption", "Secure Storage", "Data Masking"]
              },
              {
                icon: Eye,
                title: "Monitoring",
                features: ["Real-time Surveillance", "Threat Detection", "Audit Logging"]
              }
            ].map((layer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
                <layer.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{layer.title}</h3>
                <ul className="space-y-3">
                  {layer.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Protection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Threat Protection</h2>
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Prevention",
                  items: ["Firewall Protection", "Intrusion Detection", "Vulnerability Scanning"]
                },
                {
                  title: "Response",
                  items: ["Incident Management", "Automated Remediation", "Backup & Recovery"]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-semibold text-blue-400">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center text-gray-300">
                        <AlertTriangle className="w-4 h-4 mr-2 text-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Standards",
                items: ["ISO 27001", "SOC 2", "GDPR", "HIPAA"]
              },
              {
                title: "Security Protocols",
                items: ["TLS 1.3", "AES-256", "RSA-4096", "SHA-3"]
              },
              {
                title: "Best Practices",
                items: ["Zero Trust", "Least Privilege", "Defense in Depth", "Regular Audits"]
              }
            ].map((cert, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{cert.title}</h3>
                <ul className="space-y-2">
                  {cert.items.map((item, iIndex) => (
                    <li key={iIndex} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
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