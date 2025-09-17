"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Leaf, Clock } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: "40+",
    label: "Years of Excellence",
    description: "Four decades of master craftsmanship"
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Customers",
    description: "Families we've helped furnish their homes"
  },
  {
    icon: Leaf,
    value: "100%",
    label: "Sustainable Wood",
    description: "Responsibly sourced from certified forests"
  },
  {
    icon: Clock,
    value: "2-6",
    label: "Weeks Delivery",
    description: "Custom pieces crafted to perfection"
  }
];

const craftingSteps = [
  {
    step: 1,
    title: "Wood Selection",
    description: "We hand-select premium lumber from sustainable sources, ensuring each piece meets our exacting standards for grain, strength, and beauty."
  },
  {
    step: 2,
    title: "Expert Crafting",
    description: "Our master craftsmen use traditional techniques combined with modern precision tools to shape each piece with meticulous attention to detail."
  },
  {
    step: 3,
    title: "Finishing Touch",
    description: "Multiple coats of premium finishes protect and enhance the natural beauty of the wood, creating pieces built to last generations."
  },
  {
    step: 4,
    title: "Quality Assurance",
    description: "Every piece undergoes rigorous quality checks before leaving our workshop, ensuring it meets our standards of excellence."
  }
];

export function CraftsmanshipSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
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
              Our Craftsmanship
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Where Tradition Meets Excellence
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Every piece tells the story of skilled artisans who have dedicated their 
              lives to the art of woodworking, creating furniture that stands the test of time.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-4">
                <stat.icon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-amber-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-amber-700">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Crafting Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Master craftsman at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-amber-900">Master Craftsman</div>
                    <div className="text-sm text-amber-700">40+ Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {craftingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}