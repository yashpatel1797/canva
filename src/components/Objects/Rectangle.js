import React from 'react';

const Rectangle = ({ object, onUpdateObject, isSelected }) => {
  const { id, width, height } = object;
  return <div className={`rectangle ${isSelected ? 'selected' : ''}`} style={{ width, height }} />;
};

export default Rectangle;