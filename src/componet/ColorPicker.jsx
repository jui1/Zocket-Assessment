
import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ label, color, onChange }) => {
  return (
    <div>
      <label style={{ marginBottom: '10px' }}>{label}:</label>
      <ChromePicker color={color} onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
