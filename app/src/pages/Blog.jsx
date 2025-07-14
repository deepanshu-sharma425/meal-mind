"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Heart, Share2 } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Science Behind AI-Powered Nutrition Recommendations',
      excerpt: 'Discover how machine learning algorithms analyze your dietary patterns to provide personalized nutrition guidance that adapts to your unique needs.',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Macronutrients: A Complete Guide',
      excerpt: 'Learn about proteins, carbohydrates, and fats - how they fuel your body and how to balance them for optimal health and performance.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Meal Prep Made Easy: Weekly Planning Strategies',
      excerpt: 'Transform your nutrition journey with effective meal prep techniques that save time, reduce stress, and ensure consistent healthy eating.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'The Role of Hydration in Athletic Performance',
      excerpt: 'Explore how proper hydration affects athletic performance, recovery, and overall health, with practical tips for staying optimally hydrated.',
      author: 'David Kumar',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Plant-Based Nutrition: Complete Protein Sources',
      excerpt: 'Comprehensive guide to getting complete proteins from plant-based sources, debunking myths and providing practical meal ideas.',
      author: 'Dr. Sarah Johnson',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Sleep and Nutrition: The Hidden Connection',
      excerpt: 'Uncover the bidirectional relationship between sleep quality and nutrition, and learn how to optimize both for better health.',
      author: 'Emily Rodriguez',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Health',
      image: 'https://images.pexels.com/photos/3808057/pexels-photo-3808057.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = ['All', 'Technology', 'Nutrition', 'Lifestyle', 'Sports', 'Health'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50"
    >
      {/* Place remaining sections here - same as in your original code */}
      {/* This structure is already React + Next.js compatible */}
    </motion.div>
  );
}
