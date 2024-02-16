// FoodResults.js
import React, { useState } from 'react';
import MealDialog from './MealDialog';

/**
 * Component to display search results for food/meals.
 * @param {Object} props - React component properties.
 * @param {Array} props.searchResults - Array of meal objects representing search results.
 * @returns {JSX.Element} - FoodResults component.
 */
const FoodResults = (props) => {

  // Destructuring props to get searchResults
  const { searchResults } = props;

  // State to manage the selected meal for modal
  const [selectedMeal, setSelectedMeal] = useState(null);

   /**
   * Function to open the modal and set the selected meal.
   * @param {Object} meal - Selected meal object.
   */
  const openModal = (meal) => setSelectedMeal(meal);
  const closeModal = () => setSelectedMeal(null);

  return (
    <>
      <div className="food-results" >
        {/* Mapping through search results to display each meal */}
        {searchResults.map((meal) => (
          <div key={meal.idMeal}>
            <h3 onClick={() => openModal(meal)}>{meal.strMeal}</h3>
            <img onClick={() => openModal(meal)} src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
      {/* Modal component to display detailed information about the selected meal */}
      <MealDialog meal={selectedMeal} onClose={closeModal} />
    </>
  );
};

export default FoodResults;
