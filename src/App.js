import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

//Custom components
import Home from './Routes/Home';

//css modules
// import styles from './css_modules/app.module.css';
import './css_modules/custom_style.css'

function App() {
  return (
    <div className='backgroundConic'>
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
