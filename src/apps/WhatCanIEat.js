import React, { useState } from 'react';
import '../assets/css/WhatCanIEat.css';
import SearchFood from '../components/whatcanieat/SearchFood';
import FoodResults from '../components/whatcanieat/FoodResults';

const WhatCanIEat = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      // console.log(data);
      if (data.meals) {
        setSearchResults(data.meals);
        setNoResults(null);
      } else {
        setSearchResults([]);
        setNoResults('No recipe found 😞 Please try again.');
      }
    } catch (noResults) {
      console.error('Error fetching data:', noResults);
      setSearchResults([]);
      setNoResults('Error fetching data');
    }
  };

  return (
    <section>
      <h1>What Can I Eat</h1>
      <SearchFood
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
        />
      {noResults && <p>{noResults}</p>}
      <FoodResults
        searchResults={searchResults}
        />
    </section>
  );
};


export default WhatCanIEat;