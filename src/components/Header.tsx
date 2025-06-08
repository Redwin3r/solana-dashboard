import React from 'react';
import { Zap, Menu, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                SolanaSwap
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Trade
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Analytics
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Pool
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
              Connect Wallet
            </button>
            <button className="md:hidden p-2 text-gray-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}