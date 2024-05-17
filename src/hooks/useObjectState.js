import { useState } from 'react';

export const useObjectState = (initialObjects = []) => {
  const [objects, setObjects] = useState(initialObjects);

  const handleCreateObject = (newObject) => {
    let x = 100, y = 10;

    while (objects.some(obj => obj.x === x && obj.y === y)) {
      y += 60;
    }
    setObjects([...objects, {...newObject, x, y }]);
  };

  const handleDeleteObject = (objectId) => {
    setObjects(objects.filter(obj => obj.id !== objectId));
  };

  const handleUpdateObject = (updatedObject) => {
    setObjects(objects.map(obj => (obj.id === updatedObject.id ? updatedObject : obj)));
  };

  return [objects, handleCreateObject, handleDeleteObject, handleUpdateObject];
};