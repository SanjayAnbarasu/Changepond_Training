import React, { useState } from 'react';
import './App.css'; 

// import RahulComp from './components/RahulComp';
// import RojarComp from './components/RojarComp'; 
import RahulComp from './components/RahulComp';
// import CounterComp from './components/CounterComp';

// Existing imports
import ClassComp from './components/ClassComp';
import MyImagesComp from './components/MyImagesComp';
import ToggleComp from './components/task/ToggleComp';
import MultiToggleComp from './components/task/MultiToggleComp';
import ClickCountComp from './components/day3/clickCountComp';
import HoverCountComp from './components/day3/HoverCountComp';
import CompLifeCycle from './components/day3/CompLifeCycle';
import ToggleImage from './components/task/ToggleImage';
import RethuComp from './components/RethuComp';
import FunctionComp from './components/FunctionComp';

function App() {
  // const [first, setfirst] = useState(0);

  return (
    <div className="App">
      <div className='navbar'>
        
        <RahulComp 
          fname="sanjay" 
          lname="A" 
          email="sanjayanbaraasu2004@gmail.com" 
          contact="3412659087" 
          city="chennai" 
        />
        <hr />
        {/* <FunctionComp></FunctionComp> */}



        {/* <MyImagesComp />
        <ToggleComp />
        <MultiToggleComp />
        <ClickCountComp />
        <HoverCountComp /> 
        <ToggleImage />
        <RethuComp />
        <ClassComp /> */}
        {/* <CompLifeCycle newColor="Green" /> */}
<input type="text" name="username" placeholder="enter user name" />
        <img  title='AI generated image'src='C:\Vs_coding\Work_File\src\shared\images\cow.jpg'></img>
      </div> 
    </div>
  );
}

export default App;
