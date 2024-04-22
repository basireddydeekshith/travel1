import React, { useState } from 'react';

function RangeInput() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value); 
  };

  return (
    <div>
      <label htmlFor="customRange1" className="form-label">Example range</label>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        min="0"
        max="100"
        value={value}
        onChange={handleChange} 
      />
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={handleChange} 
      />
    </div>
  );
}

export default RangeInput;
