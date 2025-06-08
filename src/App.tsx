import React from 'react';
import Header from './components/Header';
import SwapInterface from './components/SwapInterface';
import StatsCards from './components/StatsCards';
import ComingSoonSection from './components/ComingSoonSection';
import TokenList from './components/TokenList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trade SPL Tokens on{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Solana
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most advanced decentralized exchange for Solana SPL tokens. 
            Lightning-fast swaps with the best rates in DeFi.
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <SwapInterface />
          </div>
          <div className="lg:col-span-2">
            <TokenList />
          </div>
        </div>

        <ComingSoonSection />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 SolanaSwap. Built for the Solana ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;