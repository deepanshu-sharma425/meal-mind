'use client';
import React, { useState } from "react";

const Ap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) return alert("Please enter a search term");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setMeals(data.meals || []); // handle no results
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };
  // the number of things that were there in the people was a bugger there  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🍽️ Search Meals</h2>

      <input
        type="text"
        placeholder="Enter meal name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleSearch} style={{ padding: "8px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {meals.length === 0 && <p>No meals found.</p>}

        {meals.map((meal) => (
          <div key={meal.idMeal} style={{ marginBottom: "20px" }}>
            <h3>{meal.strMeal}</h3>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <p>{meal.strArea} | {meal.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ap;
