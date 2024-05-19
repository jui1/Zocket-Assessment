import React, { useRef, useState, useEffect } from 'react';

import ColorPicker from './componet/ColorPicker';
import Canvas from './componet/Canvas';



const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#0369A1");
  const [textColor, setTextColor] = useState("#000000");

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <ColorPicker
          label="Background Color"
          color={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
        <ColorPicker
          label="Text Color"
          color={textColor}
          onChange={handleTextColorChange}
        />
      </div>
      <Canvas backgroundColor={backgroundColor} textColor={textColor} />
    </div>
  );
};

export default App;