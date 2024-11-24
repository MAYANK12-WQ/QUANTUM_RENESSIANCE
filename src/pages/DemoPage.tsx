import React from 'react';
import { Calendar, Mail, MessageSquare } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Schedule a Demo
            </h1>
            <p className="text-xl text-gray-300">
              Experience the power of our AI solutions firsthand. Schedule a personalized demo with our experts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-gray-300">
                  <span className="text-sm font-medium">Full Name</span>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </label>

                <label className="block text-gray-300">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </label>

                <label className="block text-gray-300">
                  <span className="text-sm font-medium">Company</span>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company"
                  />
                </label>

                <label className="block text-gray-300">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Flexible Scheduling</span>
              </div>
              <div className="flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Live Q&A Session</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-300">Follow-up Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}