"use client";

import { motion } from 'framer-motion';
import { Shield, Truck, RotateCcw, Phone, Leaf, Award } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: "Lifetime Craftsmanship Guarantee",
    description: "We stand behind every piece with our comprehensive warranty covering structural integrity and craftsmanship defects."
  },
  {
    icon: Truck,
    title: "White-Glove Delivery",
    description: "Professional delivery and setup service included. Our team ensures your furniture arrives in perfect condition."
  },
  {
    icon: RotateCcw,
    title: "30-Day Return Policy",
    description: "Not completely satisfied? Return any item within 30 days for a full refund or exchange."
  },
  {
    icon: Phone,
    title: "Expert Customer Support",
    description: "Our knowledgeable team is here to help with questions, care advice, and customization options."
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "All our wood comes from responsibly managed forests with proper certifications and environmental standards."
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Recognized by industry experts and design awards for our exceptional craftsmanship and innovation."
  }
];

const certifications = [
  {
    name: "FSC Certified",
    logo: "🌳",
    description: "Forest Stewardship Council"
  },
  {
    name: "GREENGUARD Gold",
    logo: "🏆",
    description: "Low Chemical Emissions"
  },
  {
    name: "ISO 14001",
    logo: "♻️",
    description: "Environmental Management"
  },
  {
    name: "CARB Compliant",
    logo: "✅",
    description: "California Air Resources"
  }
];

export function TrustSection() {
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
              Why Choose Royalwood?
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Four decades of dedication to quality, sustainability, and customer satisfaction 
              have made us a trusted name in handcrafted furniture.
            </p>
          </motion.div>
        </div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-4">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-800 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Certified Excellence
              </h3>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                Our commitment to quality and sustainability is validated by industry-leading certifications
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="text-center bg-white rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{cert.logo}</div>
                  <div className="font-bold text-amber-900 mb-1">{cert.name}</div>
                  <div className="text-sm text-amber-700">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Heritage */}
        <motion.div
          className="mt-20 grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              A Legacy of Excellence Since 1984
            </h3>
            <div className="space-y-4 text-amber-800 leading-relaxed">
              <p>
                Founded by master craftsman Robert Sterling, Royalwood began as a small workshop 
                with a simple mission: create furniture that would be treasured for generations.
              </p>
              <p>
                Today, we're proud to be a family-owned business that has grown while never 
                compromising on the values that built our reputation: exceptional craftsmanship, 
                sustainable practices, and genuine care for our customers.
              </p>
              <p>
                Every piece that leaves our workshop carries with it four decades of expertise, 
                innovation, and an unwavering commitment to quality that you can feel in every 
                grain of wood and every perfectly fitted joint.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Robert Sterling in the Royalwood workshop"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white rounded-2xl p-6 max-w-xs">
              <div className="font-bold text-lg mb-1">Robert Sterling</div>
              <div className="text-amber-100">Founder & Master Craftsman</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}