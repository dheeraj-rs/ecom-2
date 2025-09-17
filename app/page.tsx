"use client";

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { CraftsmanshipSection } from '@/components/home/CraftsmanshipSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TrustSection } from '@/components/home/TrustSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header cartItemCount={0} isAuthenticated={false} />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <CraftsmanshipSection />
        <TestimonialsSection />
        <TrustSection />
      </main>
      
      <Footer />
    </div>
  );
}