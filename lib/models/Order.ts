import { ObjectId } from 'mongodb';
import { Address } from './User';

export interface OrderItem {
  productId: ObjectId;
  variantId: string;
  quantity: number;
  pricePerUnit: number;
  customizations?: Record<string, any>;
  productSnapshot: {
    name: string;
    image: string;
    woodType: string;
    finish: string;
  };
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
  tracking: boolean;
}

export interface Order {
  _id?: ObjectId;
  orderNumber: string;
  userId: ObjectId;
  items: OrderItem[];
  subtotal: number;
  shipping: {
    method: ShippingMethod;
    cost: number;
    address: Address;
    trackingNumber?: string;
  };
  tax: {
    rate: number;
    amount: number;
  };
  discounts: Array<{
    code: string;
    type: 'percentage' | 'fixed' | 'shipping';
    amount: number;
    description: string;
  }>;
  total: number;
  payment: {
    method: 'card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    stripePaymentIntentId?: string;
    transactionId?: string;
    paidAt?: Date;
  };
  status: 'pending' | 'confirmed' | 'processing' | 'crafting' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  timeline: Array<{
    status: string;
    description: string;
    timestamp: Date;
    note?: string;
  }>;
  notes: {
    customer?: string;
    internal?: string;
  };
  estimatedDelivery: Date;
  craftingStartDate?: Date;
  craftingCompletionDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}