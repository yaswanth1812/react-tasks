import React, { useState, useCallback } from 'react';
// import {ReactMemo} from 'react'

const ExampleCall = () => {
  const [count, setCount] = useState(0);
  const [age,setAge] = useState(18);

   const AgeIncrement=useCallback(()=>{
    
setAge(age+1)
console.log("age is rendering")

   },[age]);

  
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    console.log('count is rendering')
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent onIncrement={increment} />
      <ChildComponent onAgeIncrement={AgeIncrement}/>
    </div>
  );
};

const ChildComponent = ({ onIncrement,onAgeIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onAgeIncrement}>IncrementAge</button>
    </div>
  );
};

export default  ExampleCall;
