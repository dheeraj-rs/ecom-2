"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  cartItemCount?: number;
  isAuthenticated?: boolean;
}

export function Header({ cartItemCount = 0, isAuthenticated = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Living Room', href: '/category/living-room' },
    { name: 'Bedroom', href: '/category/bedroom' },
    { name: 'Dining Room', href: '/category/dining-room' },
    { name: 'Office', href: '/category/office' },
    { name: 'Custom', href: '/custom' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-amber-100 text-sm text-amber-800">
          <div className="flex justify-between items-center">
            <span>✨ Handcrafted with 40+ years of expertise</span>
            <div className="hidden md:flex space-x-4">
              <Link href="/about" className="hover:text-amber-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors">
                Contact
              </Link>
              <Link href="/track-order" className="hover:text-amber-600 transition-colors">
                Track Order
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
                  Royalwood
                </h1>
                <p className="text-xs text-amber-700 -mt-1">Handcrafted Excellence</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search furniture, wood types, styles..."
                  className="pl-10 pr-4 py-2 w-full border-amber-200 focus:border-amber-400 focus:ring-amber-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              {/* Search - Mobile */}
              <Button variant="ghost" size="icon" className="lg:hidden text-amber-800 hover:text-amber-600">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="hidden sm:flex text-amber-800 hover:text-amber-600">
                <Heart className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="relative text-amber-800 hover:text-amber-600">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <motion.span 
                    className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" className="text-amber-800 hover:text-amber-600">
                <User className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-amber-800 hover:text-amber-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex mt-4 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-amber-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-amber-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-amber-200 mt-4 pt-4 space-y-2">
                  <Link href="/wishlist" className="block px-4 py-2 text-amber-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                    Wishlist
                  </Link>
                  <Link href="/account" className="block px-4 py-2 text-amber-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                    My Account
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}