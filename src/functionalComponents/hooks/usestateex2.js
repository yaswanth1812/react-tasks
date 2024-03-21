// import { useState } from "react"

import { useState } from "react"




// const Example2=()=>{
// const[timer,setTimer]=useState(100)
// const handleTimer=()=>{
// setInterval(()=>{
// setTimer(time=>time-1)
// },1000)

// }
//     return(
//         <>
//         <h1>Timer value{timer}</h1>
//         <button onClick={handleTimer}>Start Timer</button>
        
        
//         </>
//     )
// }
// export default Example2







const Example22 =()=>{
const [timer,setTimer]=useState(100)
const handle=()=>{
    setInterval(()=>{
setTimer(time=>time-1)
    },1000)
}

    return(
        <>
        <h1>{timer}</h1>
        <button onClick={handle}>Start</button>
        </>
    )
}
export default Example22