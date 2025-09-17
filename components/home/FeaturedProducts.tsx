"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import Link from 'next/link';

// Mock featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Royal Oak Dining Table",
    slug: "royal-oak-dining-table",
    description: "Handcrafted solid oak dining table with live edge design",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    woodType: "White Oak",
    rating: 4.9,
    reviews: 127,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: 2,
    name: "Walnut Executive Desk",
    slug: "walnut-executive-desk",
    description: "Premium walnut executive desk with brass hardware",
    price: 1899,
    image: "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    woodType: "Black Walnut",
    rating: 4.8,
    reviews: 89,
    badge: "Featured",
    inStock: true
  },
  {
    id: 3,
    name: "Cherry Bookshelf",
    slug: "cherry-bookshelf",
    description: "Elegant cherry wood bookshelf with adjustable shelves",
    price: 899,
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    woodType: "Cherry",
    rating: 4.7,
    reviews: 65,
    inStock: true
  },
  {
    id: 4,
    name: "Maple Coffee Table",
    slug: "maple-coffee-table",
    description: "Modern maple coffee table with minimalist design",
    price: 649,
    originalPrice: 799,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    gallery: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    ],
    woodType: "Hard Maple",
    rating: 4.6,
    reviews: 43,
    badge: "Sale",
    inStock: true
  }
];

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="text-amber-700 border-amber-300 mb-4">
              Featured Collection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Handcrafted Masterpieces
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Discover our most beloved furniture pieces, each representing decades 
              of woodworking expertise and attention to detail.
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`${
                          product.badge === 'Sale' 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : product.badge === 'Bestseller'
                            ? 'bg-amber-600 hover:bg-amber-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        } text-white`}
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-col space-y-2">
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4 text-amber-700" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4 text-amber-700" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                      {product.woodType}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-amber-700 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-amber-900">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm text-green-600 font-medium">
                          Save ${(product.originalPrice - product.price).toLocaleString()}
                        </span>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-amber-300 text-amber-800 hover:bg-amber-100 px-8 py-4 text-lg"
          >
            <Link href="/collections">
              View All Collections
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}