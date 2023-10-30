import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import "./styles/style.css";
import { ContextProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </React.StrictMode>,
)
