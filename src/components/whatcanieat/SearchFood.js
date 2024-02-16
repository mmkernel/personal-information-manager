import React from 'react'

const SearchFood = (props) => {
  return (
    <div className="search-food">
        <input
          type="text"
          value={props.searchTerm}
          onChange={props.handleInputChange}
          placeholder="Search for a meal..."
        />
        <button onClick={props.handleSearch}>Search</button>
    </div>
  )
}

export default SearchFood;