import { useEffect, useState } from 'react';

export const useCanvasState = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoom = (event) => {
    const newZoomLevel = zoomLevel + (event.deltaY < 0 ? 0.1 : -0.1);
    setZoomLevel(newZoomLevel);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaX;
    event.currentTarget.scrollTop += event.deltaY;
  };

  const handleKeyDown = (event) => {
    const isInputFocused = document.activeElement.tagName === 'INPUT';
    if (!isInputFocused) {
      if (event.key === '=' || event.key === '+') {
        setZoomLevel(z => z + 0.1);
      } else if (event.key === '-') {
        setZoomLevel(z => z - 0.1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return [zoomLevel, handleZoom, handleScroll, handleKeyDown];
};