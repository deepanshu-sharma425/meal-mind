"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Apple,
  Calendar,
  BarChart3,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null); // Removed TS type

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Nutrition Analysis',
      description: 'Advanced machine learning algorithms analyze your eating patterns and provide personalized recommendations.',
      features: ['Real-time nutritional analysis', 'Pattern recognition', 'Predictive modeling', 'Continuous learning'],
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/ai-nutrition' // Sample internal route
    },
    {
      icon: Target,
      title: 'Personalized Goal Setting',
      description: 'Set and track custom nutrition goals based on your health objectives, lifestyle, and preferences.',
      features: ['Custom calorie targets', 'Macro distribution', 'Progress tracking', 'Adaptive adjustments'],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/goals'
    },
    {
      icon: Apple,
      title: 'Smart Food Tracking',
      description: 'Effortlessly log meals with barcode scanning, photo recognition, and comprehensive food database.',
      features: ['Barcode scanning', 'Photo recognition', '500,000+ food database', 'Quick logging'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/food-tracking'
    },
    {
      icon: Calendar,
      title: 'Meal Planning & Recipes',
      description: 'Discover healthy recipes and create personalized meal plans that fit your schedule and preferences.',
      features: ['Weekly meal plans', 'Recipe suggestions', 'Shopping lists', 'Dietary restrictions'],
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/meal-plans'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain insights into your nutrition patterns with detailed analytics and progress reports.',
      features: ['Trend analysis', 'Nutritional insights', 'Progress reports', 'Health correlations'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Seamless mobile experience with offline capabilities and device integration.',
      features: ['Offline access', 'Device sync', 'Push notifications', 'Mobile optimization'],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/mobile'
    },
  ];

  const faqs = [
    {
      question: 'How accurate is the AI nutrition analysis?',
      answer: 'Our AI has been trained on millions of data points and maintains 95%+ accuracy for common foods. We continuously improve our models with user feedback and the latest nutritional research.'
    },
    {
      question: 'Can I use the app with dietary restrictions?',
      answer: 'Absolutely! Our platform supports all major dietary restrictions including vegetarian, vegan, gluten-free, keto, paleo, and more. You can set multiple restrictions and get personalized recommendations.'
    },
    {
      question: 'How does the meal planning feature work?',
      answer: 'Our AI creates personalized meal plans based on your goals, preferences, schedule, and dietary restrictions. Plans include recipes, shopping lists, and prep instructions.'
    },
    {
      question: 'Is my health data secure and private?',
      answer: 'Yes, we use enterprise-grade encryption and follow strict HIPAA compliance standards. Your data is never shared with third parties without your explicit consent.'
    },
    {
      question: 'Can I integrate with fitness trackers?',
      answer: 'Yes, we support integration with major fitness trackers and health apps including Apple Health, Google Fit, Fitbit, and more to provide a complete health picture.'
    },
    {
      question: 'What makes your platform different from other nutrition apps?',
      answer: 'Our AI-powered personalization, comprehensive food database, evidence-based recommendations, and seamless user experience set us apart from traditional calorie counting apps.'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive nutrition solutions powered by AI to help you achieve your health goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Nutrition Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to transform your nutrition journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedService === index ? 'border-emerald-500 shadow-xl' : 'border-gray-100'
                }`}
                onClick={() => setSelectedService(index)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      selectedService === index ? 'bg-emerald-600' : 'bg-gray-100'
                    }`}>
                      <service.icon className={`h-6 w-6 ${selectedService === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Optional: Add Link to service detail page */}
                  <div className="mt-4">
                    <Link to={service.link} className="text-emerald-600 hover:underline text-sm">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Service Details */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-600 p-4 rounded-xl">
                    {React.createElement(services[selectedService].icon, { className: 'h-8 w-8 text-white' })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 ml-4">
                    {services[selectedService].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{services[selectedService].description}</p>
                <div className="space-y-3">
                  {services[selectedService].features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
