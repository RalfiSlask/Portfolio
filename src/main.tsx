import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import "./styles/style.css";
import { ContextProvider } from './context/Context'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </ContextProvider>
  </React.StrictMode>,
)
