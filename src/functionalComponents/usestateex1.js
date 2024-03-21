import React, { useState } from 'react';

const Example = () => {
   const [counter, setCounter] = useState(0);

   const handleIncrement = () => {
      setCounter(count => count + 1);
   };
    const decrease=()=>{
        setCounter(count=>count-1)
    }
    
    const minus = ()=>{
        setCounter(count=>0)
    }

   return (
      <>
         <h1>useState example</h1>
         <h3>Current counter value: {counter}</h3>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={decrease}>decrement</button>
         <button onClick={minus}>clear</button>
      </>
   );
};

export default Example;




// import { useState } from "react" 




// const Usestateexamp=()=>{
// const[counter, setCounter]=useState(0)

// const handincrement =()=>{
// setCounter(count=>count+1)
// }
//     return(
//         <>
//         <h1>Use state example</h1>
//         <h3>Current counter value{counter}</h3>
//         <button onClick={handincrement}>increment</button>
//         <button onClick={decrease}>decrement</button>
//         <button onClick={minus}>clear</button>
//         </>
//     )
// }
// export default Usestateexamp

