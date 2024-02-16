// MealDialog.js
import React, { useRef, useEffect } from 'react';

/**
 * Modal component to display detailed information about a selected meal.
 * @param {Object} props - React component properties.
 * @param {Object} props.meal - Selected meal object.
 * @param {Function} props.onClose - Function to close the modal.
 * @returns {JSX.Element} - MealDialog component.
 */
const MealDialog = ({ meal, onClose }) => {
  // Ref for the dialog element
  const dialogElement = useRef();

  // Effect to show or close the modal based on the presence of a selected meal
  useEffect(() => {
    if (meal) {
      dialogElement.current.showModal();
    } else {
      dialogElement.current.close();
    }
  }, [meal]);

  const closeModal = () => onClose();

  return (
    <dialog ref={dialogElement} className='recipe-dialog' aria-label="Meal Recipe Dialog">
      <button className="close-recipe-dialog" onClick={closeModal} aria-label="Close Recipe Dialog">X</button>
      {meal && (
        // Section to display detailed information about the selected meal
        <section>
          <h2>{`${meal.strMeal} - (${meal.strArea})`} </h2>
          <div className="dialog-results">
            <div className="ingredients" aria-label="Ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {/* Mapping through ingredients and measurements */}
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                    const ingredient = meal[`strIngredient${index}`];
                    const measurement = meal[`strMeasure${index}`];

                    // Display ingredient with measurement if both are available
                    if (ingredient && measurement) {
                      return <li key={index}>{`${measurement} ${ingredient}`}</li>;
                    }

                    return null;
                  })}
                </ul>
            </div>
            {/* Instructions section */}
            <div className="instructions" aria-label="Instructions">
                <h3>Instructions</h3>
                {/* Displaying instructions */}
                <p>{meal.strInstructions}</p>
            </div>
          </div>
          {/* Embedded iframe for recipe video */}
          <iframe
            title="Recipe Video"
            width="560"
            height="315"
            src={meal.strYoutube.replace('watch?v=', 'embed/')}
            allowFullScreen
            aria-label="Recipe Video"
          ></iframe>
        </section>
      )}
    </dialog>
  );
};

export default MealDialog;
