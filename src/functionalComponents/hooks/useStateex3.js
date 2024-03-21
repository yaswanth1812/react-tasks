// import { useState } from "react"

import { useState } from "react"



// const Example3 =()=>{

//     const [fruits,setFruits]=useState(["apple","banana","watermelon"])

//     const addFruits=()=>{
//       const newlist=[...fruits,"new Fruit"]  
//       setFruits(newlist)
//     }
//     return(
//         <>
// <h1>fruits listing</h1>
// <button onClick={addFruits}>Add Fruits</button>
// <ol>

// {
//     fruits.map((eachFruit,index)=><li key={index} >{eachFruit}</li>)
// }
// </ol>
//         </>
//     )
// }

// export default Example3;
const Example33=()=>{

const [fruits,setFruits]=useState(["apple","bannana","Guava"])
const newFruit=()=>{
    const addfruit=[...fruits,"new-fruit-added"]
    setFruits(addfruit)

}

    return(
        <>
        <h1>fruits list</h1>
        <button onClick={newFruit}>add fruit</button>
        <ol>{
            fruits.map((eachFruit,index)=><li key={index}>{eachFruit}</li>)
        }
        </ol>
        </>
    )
}
export default Example33