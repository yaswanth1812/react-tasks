import React from 'react'
import { useState } from 'react'

// const StateExample1 = () => {
//     const [Age,setAge] = useState(18)

//     const handleClick = ()=>{
//         setAge(Age+1)
//     }
//     const decrease = ()=>{
//         setAge(Age-1)
//     }

//     const zero =()=>{
//         setAge(0)
//     }
//   return (
//     <div>
//       My age is {Age}
//       <div>
//         <button onClick={handleClick}>
//             age
//         </button>
//       </div>
//       <div>
//         <button onClick={decrease}>
//             decrease
//         </button>
//       </div>
//       <div>
//         <button onClick={zero}>
//             null
//         </button>
//       </div>
//     </div>
//   )
// }

// export default StateExample1

const Example = ()=>{
  const[number,setNumber] = useState(0);


  const Increment = ()=>{
      
    setNumber(pnumber=>pnumber+1)       
  }
//  const Decrement = ()=>{
 
//   setNumber(pnumber=>pnumber-1)
  
//  }
 return(
  <>
  <button onClick={Increment}>Increment</button>
  {/* <h3>The increment number is : {number}</h3> */}

  {/* <button onClick={Decrement}>Decrement</button> */}
  <h3>The  number is : {number}</h3>
  </>
 )

}
export default Example
