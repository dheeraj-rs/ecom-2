"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    rating: 5,
    text: "The dining table we ordered from Royalwood exceeded all our expectations. The craftsmanship is absolutely stunning, and you can feel the quality in every detail. It's become the centerpiece of our home.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    furniture: "Royal Oak Dining Table",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Austin, TX",
    rating: 5,
    text: "Working with Royalwood on our custom office furniture was an incredible experience. They listened to our needs and created pieces that perfectly fit our space and style. The attention to detail is remarkable.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    furniture: "Custom Walnut Desk Set",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Denver, CO",
    rating: 5,
    text: "I've been a customer for over 10 years, and Royalwood continues to amaze me. The furniture looks as beautiful today as when we first received it. It's truly an investment in quality and craftsmanship.",
    image: "https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    furniture: "Cherry Bedroom Set",
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Portland, OR",
    rating: 5,
    text: "The delivery and setup process was flawless. The team was professional, careful with our home, and took the time to explain the care instructions. The bookshelf is absolutely gorgeous and fits perfectly.",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    furniture: "Live Edge Bookshelf",
    date: "December 2023"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-amber-700/30 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-amber-200 font-medium">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stories from Our Family
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Over four decades, we've had the privilege of creating furniture for 
              thousands of families. Here's what they have to say.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-white/95">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-amber-200 text-sm">
                      {testimonials[currentIndex].location}
                    </div>
                    <div className="text-amber-300 text-sm font-medium">
                      {testimonials[currentIndex].furniture}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-amber-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
            <div className="text-amber-200">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-amber-200">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">40+</div>
            <div className="text-amber-200">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}