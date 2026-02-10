import React from 'react';
import './App.css';
import RahulComp from './components/RahulComp';
import FunctionComp from './components/FunctionComp';

/**
import ClassComp from './components/ClassComp';
import MyImagesComp from './components/MyImagesComp';
import ToggleComp from './components/task/ToggleComp';
import MultiToggleComp from './components/task/MultiToggleComp';
import ClickCountComp from './components/day3/clickCountComp';
import HoverCountComp from './components/day3/HoverCountComp';
import CompLifeCycle from './components/day3/CompLifeCycle';
import ToggleImage from './components/task/ToggleImage';
import RojarComp from './components/RojarComp'; 
import CounterComp from './components/CounterComp';
*/

function App() {
  return (
    <div className="app-layout">
      
      <header className="header-bar">
        <div className="profile-container">
          <RahulComp 
            fname="sanjay" 
            lname="A" 
            email="sanjayanbarasu2004@gmail.com" 
            contact="3412659087" 
            city="chennai" 
          />
        </div>
      </header>

      <main className="header-bar">
        <div className="view-card">
          <FunctionComp />
        </div>


        {/* 
        <div className="testing-area">
          <MyImagesComp />
          <ToggleComp />
          <MultiToggleComp />
          <ClickCountComp />
          <HoverCountComp /> 
          <ToggleImage />
          <CompLifeCycle newColor="Green" />
        </div> 
        */}
      </main>
    </div>
  );
}

export default App;
