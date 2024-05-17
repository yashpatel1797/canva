import React, { useContext } from 'react';
import { CanvasContext } from '../../contexts/CanvasContext';
import { ObjectContext } from '../../contexts/ObjectsContext';
import ObjectRenderer from './ObjectRenderer';

const CanvasContainer = () => {
  const { zoomLevel, onScroll, handleKeyDown } = useContext(CanvasContext);
  const { objects, handleUpdateObject, setSelectedObjectId, selectedObjectId, handleDeleteObject } = useContext(ObjectContext);

  return (
    <div
      onWheel={onScroll}
      onKeyDown={handleKeyDown}
      style={{
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'top left',
        position: 'absolute',
      }}
    >
      {objects.map((obj) => (
        <ObjectRenderer key={obj.id} object={obj} onUpdateObject={handleUpdateObject} setSelectedObjectId={setSelectedObjectId} selectedObjectId={selectedObjectId} onDeleteObject={handleDeleteObject} />
      ))}
    </div>
  );
};

export default CanvasContainer;