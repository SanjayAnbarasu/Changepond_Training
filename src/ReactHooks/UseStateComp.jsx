import React, { useState } from 'react'

const UseStateComp = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("sanjay");
  const [course, setCourse] = useState(["react", "js", "cs", "Math", "Python"])

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>State Management</h2>
      
      <p>Count: {count}</p>
      <button type='button' onClick={incrementCount}>Increment</button>
      <button type='button' onClick={decrementCount}>Decrement</button>
      <button type='button' onClick={resetCount}>Reset</button>

      <p>Name: {name}</p>
      <button type='button' onClick={() => setName("sanjay Anbarasu")}>Change Name</button>

      <ul>
        {
          course.map((value, index) => {
            return <li key={index}>{value}</li>
          })
        }
      </ul>
    
    </div>
  )
}

export default UseStateComp
