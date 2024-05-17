import React, { useContext } from 'react';
import { ObjectContext } from '../../contexts/ObjectsContext';
import { createObject } from '../../utils/objectUtils';

const Toolbar = () => {
  const { handleCreateObject, handleDeleteObject, selectedObjectId } = useContext(ObjectContext);

  const handleCreateRectangle = () => {
    handleCreateObject(createObject('rectangle'));
  };

  const handleCreateTextBox = () => {
    handleCreateObject(createObject('text'));
  };

  const handleDeleteSelected = () => {
    if (selectedObjectId) {
      handleDeleteObject(selectedObjectId);
    }
  };

  return (
    <div className="toolbar">
      <button onClick={handleCreateRectangle}>Create Rectangle</button>
      <button onClick={handleCreateTextBox}>Create Text Box</button>
      <button onClick={handleDeleteSelected}>Delete</button>
    </div>
  );
};

export default Toolbar;