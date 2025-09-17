"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Package, Truck } from 'lucide-react';

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Sarah Johnson',
    product: 'Royal Oak Dining Table',
    total: 2499,
    status: 'processing',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Michael Chen',
    product: 'Walnut Executive Desk',
    total: 1899,
    status: 'shipped',
    date: '2024-01-14'
  },
  {
    id: 'ORD-003',
    customer: 'Emily Rodriguez',
    product: 'Cherry Bookshelf',
    total: 899,
    status: 'delivered',
    date: '2024-01-13'
  },
  {
    id: 'ORD-004',
    customer: 'David Thompson',
    product: 'Maple Coffee Table',
    total: 649,
    status: 'pending',
    date: '2024-01-12'
  }
];

const statusConfig = {
  pending: { color: 'bg-yellow-100 text-yellow-800', icon: Package },
  processing: { color: 'bg-blue-100 text-blue-800', icon: Package },
  shipped: { color: 'bg-purple-100 text-purple-800', icon: Truck },
  delivered: { color: 'bg-green-100 text-green-800', icon: Package },
};

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <Button variant="outline" size="sm">
          View All Orders
        </Button>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-medium text-gray-900">{order.id}</p>
                <p className="text-sm text-gray-600">{order.customer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{order.product}</p>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-900">
                ${order.total.toLocaleString()}
              </span>
              
              <Badge className={statusConfig[order.status as keyof typeof statusConfig].color}>
                {order.status}
              </Badge>

              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}