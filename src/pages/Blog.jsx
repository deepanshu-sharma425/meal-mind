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
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/159832/book-reading-boy-kid-159832.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Nutrition 
              <br />
              
              <span className=" bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Expert insights, latest research, and practical tips to help you make informed 
              decisions about your nutrition and health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                      Featured
                    </span>
                    <span className="text-emerald-600 font-medium">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button> */}
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest in nutrition science and health</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                    >
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                    >
                      <Share2 className="h-4 w-4 text-gray-600 hover:text-emerald-500 transition-colors" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest nutrition insights, research updates, and healthy recipes 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
