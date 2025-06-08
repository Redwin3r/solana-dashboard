import React, { useState } from 'react';
import { ArrowUpDown, ChevronDown, Info } from 'lucide-react';

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Swap Tokens</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Info className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">From</span>
            <span className="text-sm text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-semibold text-gray-900 placeholder-gray-400 outline-none"
              disabled
            />
            <button className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors" disabled>
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
              <span className="font-medium text-gray-900">SOL</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors" disabled>
            <ArrowUpDown className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">To</span>
            <span className="text-sm text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-semibold text-gray-900 placeholder-gray-400 outline-none"
              disabled
            />
            <button className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors" disabled>
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
              <span className="font-medium text-gray-900">USDC</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <div className="mt-6 relative">
        <button className="w-full bg-gray-300 text-gray-500 py-4 rounded-xl font-semibold cursor-not-allowed">
          Swap Coming Soon
        </button>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-purple-600 shadow-lg">
            🚀 Coming Soon
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        <p className="text-sm text-purple-700">
          <strong>Swap functionality is coming soon!</strong> Our team is working hard to bring you seamless SPL token trading with the best rates and lowest slippage.
        </p>
      </div>
    </div>
  );
}