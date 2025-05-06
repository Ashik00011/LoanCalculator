import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <React.StrictMode>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AllRoutes darkMode={darkMode} />
      </Router>
    </React.StrictMode>
  );
}

export default App;
