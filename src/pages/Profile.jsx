'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Weight, Ruler, Calendar, Edit3, Save, X, Target, Activity, Heart, TrendingUp } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      setEditData(parsedData);
    } else {
 
      const mockUserData = {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        gender: "male",
        weight: 75,
        height: 175,
        activityLevel: "moderate",
        goal: "maintain",
        dietaryRestrictions: ["Vegetarian"],
        createdAt: new Date().toISOString()
      };
      setUserData(mockUserData);
      setEditData(mockUserData);
    }
  }, []);

  const calculateBMI = () => {
    if (!userData) return 0;
    const heightInMeters = userData.height / 100;
    return (userData.weight / (heightInMeters * heightInMeters));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600', bgColor: 'bg-blue-100', gradientFrom: 'from-blue-500', gradientTo: 'to-cyan-500' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600', bgColor: 'bg-green-100', gradientFrom: 'from-green-500', gradientTo: 'to-emerald-500' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600', bgColor: 'bg-yellow-100', gradientFrom: 'from-yellow-500', gradientTo: 'to-orange-500' };
    return { category: 'Obese', color: 'text-red-600', bgColor: 'bg-red-100', gradientFrom: 'from-red-500', gradientTo: 'to-pink-500' };
  };

  const getIdealWeightRange = () => {
    if (!userData) return { min: 0, max: 0 };
    const heightInMeters = userData.height / 100;
    const minWeight = 18.5 * heightInMeters * heightInMeters;
    const maxWeight = 24.9 * heightInMeters * heightInMeters;
    return { min: Math.round(minWeight), max: Math.round(maxWeight) };
  };

  const calculateCalorieNeeds = () => {
    if (!userData) return 0;
    
    // Mifflin-St Jeor Equation
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editData) {
      setUserData(editData);
      localStorage.setItem('userData', JSON.stringify(editData)); 
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editData) {
      setEditData({
        ...editData,
        [name]: name === 'age' || name === 'weight' || name === 'height' ? parseFloat(value) || 0 : value
      });
    }
  };

  const handleDietaryChange = (restriction) => {
    if (!editData) return;
    
    const updatedRestrictions = editData.dietaryRestrictions.includes(restriction)
      ? editData.dietaryRestrictions.filter(r => r !== restriction)
      : [...editData.dietaryRestrictions, restriction];
    
    setEditData({
      ...editData,
      dietaryRestrictions: updatedRestrictions
    });
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const bmi = calculateBMI();
  const bmiInfo = getBMICategory(bmi);
  const idealWeight = getIdealWeightRange();
  const dailyCalories = calculateCalorieNeeds();

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 
    'Keto', 'Paleo', 'Low-Carb', 'Halal', 'Kosher'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-gray-600">Manage your personal information and health metrics</p>
          

          <div className="flex justify-center space-x-6 mt-6">
            <Link to="/dashboard" className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/meal-plans" className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
              Meal Plans
            </Link>
            <Link to="/workouts" className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
              Workouts
            </Link>
            <Link to="/progress" className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
              Progress
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-10">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Personal Information</h2>
                {!isEditing ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEdit}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                  >
                    <Edit3 className="h-5 w-5 mr-2" />
                    Edit
                  </motion.button>
                ) : (
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSave}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                    >
                      <Save className="h-5 w-5 mr-2" />
                      Save
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCancel}
                      className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-2xl font-semibold hover:bg-gray-600 transition-all duration-300 shadow-lg"
                    >
                      <X className="h-5 w-5 mr-2" />
                      Cancel
                    </motion.button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editData?.name || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <User className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium">{userData.name}</span>
                    </div>
                  )}
                </div>

    
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                  <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-900 font-medium">{userData.email}</span>
                  </div>
                </div>

          
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Age</label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="age"
                      value={editData?.age || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <Calendar className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium">{userData.age} years</span>
                    </div>
                  )}
                </div>

     
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={editData?.gender || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <span className="text-gray-900 font-medium capitalize">{userData.gender}</span>
                    </div>
                  )}
                </div>

           
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Weight (kg)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="weight"
                      value={editData?.weight || ''}
                      onChange={handleChange}
                      step="0.1"
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <Weight className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium">{userData.weight} kg</span>
                    </div>
                  )}
                </div>

         
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Height (cm)</label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="height"
                      value={editData?.height || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <Ruler className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium">{userData.height} cm</span>
                    </div>
                  )}
                </div>

       
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Activity Level</label>
                  {isEditing ? (
                    <select
                      name="activityLevel"
                      value={editData?.activityLevel || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light</option>
                      <option value="moderate">Moderate</option>
                      <option value="active">Active</option>
                      <option value="very-active">Very Active</option>
                    </select>
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <Activity className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium capitalize">{userData.activityLevel.replace('-', ' ')}</span>
                    </div>
                  )}
                </div>


                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Goal</label>
                  {isEditing ? (
                    <select
                      name="goal"
                      value={editData?.goal || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="lose">Lose Weight</option>
                      <option value="maintain">Maintain Weight</option>
                      <option value="gain">Gain Weight</option>
                      <option value="muscle">Build Muscle</option>
                      <option value="health">Improve Overall Health</option>
                    </select>
                  ) : (
                    <div className="flex items-center px-4 py-4 bg-gray-50 rounded-2xl">
                      <Target className="h-6 w-6 text-gray-400 mr-3" />
                      <span className="text-gray-900 font-medium capitalize">
                        {userData.goal === 'lose' ? 'Lose Weight' :
                         userData.goal === 'maintain' ? 'Maintain Weight' :
                         userData.goal === 'gain' ? 'Gain Weight' :
                         userData.goal === 'muscle' ? 'Build Muscle' :
                         'Improve Overall Health'}
                      </span>
                    </div>
                  )}
                </div>
              </div>


              <div className="mt-10">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Dietary Restrictions</label>
                {isEditing ? (
                  <div className="grid grid-cols-3 gap-3">
                    {dietaryOptions.map((option) => (
                      <label key={option} className="flex items-center text-sm">
                        <input
                          type="checkbox"
                          checked={editData?.dietaryRestrictions.includes(option) || false}
                          onChange={() => handleDietaryChange(option)}
                          className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mr-3"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {userData.dietaryRestrictions.length > 0 ? (
                      userData.dietaryRestrictions.map((restriction) => (
                        <span
                          key={restriction}
                          className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {restriction}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 italic">No dietary restrictions</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

   
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
    
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-6 w-6 text-emerald-600 mr-3" />
                BMI Analysis
              </h3>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-emerald-600 mb-4">{bmi.toFixed(1)}</div>
                <div className={`text-lg font-bold ${bmiInfo.color} ${bmiInfo.bgColor} px-4 py-2 rounded-2xl inline-block`}>
                  {bmiInfo.category}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm bg-gray-50 p-4 rounded-2xl">
                  <span className="text-gray-600 font-medium">Current Weight:</span>
                  <span className="font-bold text-gray-900">{userData.weight} kg</span>
                </div>
                <div className="flex justify-between text-sm bg-gray-50 p-4 rounded-2xl">
                  <span className="text-gray-600 font-medium">Height:</span>
                  <span className="font-bold text-gray-900">{userData.height} cm</span>
                </div>
                <div className="flex justify-between text-sm bg-gray-50 p-4 rounded-2xl">
                  <span className="text-gray-600 font-medium">Ideal Weight Range:</span>
                  <span className="font-bold text-gray-900">{idealWeight.min} - {idealWeight.max} kg</span>
                </div>
              </div>
            </div>

      
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-teal-600 mr-3" />
                Daily Calorie Needs
              </h4>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-3">{dailyCalories}</div>
                <div className="text-sm text-gray-600 font-medium">calories per day</div>
              </div>
              <div className="mt-6 text-xs text-gray-500 bg-gray-50 p-4 rounded-2xl">
                Based on your age, gender, weight, height, and activity level using the Mifflin-St Jeor equation.
              </div>
            </div>

   
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">BMI Categories</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-2xl">
                  <span className="text-blue-600 font-medium">Underweight</span>
                  <span className="font-bold">&lt; 18.5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-2xl">
                  <span className="text-green-600 font-medium">Normal</span>
                  <span className="font-bold">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-2xl">
                  <span className="text-yellow-600 font-medium">Overweight</span>
                  <span className="font-bold">25.0 - 29.9</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-2xl">
                  <span className="text-red-600 font-medium">Obese</span>
                  <span className="font-bold">&ge; 30.0</span>
                </div>
              </div>
            </div>

           
            <div className={`bg-gradient-to-r ${bmiInfo.gradientFrom} ${bmiInfo.gradientTo} rounded-3xl shadow-xl p-8 text-white`}>
              <h4 className="text-xl font-bold mb-4">Personalized Health Tip</h4>
              <p className="text-sm leading-relaxed">
                {bmi < 18.5 ? 
                  "Consider consulting with a nutritionist to develop a healthy weight gain plan with nutrient-dense foods." :
                  bmi < 25 ?
                  "Great job maintaining a healthy weight! Continue with your balanced diet and regular exercise routine." :
                  bmi < 30 ?
                  "Focus on portion control and increasing physical activity. Small changes can make a big difference." :
                  "Consider consulting with a healthcare provider for a comprehensive weight management plan."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}