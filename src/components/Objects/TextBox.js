import React, { useEffect, useRef, useState } from 'react';

const TextBox = ({ object, onUpdateObject, onDeleteObject, isSelected }) => {
  const { id, width, height, text } = object;

  const inputRef = useRef(null);
  const [, setIsEditing] = useState(false);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    onUpdateObject({ ...object, text: newText });
  };

  const adjustSize = (text) => {
    const input = inputRef.current;
    if (input) {
      input.style.width = 'auto';
      input.style.height = 'auto';
      const { scrollWidth, scrollHeight } = input;
      onUpdateObject({
        ...object,
        width: scrollWidth + 8,
        height: scrollHeight + 8,
      });
    }
  };

  const handleBlur = () => {
    if (text === '') {
      onDeleteObject(id);
    }
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    adjustSize(text);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [object]);

  return (
    <div
      className={`textbox ${isSelected ? 'selected' : ''}`}
      style={{
        width,
        height,
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={inputRef}
        className="textbox-input"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          boxSizing: 'border-box',
          padding: 0,
        }}
      />
    </div>
  );
};

export default TextBox;