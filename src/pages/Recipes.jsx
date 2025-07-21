import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Clock, Users, ChefHat, Heart, Star } from 'lucide-react';

export default function Recipes() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const searches = ['pizza', 'pasta', 'Dal', 'vegetarian', 'fish'];
      const promises = searches.map(term =>
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
          .then(res => res.json())
      );
      const results = await Promise.all(promises);
      const allMeals = results.flatMap(result => result.meals || []);
      const uniqueMeals = allMeals.filter((meal, index, self) =>
        index === self.findIndex(m => m.idMeal === meal.idMeal)
      ).slice(0, 12);
      setMeals(uniqueMeals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  // API search when user types
  useEffect(() => {
    if (!searchTerm.trim()) return; // don't call API on empty search

    const timeoutId = setTimeout(() => {
      searchRecipes(searchTerm);
    }, 500); // debounce for 500ms

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const searchRecipes = async (term) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : ''
        });
      }
    }
    return ingredients;
  };

  const estimateNutrition = (meal) => {
    const ingredients = getIngredients(meal);
    const baseCalories = ingredients.length * 50;
    return {
      calories: baseCalories + Math.floor(Math.random() * 200),
      protein: Math.floor(baseCalories / 20),
      carbs: Math.floor(baseCalories / 15),
      fat: Math.floor(baseCalories / 30),
      fiber: Math.floor(ingredients.length / 2),
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Recipe Discovery</h1>
          <p className="text-gray-600">Discover healthy recipes with detailed nutritional information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes by name, category, or cuisine..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal, index) => {
            const nutrition = estimateNutrition(meal);
            return (
              <motion.div
                key={meal.idMeal}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedMeal(meal)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                    >
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {meal.strCategory}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {meal.strMeal}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ChefHat className="h-4 w-4 mr-1" />
                    <span className="mr-4">{meal.strArea}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">30-45 min</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>4 servings</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-emerald-50 p-3 rounded-lg text-center">
                      <p className="text-lg font-bold text-emerald-600">{nutrition.calories}</p>
                      <p className="text-xs text-emerald-700">Calories</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg text-center">
                      <p className="text-lg font-bold text-teal-600">{nutrition.protein}g</p>
                      <p className="text-xs text-teal-700">Protein</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.8</span>
                    </div>
                    <Link to={`/recipe/${meal.idMeal}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-emerald-600 font-semibold hover:text-emerald-700"
                      >
                        View Recipe
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedMeal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMeal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedMeal.strMealThumb}
                  alt={selectedMeal.strMeal}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedMeal(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedMeal.strMeal}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-emerald-600">{estimateNutrition(selectedMeal).calories}</p>
                    <p className="text-emerald-700">Calories</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-teal-600">{estimateNutrition(selectedMeal).protein}g</p>
                    <p className="text-teal-700">Protein</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-600">{estimateNutrition(selectedMeal).carbs}g</p>
                    <p className="text-orange-700">Carbs</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {getIngredients(selectedMeal).map((item, index) => (
                      <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>{item.ingredient}</span>
                        <span className="text-gray-600">{item.measure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Instructions</h3>
                  <div className="prose prose-emerald max-w-none">
                    {selectedMeal.strInstructions.split('\r\n').map((step, index) =>
                      step.trim() && (
                        <p key={index} className="mb-3 text-gray-700 leading-relaxed">
                          {step}
                        </p>
                      )
                    )}
                  </div>
                </div>

                {selectedMeal.strYoutube && (
                  <div className="mt-6">
                    <a
                      href={selectedMeal.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Watch Video Tutorial
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
