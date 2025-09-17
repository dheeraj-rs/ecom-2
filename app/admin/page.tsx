"use client";

import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DashboardStats } from '@/components/admin/DashboardStats';
import { RecentOrders } from '@/components/admin/RecentOrders';
import { ProductsOverview } from '@/components/admin/ProductsOverview';
import { AnalyticsChart } from '@/components/admin/AnalyticsChart';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your furniture business.
          </p>
        </div>

        <DashboardStats />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <AnalyticsChart />
          <RecentOrders />
        </div>

        <ProductsOverview />
      </div>
    </AdminLayout>
  );
}