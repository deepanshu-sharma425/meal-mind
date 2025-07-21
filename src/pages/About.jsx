import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Heart, Zap } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Nutritionist',
      bio: 'PhD in Nutrition Science with 15+ years of experience in personalized nutrition and metabolic health.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Michael Chen',
      role: 'AI Technology Lead',
      bio: 'Former Google AI researcher specializing in machine learning applications in healthcare and nutrition.',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Designer',
      bio: 'Award-winning UX designer passionate about creating intuitive health and wellness applications.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'David Kumar',
      role: 'Fitness Specialist',
      bio: 'Certified personal trainer and nutrition coach helping users integrate fitness with optimal nutrition.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const milestones = [
    { year: 'March 2024', event: 'Founded with mission to democratize nutrition science' },
    { year: 'August 2024', event: 'Launched AI-powered meal recommendation engine' },
    
    { year: 'December 2024', event: 'Introduced advanced biometric integration' },
    { year: 'January 2025', event: 'Expanded to personalized supplement recommendations' },
    { year: 'April 2025', event: 'Leading innovation in precision nutrition technology' },
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing{' '}
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Nutrition Science
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're on a mission to make personalized nutrition accessible to everyone through cutting-edge AI
              technology and evidence-based science.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to transform how people approach nutrition, we've grown into a leading platform that
              empowers millions to achieve their health goals.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-600 to-teal-600 h-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize personalized nutrition by combining cutting-edge AI technology with evidence-based
                nutritional science...
              </p>
            </motion.div>

    
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a world where everyone has access to personalized nutrition guidance...
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'User-Centric',
                description:
                  "Every decision we make prioritizes our users' health, privacy, and experience.",
              },
              {
                icon: Award,
                title: 'Evidence-Based',
                description: 'All recommendations are grounded in peer-reviewed research and clinical evidence.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: "We continuously push the boundaries of what's possible in personalized nutrition.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl inline-block mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate experts working together to revolutionize nutrition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
