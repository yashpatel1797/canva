import React, { createContext, useState } from 'react';
import { useCanvasState } from '../hooks/useCanvasState';

export const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const [zoomLevel, handleZoom, handleScroll, handleKeyDown] = useCanvasState();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <CanvasContext.Provider value={{ zoomLevel, handleZoom, handleScroll, cursorPosition, setCursorPosition, handleKeyDown }}>
      {children}
    </CanvasContext.Provider>
  );
};