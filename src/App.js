import React, { useRef } from 'react';
import CanvasContainer from './components/Canvas/CanvasContainer';
import Toolbar from './components/Toolbar/Toolbar';
import { CanvasProvider } from './contexts/CanvasContext';
import { ObjectProvider } from './contexts/ObjectsContext';
import './App.css';

const App = () => {
  const appRef = useRef(null);

  return (
    <div ref={appRef} className="app">
      <ObjectProvider>
        <CanvasProvider>
          <CanvasContainer />
          <Toolbar />
         </CanvasProvider>
      </ObjectProvider>
    </div>
  );
};

export default App;