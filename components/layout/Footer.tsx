"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Living Room', href: '/category/living-room' },
        { name: 'Bedroom', href: '/category/bedroom' },
        { name: 'Dining Room', href: '/category/dining-room' },
        { name: 'Office Furniture', href: '/category/office' },
        { name: 'Custom Orders', href: '/custom' },
        { name: 'Sale Items', href: '/sale' },
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Care Instructions', href: '/care' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      title: 'About Royalwood',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Wood Types', href: '/wood-types' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Gallery', href: '/gallery' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 border-t border-amber-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Royalwood
            </h3>
            <p className="text-amber-100 mb-8 text-lg">
              Get exclusive access to new collections, crafting stories, and special offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button className="bg-white text-amber-800 hover:bg-amber-50 font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-800">Royalwood</h2>
                <p className="text-xs text-amber-700">Handcrafted Excellence</p>
              </div>
            </div>
            
            <p className="text-amber-800 mb-6 leading-relaxed">
              Four decades of master craftsmanship, creating heirloom-quality furniture 
              from the world's finest woods.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <Award className="h-4 w-4 text-amber-600" />
                <span className="text-xs font-medium text-amber-800">40+ Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <span className="text-xs font-medium text-amber-800">★★★★★</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-amber-800">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-600" />
                <span>hello@royalwood.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-amber-600 mt-0.5" />
                <span>123 Craftsman Lane<br />Woodworker Valley, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-amber-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-amber-700 hover:text-amber-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-amber-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-amber-700 hover:text-amber-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-700 hover:text-amber-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-700 hover:text-amber-600">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-amber-700">
              <span>© 2024 Royalwood. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-amber-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-amber-600 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}