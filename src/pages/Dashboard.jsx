"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plus, Target, TrendingUp, Calendar,
  Apple, Droplets, Zap, Activity, X, Save
} from 'lucide-react';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [showMealForm, setShowMealForm] = useState(false);
  const [mealEntries, setMealEntries] = useState([]);
  const [dailyNutrition, setDailyNutrition] = useState({
    calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0
  });

  const [newMeal, setNewMeal] = useState({
    name: '', calories: '', protein: '', carbs: '', fat: '', fiber: '', type: 'Breakfast'
  });

  const [waterIntake, setWaterIntake] = useState(6);
  const waterGoal = 8;

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) setUserData(JSON.parse(storedUserData));

    const storedMeals = localStorage.getItem('mealEntries');
    if (storedMeals) {
      const meals = JSON.parse(storedMeals);
      setMealEntries(meals);
      calculateDailyNutrition(meals);
    }

    const storedWater = localStorage.getItem('waterIntake');
    if (storedWater) setWaterIntake(parseInt(storedWater));
  }, []);

  const calculateDailyNutrition = (meals) => {
    const today = new Date().toDateString();
    const todayMeals = meals.filter(meal => meal.date === today);

    const nutrition = todayMeals.reduce((total, meal) => ({
      calories: total.calories + meal.calories,
      protein: total.protein + meal.protein,
      carbs: total.carbs + meal.carbs,
      fat: total.fat + meal.fat,
      fiber: total.fiber + meal.fiber
    }), { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });

    setDailyNutrition(nutrition);
  };

  const handleMealSubmit = (e) => {
    e.preventDefault();

    const mealEntry = {
      id: Date.now().toString(),
      name: newMeal.name,
      calories: parseFloat(newMeal.calories) || 0,
      protein: parseFloat(newMeal.protein) || 0,
      carbs: parseFloat(newMeal.carbs) || 0,
      fat: parseFloat(newMeal.fat) || 0,
      fiber: parseFloat(newMeal.fiber) || 0,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: newMeal.type,
      date: new Date().toDateString()
    };

    const updatedMeals = [...mealEntries, mealEntry];
    setMealEntries(updatedMeals);
    localStorage.setItem('mealEntries', JSON.stringify(updatedMeals));
    calculateDailyNutrition(updatedMeals);

    setNewMeal({ name: '', calories: '', protein: '', carbs: '', fat: '', fiber: '', type: 'Breakfast' });
    setShowMealForm(false);
  };

  const deleteMeal = (mealId) => {
    const updatedMeals = mealEntries.filter(meal => meal.id !== mealId);
    setMealEntries(updatedMeals);
    localStorage.setItem('mealEntries', JSON.stringify(updatedMeals));
    calculateDailyNutrition(updatedMeals);
  };

  const addWater = () => {
    const newWaterIntake = waterIntake + 1;
    setWaterIntake(newWaterIntake);
    localStorage.setItem('waterIntake', newWaterIntake.toString());
  };

  const removeWater = () => {
    if (waterIntake > 0) {
      const newWaterIntake = waterIntake - 1;
      setWaterIntake(newWaterIntake);
      localStorage.setItem('waterIntake', newWaterIntake.toString());
    }
  };

  const getCalorieGoal = () => {
    if (!userData) return 2000;

    let bmr;
    if (userData.gender === 'male') {
      bmr = 88.362 + (13.397 * userData.weight) + (4.799 * userData.height) - (5.677 * userData.age);
    } else {
      bmr = 447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * userData.age);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      'very-active': 1.9
    };

    return Math.round(bmr * activityMultipliers[userData.activityLevel]);
  };

  const calorieGoal = getCalorieGoal();
  const progressPercentage = (dailyNutrition.calories / calorieGoal) * 100;
  const waterPercentage = (waterIntake / waterGoal) * 100;

  const todayMeals = mealEntries.filter(meal => meal.date === new Date().toDateString());

  const weeklyProgress = [
    { day: 'Mon', calories: 1800 },
    { day: 'Tue', calories: 2100 },
    { day: 'Wed', calories: 1950 },
    { day: 'Thu', calories: 2200 },
    { day: 'Fri', calories: 1850 },
    { day: 'Sat', calories: 2050 },
    { day: 'Sun', calories: dailyNutrition.calories }
  ];

  const maxCalories = Math.max(...weeklyProgress.map(day => day.calories));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Welcome back, {userData?.name || 'User'}!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your nutrition journey and achieve your health goals with AI-powered insights
            </p>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Calories Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{dailyNutrition.calories}</p>
                <p className="text-sm text-gray-500">of {calorieGoal} goal</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{Math.round(progressPercentage)}% of daily goal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Water Intake</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{waterIntake}</p>
                <p className="text-sm text-gray-500">of {waterGoal} glasses</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg">
                <Droplets className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="relative mb-4">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${waterPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addWater}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-3 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
              >
                +1 Glass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={removeWater}
                className="flex-1 bg-gray-500 text-white py-2 px-3 rounded-xl text-sm font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg"
              >
                -1 Glass
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Protein</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{dailyNutrition.protein}g</p>
                <p className="text-sm text-gray-500">daily intake</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Carbs</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{dailyNutrition.carbs}g</p>
                <p className="text-sm text-gray-500">daily intake</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Meals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Today's Meals</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMealForm(true)}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Log Meal
                </motion.button>
              </div>

              <div className="space-y-4">
                {todayMeals.length > 0 ? (
                  todayMeals.map((meal) => (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-gray-200"
                    >
                      <div className="flex items-center">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-2xl mr-4 shadow-lg">
                          <Apple className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{meal.name}</h3>
                          <p className="text-sm text-gray-600 font-medium">{meal.type} • {meal.time}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fat}g | Fiber: {meal.fiber}g
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex items-center space-x-4">
                        <div>
                          <p className="font-bold text-gray-900 text-xl">{meal.calories}</p>
                          <p className="text-sm text-gray-500">calories</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => deleteMeal(meal.id)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all duration-300"
                        >
                          <X className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Apple className="h-12 w-12 text-gray-400" />
                    </div>
                    <p className="text-lg font-medium">No meals logged today</p>
                    <p className="text-sm mt-2">Start by adding your first meal to track your nutrition!</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Weekly Progress & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8"
          >
            {/* Weekly Progress */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Progress</h3>
              <div className="flex items-end justify-between h-40 mb-6">
                {weeklyProgress.map((day, index) => (
                  <div key={day.day} className="flex flex-col items-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.calories / maxCalories) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-xl w-8 shadow-lg"
                    ></motion.div>
                    <span className="text-xs text-gray-600 mt-3 font-medium">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-emerald-50 p-4 rounded-2xl">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                <span className="font-medium">
                  Average: {Math.round(weeklyProgress.reduce((sum, day) => sum + day.calories, 0) / 7)} calories/day
                </span>
              </div>
            </div>

            {/* Nutrition Summary */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Nutrition</h3>
              <div className="space-y-4">
                {[
                  { label: 'Calories', value: dailyNutrition.calories, color: 'from-emerald-500 to-teal-500' },
                  { label: 'Protein', value: `${dailyNutrition.protein}g`, color: 'from-orange-500 to-red-500' },
                  { label: 'Carbs', value: `${dailyNutrition.carbs}g`, color: 'from-purple-500 to-pink-500' },
                  { label: 'Fat', value: `${dailyNutrition.fat}g`, color: 'from-yellow-500 to-orange-500' },
                  { label: 'Fiber', value: `${dailyNutrition.fiber}g`, color: 'from-green-500 to-emerald-500' }
                ].map((item, index) => (
                  <div key={item.label} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} mr-3`}></div>
                      <span className="text-gray-700 font-medium">{item.label}:</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                {[
                  { to: '/recipes', icon: Apple, label: 'Browse Recipes', color: 'from-emerald-500 to-teal-500' },
                  { to: '/meal-planner', icon: Calendar, label: 'Plan Meals', color: 'from-blue-500 to-cyan-500' },
                  { to: '/profile', icon: Target, label: 'Update Goals', color: 'from-purple-500 to-pink-500' }
                ].map((action) => (
                  <Link
                    key={action.to}
                    to={action.to}
                    className={`flex items-center p-4 bg-gradient-to-r ${action.color} rounded-2xl hover:shadow-lg transition-all duration-300 group`}
                  >
                    <action.icon className="h-6 w-6 text-white mr-4" />
                    <span className="font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                      {action.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Meal Logging Modal */}
      {showMealForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowMealForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Log New Meal</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMealForm(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            <form onSubmit={handleMealSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Meal Name</label>
                <input
                  type="text"
                  value={newMeal.name}
                  onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="e.g., Grilled Chicken Salad"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Meal Type</label>
                <select
                  value={newMeal.type}
                  onChange={(e) => setNewMeal({ ...newMeal, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Calories</label>
                  <input
                    type="number"
                    value={newMeal.calories}
                    onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Protein (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newMeal.protein}
                    onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Carbs (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newMeal.carbs}
                    onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fat (g)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newMeal.fat}
                    onChange={(e) => setNewMeal({ ...newMeal, fat: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fiber (g)</label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeal.fiber}
                  onChange={(e) => setNewMeal({ ...newMeal, fiber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="0"
                />
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowMealForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Log Meal
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
