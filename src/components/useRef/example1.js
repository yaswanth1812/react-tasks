import React, { useEffect, useRef } from 'react'

const RefExample1 = () => {
    const data = useRef(null);

    const submitHandler = e =>{
        e.preventDefault();
        console.log(data.current.value)
    }               
    useEffect(()=>{
        data.current.focus();
    },[data]);

    
     
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder='enter the data'></input>
             <br></br>

         <input type="submit"></input>    


      </form>

    </div>
  )
}

export default RefExample1
