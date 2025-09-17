"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: "Living Room",
    href: "/category/living-room",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Sofas, coffee tables, and entertainment centers",
    productCount: 156
  },
  {
    name: "Bedroom",
    href: "/category/bedroom",
    image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Beds, dressers, and nightstands",
    productCount: 98
  },
  {
    name: "Dining Room",
    href: "/category/dining-room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Tables, chairs, and storage solutions",
    productCount: 84
  },
  {
    name: "Office",
    href: "/category/office",
    image: "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Desks, chairs, and organizational furniture",
    productCount: 67
  },
  {
    name: "Outdoor",
    href: "/category/outdoor",
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Weather-resistant outdoor furniture",
    productCount: 43
  },
  {
    name: "Custom",
    href: "/custom",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Personalized furniture made to order",
    productCount: "∞"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              From living spaces to custom creations, find the perfect furniture 
              for every corner of your home.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Category Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Product Count Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-amber-800">
                        {category.productCount} items
                      </span>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-amber-300 font-medium group-hover:text-amber-200 transition-colors">
                      <span className="mr-2">Explore Collection</span>
                      <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}