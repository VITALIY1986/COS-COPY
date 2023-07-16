import React, { useState } from 'react';

const PriceSlider = ({ initialMinPrice, initialMaxPrice, onPriceChange }) => {
  const [price, setPrice] = useState([initialMinPrice, initialMaxPrice]);

  const handlePriceChange = (event) => {
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
    onPriceChange(newPrice, initialMaxPrice);
  };

  return (
    <div className='bg-white mx-3 p-6 mt-10 rounded-lg'>
      <label htmlFor="price">Price:</label>
      <input
        type="range"
        id="price"
        min={initialMinPrice}
        max={initialMaxPrice}
        value={price}
        onChange={handlePriceChange}
      />

      <p>
        Price: {price}lei
      </p>
    </div>
  );
};

export default PriceSlider;