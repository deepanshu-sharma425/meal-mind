import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, ArrowRight, Zap, Target, Users, Brain, Sparkles } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: Target,
      title: 'Smart Calorie Tracking',
      description: 'Track your daily calories with AI-powered food recognition and detailed nutritional breakdowns.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Brain,
      title: 'AI Meal Planning',
      description: 'Get personalized meal plans based on your goals, preferences, and dietary restrictions.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Zap,
      title: 'Recipe Discovery',
      description: 'Discover healthy recipes with detailed nutritional information and cooking instructions.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      content: 'NutriTracker helped me lose 30 pounds and maintain a healthy lifestyle. The AI recommendations are spot-on!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Mike Chen',
      role: 'Professional Athlete',
      content: 'The detailed nutrition tracking and meal planning features are exactly what I needed for my training.',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emily Davis',
      role: 'Nutritionist',
      content: 'I recommend NutriTracker to all my clients. The accuracy and ease of use are unmatched.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >

      <section className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for recipes, ingredients, or nutrition info..."
              className="w-full pl-16 pr-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg bg-white/80 backdrop-blur-lg text-lg"
            />
          </motion.div>
        </div>
      </section>


      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
    
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <Sparkles className="h-8 w-8 text-emerald-600 mr-3" />
              <span className="text-emerald-600 font-semibold text-lg">AI-Powered Nutrition</span>
            </motion.div>
            
            <h1 className="text-6xl text-teal-600 lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your 
              <span className="block bg-teal-600  bg-clip-text text-transparent">
                Nutrition Journey
              </span>
            </h1>
            <p className="text-xl mb-10 text-gray-600 leading-relaxed max-w-lg">
              Track calories, discover healthy recipes, and get AI-powered meal plans 
              tailored to your goals. Start your path to better health today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/signup"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-2xl font-bold text-xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
              >
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Start Your Journey</h3>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg"
              />
              <textarea
                placeholder="Tell us about your nutrition goals..."
                rows={4}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Get Personalized Plan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Everything You Need for Better Nutrition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to track, plan, and optimize your nutrition with the power of AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white/20"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                AI-Powered Nutrition Intelligence
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our advanced AI analyzes your eating patterns, preferences, and goals to provide 
                personalized nutrition recommendations. Get insights that adapt to your lifestyle 
                and help you make better food choices every day.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors duration-300"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI Nutrition"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl"></div>
              </motion.div>
            </div>
          </motion.div>

    
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Meal Planning"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl"></div>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                Effortless Meal Planning & Tracking
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Simplify your nutrition journey with automated meal planning, barcode scanning, 
                and comprehensive food database. Track macros, calories, and nutrients with just 
                a few taps, making healthy eating convenient and sustainable.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/dashboard"
                  className="inline-flex items-center text-emerald-600 font-bold text-lg hover:text-emerald-700 transition-colors duration-300"
                >
                  Try Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

  
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who've transformed their nutrition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}