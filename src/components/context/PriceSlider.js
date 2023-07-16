import React, { useState } from 'react';

const PriceSlider = ({ initialMinPrice, initialMaxPrice, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value);
    setMinPrice(newMinPrice);
    onPriceChange(newMinPrice, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
    onPriceChange(minPrice, newMaxPrice);
  };

  return (
    <div className='bg-white mx-3 p-6 mt-10 rounded-lg'>
      <div>
      <label htmlFor="min-price">Min Price:</label>
      <input
        type="range"
        id="min-price"
        min={initialMinPrice}
        max={initialMaxPrice}
        value={minPrice}
        onChange={handleMinPriceChange}
      />

     

   
<span> {minPrice} lei</span>
</div>
<div>
      <label htmlFor="max-price ">Max Price:</label>
      <input
        type="range"
        id="max-price"
        min={initialMinPrice}
        max={initialMaxPrice}
        value={maxPrice}
        onChange={handleMaxPriceChange}
      /> <span>
        {maxPrice} lei</span>
        </div>   
    </div>
  );
};

export default PriceSlider;