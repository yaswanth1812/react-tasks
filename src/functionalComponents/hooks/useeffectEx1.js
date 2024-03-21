

import { useEffect, useState } from "react"


const UseeffEx1 =()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    useEffect(()=>{
        document.title=`current count ${count}`
    },[count,count1])
    return(
        <>
        <h1>Use effect example 1</h1>
        <h1>current count is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>count++</button>
        <button onClick={()=>{setCount(count-1)}}>count--</button>

        <h1>Current count1 is {count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>count1++</button>
        <button onClick={()=>{setCount1(count1-1)}}>count1--</button>
        

        </>
    )
}
export default UseeffEx1