import { ObjectId } from 'mongodb';

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface User {
  _id?: ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: Date;
  avatar?: string;
  addresses: Address[];
  preferences: {
    newsletter: boolean;
    smsUpdates: boolean;
    preferredWoodTypes: string[];
    favoriteStyles: string[];
  };
  orderHistory: ObjectId[];
  wishlist: ObjectId[];
  cart: {
    items: Array<{
      productId: ObjectId;
      variantId: string;
      quantity: number;
      addedAt: Date;
      customizations?: Record<string, any>;
    }>;
    updatedAt: Date;
  };
  loyaltyPoints: number;
  totalSpent: number;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
  status: 'active' | 'inactive' | 'suspended';
  role: 'customer' | 'admin' | 'staff';
  emailVerified: boolean;
  twoFactorEnabled: boolean;
}