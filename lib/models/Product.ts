import { ObjectId } from 'mongodb';

export interface WoodType {
  name: string;
  description: string;
  characteristics: string[];
  priceMultiplier: number; // Base price multiplier
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  weight: number;
  unit: 'cm' | 'in';
}

export interface PriceBreakdown {
  materialCost: number;
  laborCost: number;
  overhead: number;
  profit: number;
  total: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  woodType: WoodType;
  finish: string;
  priceAdjustment: number;
  stockQuantity: number;
  sku: string;
}

export interface Product {
  _id?: ObjectId;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string[];
  subcategory: string[];
  basePrice: number;
  priceBreakdown: PriceBreakdown;
  variants: ProductVariant[];
  dimensions: Dimensions;
  images: {
    main: string;
    gallery: string[];
    thumbnail: string;
  };
  video?: string;
  modelFile?: string; // 3D model file URL
  specifications: {
    woodType: string;
    finish: string;
    style: string;
    assemblyRequired: boolean;
    warranty: string;
    craftingTime: string; // e.g., "2-3 weeks"
  };
  features: string[];
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  availability: {
    inStock: boolean;
    stockQuantity: number;
    preOrder: boolean;
    estimatedDelivery: string;
  };
  ratings: {
    average: number;
    count: number;
    distribution: { [key: number]: number }; // 1-5 stars
  };
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  customizable: boolean;
}

export interface ProductReview {
  _id?: ObjectId;
  productId: ObjectId;
  userId: ObjectId;
  rating: number; // 1-5
  title: string;
  comment: string;
  images?: string[];
  verified: boolean; // Verified purchase
  helpful: number; // Helpful votes
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}