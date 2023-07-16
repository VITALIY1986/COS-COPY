import React, { useState, useEffect } from 'react';

const SortByPrice = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState('price-asc');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div>
      <label htmlFor="sort-by-price">Sort by Price:</label>
      <select id="sort-by-price" value={sortBy} onChange={handleSortChange}>
        <option value="price-asc">Low to High</option>
        <option value="price-desc">High to Low</option>
      </select>
    </div>
  );
};

export default SortByPrice;