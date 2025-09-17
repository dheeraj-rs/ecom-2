"use client";

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$124,500',
    change: '+12.5%',
    changeType: 'increase',
    icon: DollarSign,
    description: 'vs last month'
  },
  {
    name: 'Orders',
    value: '89',
    change: '+8.2%',
    changeType: 'increase',
    icon: ShoppingCart,
    description: 'vs last month'
  },
  {
    name: 'Customers',
    value: '1,240',
    change: '+3.1%',
    changeType: 'increase',
    icon: Users,
    description: 'vs last month'
  },
  {
    name: 'Products',
    value: '156',
    change: '+2',
    changeType: 'increase',
    icon: Package,
    description: 'new this month'
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <span className="text-sm text-gray-500">{stat.description}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}