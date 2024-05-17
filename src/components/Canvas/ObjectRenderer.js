import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import Rectangle from '../Objects/Rectangle';
import TextBox from '../Objects/TextBox';
import { Rnd } from 'react-rnd';

const ObjectRenderer = ({ object, onUpdateObject, setSelectedObjectId, selectedObjectId, onDeleteObject }) => {
  const containerRef = useRef(null);

  const handleDrag = (event, data) => {
    onUpdateObject({ ...object, x: data.x, y: data.y });
  };

  const handleResize = (event, direction, ref, delta, position) => {
    const newWidth = ref.style.width;
    const newHeight = ref.style.height;
    const newX = position.x;
    const newY = position.y;

    onUpdateObject({
      ...object,
      width: parseFloat(newWidth),
      height: parseFloat(newHeight),
      x: newX,
      y: newY,
    });
  };

  const handleSelectObject = () => {
    setSelectedObjectId(object.id);
  };

  const renderObject = () => {
    switch (object.type) {
      case 'rectangle':
        return <Rectangle object={object} onUpdateObject={onUpdateObject} isSelected={selectedObjectId === object.id} />;
      case 'text':
        return <TextBox object={object} onUpdateObject={onUpdateObject} onDeleteObject={onDeleteObject} isSelected={selectedObjectId === object.id} />;
      default:
        return null;
    }
  };

  const isSelected = selectedObjectId === object.id;

  return (
    <Draggable defaultPosition={{ x: object.x, y: object.y }} onDrag={handleDrag}>
      <Rnd
        size={{ width: object.width, height: object.height }}
        position={{ x: object.x, y: object.y }}
        onDragStop={(e, d) => onUpdateObject({ ...object, x: d.x, y: d.y })}
        onResize={handleResize}
        bounds="parent"
        enableResizing={isSelected}
      >
        <div ref={containerRef} onClick={handleSelectObject} className="object-container">
          <div className={`object-border ${isSelected ? 'selected' : ''}`} />
          {renderObject()}
        </div>
      </Rnd>
    </Draggable>
  );
};

export default ObjectRenderer;