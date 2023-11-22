import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2); 
  };

  const decreaseFontSize = () => {
    if (fontSize > 2) {
      setFontSize(fontSize - 2); 
    }
  };

  return (
    <div>
      <button className= "btn" onClick={increaseFontSize}>Increase Font Size</button>
      <button className= "btn" onClick={decreaseFontSize}>Decrease Font Size</button>
      <p style={{ fontSize: `${fontSize}px` }}>Adjustable Text</p>
    </div>
  );
};

export default FontSizeAdjuster;
