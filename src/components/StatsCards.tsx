import React from 'react';
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Volume',
    value: '$--',
    change: '+0.0%',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Active Traders',
    value: '--',
    change: '+0.0%',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Total Transactions',
    value: '--',
    change: '+0.0%',
    icon: Activity,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'TVL',
    value: '$--',
    change: '+0.0%',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className={`text-sm ${stat.color} mt-1`}>{stat.change}</p>
            </div>
            <div className={`p-3 ${stat.bgColor} rounded-lg`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}