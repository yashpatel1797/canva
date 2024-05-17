import React, { createContext, useState } from 'react';
import { useObjectState } from '../hooks/useObjectState';

export const ObjectContext = createContext();

export const ObjectProvider = ({ children }) => {
  const [objects, handleCreateObject, handleDeleteObject, handleUpdateObject] = useObjectState([]);
  const [selectedObjectId, setSelectedObjectId] = useState(null);

  return (
    <ObjectContext.Provider value={{ objects, handleCreateObject, handleDeleteObject, handleUpdateObject, selectedObjectId, setSelectedObjectId }}>
      {children}
    </ObjectContext.Provider>
  );
};