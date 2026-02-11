import React from 'react';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import SliderComp from './components/SliderComp';
import LoginComp from './Layout/LoginComp';
// import MultiToggleComp from './components/task/MultiToggleComp';

/**
import MyImagesComp from './components/MyImagesComp';
import ToggleComp from './components/task/ToggleComp';
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
          <FunctionComp 
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
          <ClassComp />
        </div>
        <SliderComp></SliderComp>
        <LoginComp></LoginComp>
        {/* <MultiToggleComp /> */}

        {/* 
        <div className="testing-area">
          <MyImagesComp />
          <ToggleComp />
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
