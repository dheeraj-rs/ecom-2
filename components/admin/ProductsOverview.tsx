"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Eye, Trash2, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Oak Dining Table',
    category: 'Dining Room',
    price: 2499,
    stock: 12,
    status: 'active',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Walnut Executive Desk',
    category: 'Office',
    price: 1899,
    stock: 8,
    status: 'active',
    image: 'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Cherry Bookshelf',
    category: 'Living Room',
    price: 899,
    stock: 0,
    status: 'out_of_stock',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Maple Coffee Table',
    category: 'Living Room',
    price: 649,
    stock: 15,
    status: 'active',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export function ProductsOverview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Products Overview</h3>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Price</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Stock</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="font-medium text-gray-900">{product.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{product.category}</td>
                <td className="py-4 px-4 font-semibold text-gray-900">
                  ${product.price.toLocaleString()}
                </td>
                <td className="py-4 px-4">
                  <span className={`font-medium ${
                    product.stock === 0 ? 'text-red-600' : 
                    product.stock < 10 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <Badge className={
                    product.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }>
                    {product.status === 'active' ? 'Active' : 'Out of Stock'}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}