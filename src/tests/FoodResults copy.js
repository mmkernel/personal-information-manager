// FoodResults.js
import React, { useRef, useState } from 'react';

const FoodResults = (props) => {
  const { searchResults } = props;
  const [selectedMeal, setSelectedMeal] = useState(null);
  const dialogElement = useRef();

  const openModal = (meal) => {
    setSelectedMeal(meal);
    dialogElement.current.showModal();
  };

  const closeModal = () => {
    setSelectedMeal(null);
    dialogElement.current.close();
  };

  return (
    <>
      <div className="food-results" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {searchResults.map((meal) => (
          <div key={meal.idMeal}>
            <h3 onClick={() => openModal(meal)}>{meal.strMeal}</h3>
            <img onClick={() => openModal(meal)} src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
      <dialog ref={dialogElement} className="my-dialog">
        <button className="close" onClick={closeModal}>X</button>
        {selectedMeal && (
          <section>
            <h2>{selectedMeal.strMeal} Ingredients</h2>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                const ingredient = selectedMeal[`strIngredient${index}`];
                const measurement = selectedMeal[`strMeasure${index}`];

                if (ingredient && measurement) {
                  return <li key={index}>{`${measurement} ${ingredient}`}</li>;
                }

                return null;
              })}
            </ul>
            <iframe
              title="Recipe Video"
              width="560"
              height="315"
              src={selectedMeal.strYoutube.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </section>
        )}
      </dialog>
    </>
  );
};

export default FoodResults;
