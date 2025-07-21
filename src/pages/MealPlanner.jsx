import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Plus, Clock, Users, ChefHat, Sparkles, ArrowRight, Target } from 'lucide-react';

export default function MealPlanner() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [generatingPlan, setGeneratingPlan] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  const sampleMealPlan = {
    Monday: {
      Breakfast: { name: 'Oatmeal with Berries', calories: 320, time: '15 min' },
      Lunch: { name: 'Quinoa Buddha Bowl', calories: 450, time: '20 min' },
      Dinner: { name: 'Grilled Salmon with Vegetables', calories: 520, time: '25 min' },
      Snacks: { name: 'Greek Yogurt with Nuts', calories: 180, time: '5 min' }
    },
    Tuesday: {
      Breakfast: { name: 'Avocado Toast with Eggs', calories: 380, time: '10 min' },
      Lunch: { name: 'Mediterranean Wrap', calories: 420, time: '15 min' },
      Dinner: { name: 'Chicken Stir-fry', calories: 480, time: '20 min' },
      Snacks: { name: 'Apple with Almond Butter', calories: 160, time: '2 min' }
    },
    Wednesday: {
      Breakfast: { name: 'Smoothie Bowl', calories: 350, time: '10 min' },
      Lunch: { name: 'Lentil Soup with Bread', calories: 400, time: '25 min' },
      Dinner: { name: 'Turkey Meatballs with Pasta', calories: 550, time: '30 min' },
      Snacks: { name: 'Mixed Berries', calories: 120, time: '2 min' }
    },
    Thursday: {
      Breakfast: { name: 'Chia Pudding', calories: 290, time: '5 min' },
      Lunch: { name: 'Grilled Chicken Salad', calories: 380, time: '15 min' },
      Dinner: { name: 'Vegetable Curry with Rice', calories: 460, time: '35 min' },
      Snacks: { name: 'Hummus with Vegetables', calories: 140, time: '5 min' }
    },
    Friday: {
      Breakfast: { name: 'Protein Pancakes', calories: 340, time: '20 min' },
      Lunch: { name: 'Sushi Bowl', calories: 440, time: '15 min' },
      Dinner: { name: 'Baked Cod with Sweet Potato', calories: 500, time: '40 min' },
      Snacks: { name: 'Trail Mix', calories: 200, time: '2 min' }
    },
    Saturday: {
      Breakfast: { name: 'Weekend Brunch Bowl', calories: 420, time: '25 min' },
      Lunch: { name: 'Caprese Sandwich', calories: 390, time: '10 min' },
      Dinner: { name: 'BBQ Lean Beef with Vegetables', calories: 580, time: '30 min' },
      Snacks: { name: 'Dark Chocolate and Nuts', calories: 180, time: '2 min' }
    },
    Sunday: {
      Breakfast: { name: 'French Toast (Healthy)', calories: 360, time: '20 min' },
      Lunch: { name: 'Roasted Vegetable Bowl', calories: 350, time: '45 min' },
      Dinner: { name: 'Herb-Crusted Chicken', calories: 520, time: '35 min' },
      Snacks: { name: 'Smoothie', calories: 160, time: '5 min' }
    }
  };

  const generateAIPlan = async () => {
    setGeneratingPlan(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratingPlan(false);
  };

  const preferences = [
    { label: 'Vegetarian', selected: false },
    { label: 'High Protein', selected: true },
    { label: 'Low Carb', selected: false },
    { label: 'Quick (< 15 min)', selected: true },
    { label: 'Budget Friendly', selected: false },
    { label: 'Long (> 30 min)', selected: false }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Meal Planner</h1>
          <p className="text-gray-600">Personalized meal plans tailored to your goals and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Generator */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-emerald-600 mr-2" />
                AI Generator
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateAIPlan}
                disabled={generatingPlan}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  generatingPlan
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                } text-white`}
              >
                {generatingPlan ? (
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Generating...
                  </div>
                ) : (
                  'Generate New Plan'
                )}
              </motion.button>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preferences</h3>
              <div className="space-y-3">
                {preferences.map((pref, i) => (
                  <label key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={pref.selected}
                      readOnly
                      className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{pref.label}</span>
                  </label>
                ))}
              </div>
            </div>

 
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-emerald-600 mr-2" />
                Daily Goals
              </h3>
              <div className="space-y-3">
                {['2000', '120', '250'].map((value, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {['Calories', 'Protein (g)', 'Carbs (g)'][index]}
                    </label>
                    <input
                      type="number"
                      value={value}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">


              {/* Week Info b */}

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">This Week's Plan</h2>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">Week of Jan 15-21, 2025</span>
                </div>
              </div>


              <div className="flex overflow-x-auto mb-6 border-b">
                {daysOfWeek.map((day, index) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(index)}
                    className={`flex-shrink-0 px-4 py-2 font-medium text-sm transition-colors ${
                      selectedDay === index
                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>

  
              <div className="space-y-4">
                {mealTypes.map((mealType) => {
                  const meal = sampleMealPlan[daysOfWeek[selectedDay]]?.[mealType];
                  return (
                    <motion.div
                      key={mealType}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-emerald-100 p-2 rounded-lg">
                            <ChefHat className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{mealType}</h3>
                            {meal && (
                              <div className="text-sm text-gray-600">
                                <p className="font-medium">{meal.name}</p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <span className="flex items-center">
                                    <Target className="h-3 w-3 mr-1" />
                                    {meal.calories} cal
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {meal.time}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {meal ? (
                            <Link to="/recipe">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-emerald-600 hover:text-emerald-700 flex items-center"
                              >
                                View Recipe
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </motion.button>
                            </Link>
                          ) : (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center px-3 py-1 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors"
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Add Meal
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

      
              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Daily Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <SummaryCard label="Total Calories" value="1,470" color="emerald" />
                  <SummaryCard label="Protein" value="89g" color="teal" />
                  <SummaryCard label="Carbs" value="165g" color="orange" />
                  <SummaryCard label="Fat" value="52g" color="purple" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function SummaryCard({ label, value, color }) {
  return (
    <div className="text-center">
      <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
