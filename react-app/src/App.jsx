import React, { useState } from 'react'
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Card";

function App() {
  const [theme, setTheme] = useState('light');
  return (

    <div>

      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        
        <Card />
        
      </div>

      
    </div>

  )
}

export default App 