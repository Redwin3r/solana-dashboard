import React from 'react';
import { Rocket, Star, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Swaps',
    description: 'Execute trades in milliseconds with our optimized routing engine',
  },
  {
    icon: Shield,
    title: 'Secure & Audited',
    description: 'Built with security-first principles and audited smart contracts',
  },
  {
    icon: Star,
    title: 'Best Rates',
    description: 'Get the most competitive rates across all Solana DEXs',
  },
  {
    icon: Rocket,
    title: 'Advanced Features',
    description: 'Limit orders, DCA, and portfolio management tools',
  },
];

export default function ComingSoonSection() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
          <Rocket className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-semibold text-purple-600">Coming Soon</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Future of Solana Trading
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're building the most advanced SPL token trading platform on Solana. 
          Get ready for seamless swaps, advanced analytics, and institutional-grade features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}