"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock chart data - in a real app, this would come from your analytics API
const mockData = [
  { month: 'Jan', revenue: 45000, orders: 28 },
  { month: 'Feb', revenue: 52000, orders: 32 },
  { month: 'Mar', revenue: 48000, orders: 29 },
  { month: 'Apr', revenue: 61000, orders: 38 },
  { month: 'May', revenue: 55000, orders: 34 },
  { month: 'Jun', revenue: 67000, orders: 42 },
];

export function AnalyticsChart() {
  const [activeTab, setActiveTab] = useState<'revenue' | 'orders'>('revenue');

  const maxValue = Math.max(...mockData.map(d => activeTab === 'revenue' ? d.revenue : d.orders));
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
        <div className="flex space-x-2">
          <Button
            variant={activeTab === 'revenue' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('revenue')}
            className={activeTab === 'revenue' ? 'bg-amber-600 hover:bg-amber-700' : ''}
          >
            Revenue
          </Button>
          <Button
            variant={activeTab === 'orders' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('orders')}
            className={activeTab === 'orders' ? 'bg-amber-600 hover:bg-amber-700' : ''}
          >
            Orders
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-amber-700 border-amber-300">
            {activeTab === 'revenue' ? 'Monthly Revenue' : 'Monthly Orders'}
          </Badge>
          <span className="text-sm text-gray-600">
            Last 6 months
          </span>
        </div>

        {/* Simple bar chart */}
        <div className="space-y-3">
          {mockData.map((data) => {
            const value = activeTab === 'revenue' ? data.revenue : data.orders;
            const percentage = (value / maxValue) * 100;
            
            return (
              <div key={data.month} className="flex items-center space-x-3">
                <div className="w-8 text-sm font-medium text-gray-600">
                  {data.month}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-xs font-medium text-white">
                      {activeTab === 'revenue' 
                        ? `$${(value / 1000).toFixed(0)}k` 
                        : value.toString()
                      }
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                ${(mockData.reduce((sum, d) => sum + d.revenue, 0) / 1000).toFixed(0)}k
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {mockData.reduce((sum, d) => sum + d.orders, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Orders</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                ${Math.round(mockData.reduce((sum, d) => sum + d.revenue, 0) / mockData.reduce((sum, d) => sum + d.orders, 0))}
              </div>
              <div className="text-sm text-gray-600">Avg Order Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}