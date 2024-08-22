import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const PriceSlider = ({ min, max, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (newRange) => {
    setRange(newRange);
    onChange(newRange);
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Filter by Price</h3>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={range}
        onChange={handleChange}
        value={range}
      />
      <div className="flex justify-between mt-2">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
};
