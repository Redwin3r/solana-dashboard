import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const tokens = [
  { symbol: 'SOL', name: 'Solana', price: '$--', change: '+0.0%', positive: true },
  { symbol: 'USDC', name: 'USD Coin', price: '$--', change: '+0.0%', positive: true },
  { symbol: 'RAY', name: 'Raydium', price: '$--', change: '+0.0%', positive: false },
  { symbol: 'SRM', name: 'Serum', price: '$--', change: '+0.0%', positive: true },
  { symbol: 'MNGO', name: 'Mango', price: '$--', change: '+0.0%', positive: false },
];

export default function TokenList() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Top SPL Tokens</h2>
        <span className="text-sm text-gray-500">Live prices coming soon</span>
      </div>

      <div className="space-y-4">
        {tokens.map((token, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{token.symbol.slice(0, 2)}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{token.symbol}</p>
                <p className="text-sm text-gray-500">{token.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{token.price}</p>
              <div className={`flex items-center space-x-1 text-sm ${
                token.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {token.positive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{token.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}