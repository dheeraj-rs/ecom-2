import { getDatabase } from '../mongodb';
import { Product, ProductReview } from '../models/Product';
import { ObjectId } from 'mongodb';

export class ProductService {
  private async getCollection() {
    const db = await getDatabase();
    return db.collection<Product>('products');
  }

  async getAllProducts(filters?: {
    category?: string;
    priceRange?: { min: number; max: number };
    woodType?: string;
    inStock?: boolean;
    featured?: boolean;
    limit?: number;
    offset?: number;
    sortBy?: 'name' | 'price' | 'rating' | 'newest';
    sortOrder?: 'asc' | 'desc';
  }) {
    const collection = await this.getCollection();
    
    const query: any = { status: 'published' };
    
    if (filters?.category) {
      query.category = filters.category;
    }
    
    if (filters?.priceRange) {
      query.basePrice = {
        $gte: filters.priceRange.min,
        $lte: filters.priceRange.max
      };
    }
    
    if (filters?.woodType) {
      query['variants.woodType.name'] = filters.woodType;
    }
    
    if (filters?.inStock) {
      query['availability.inStock'] = true;
      query['availability.stockQuantity'] = { $gt: 0 };
    }
    
    if (filters?.featured) {
      query.featured = true;
    }

    let cursor = collection.find(query);
    
    // Sorting
    const sortField = filters?.sortBy || 'createdAt';
    const sortDirection = filters?.sortOrder === 'asc' ? 1 : -1;
    cursor = cursor.sort({ [sortField]: sortDirection });
    
    // Pagination
    if (filters?.offset) cursor = cursor.skip(filters.offset);
    if (filters?.limit) cursor = cursor.limit(filters.limit);
    
    return await cursor.toArray();
  }

  async getProductBySlug(slug: string) {
    const collection = await this.getCollection();
    return await collection.findOne({ 
      slug, 
      status: 'published' 
    });
  }

  async getProductById(id: string) {
    const collection = await this.getCollection();
    return await collection.findOne({ 
      _id: new ObjectId(id),
      status: 'published' 
    });
  }

  async getFeaturedProducts(limit: number = 8) {
    const collection = await this.getCollection();
    return await collection
      .find({ 
        status: 'published', 
        featured: true,
        'availability.inStock': true 
      })
      .limit(limit)
      .toArray();
  }

  async getRelatedProducts(productId: string, category: string[], limit: number = 4) {
    const collection = await this.getCollection();
    return await collection
      .find({
        _id: { $ne: new ObjectId(productId) },
        category: { $in: category },
        status: 'published',
        'availability.inStock': true
      })
      .limit(limit)
      .toArray();
  }

  async searchProducts(searchTerm: string, limit: number = 20) {
    const collection = await this.getCollection();
    return await collection
      .find({
        $text: { $search: searchTerm },
        status: 'published'
      })
      .limit(limit)
      .toArray();
  }

  async createProduct(product: Omit<Product, '_id'>) {
    const collection = await this.getCollection();
    const now = new Date();
    const newProduct: Product = {
      ...product,
      createdAt: now,
      updatedAt: now,
    };
    
    const result = await collection.insertOne(newProduct);
    return result.insertedId;
  }

  async updateProduct(id: string, updates: Partial<Product>) {
    const collection = await this.getCollection();
    return await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updates, 
          updatedAt: new Date() 
        } 
      }
    );
  }

  async getCategories() {
    const collection = await this.getCollection();
    const categories = await collection.distinct('category', { status: 'published' });
    const subcategories = await collection.distinct('subcategory', { status: 'published' });
    
    return {
      categories,
      subcategories
    };
  }
}

export const productService = new ProductService();