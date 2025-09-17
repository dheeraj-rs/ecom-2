"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    title: "Handcrafted Excellence",
    subtitle: "Four Decades of Master Craftsmanship",
    description: "Discover furniture that tells a story. Each piece is meticulously crafted from premium woods, built to become cherished heirlooms for generations.",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Explore Collection",
    ctaLink: "/collections"
  },
  {
    id: 2,
    title: "Custom Wood Furniture",
    subtitle: "Made Just for You",
    description: "Transform your vision into reality with our custom furniture service. Choose your wood, finish, and dimensions for truly unique pieces.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Start Custom Order",
    ctaLink: "/custom"
  },
  {
    id: 3,
    title: "Sustainable Crafting",
    subtitle: "Responsibly Sourced Materials",
    description: "We partner with certified sustainable forests, ensuring every piece of furniture contributes to environmental preservation.",
    image: "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Learn More",
    ctaLink: "/sustainability"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block text-amber-400 font-medium text-lg mb-4">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {heroSlides[currentSlide].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold group"
                    >
                      <Link href={heroSlides[currentSlide].ctaLink}>
                        {heroSlides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 text-lg font-semibold group"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Our Story
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-400 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 text-white z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-px h-12 bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}