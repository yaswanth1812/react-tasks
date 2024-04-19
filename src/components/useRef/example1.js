import React, { useEffect, useRef } from 'react'

const RefExample1 = () => {
    const data = useRef(null);

    const submithandler = e =>{
        e.preventDefault();
        console.log(data.current.value)
    }
    useEffect(()=>{
        data.current.focus();
    },[]);

    
     
  return (
    <div>
      <form onSubmit={submithandler}>
        <input ref={data} type="text" placeholder='enter the data'></input>
             <br></br>

         <input type="submit"></input>    


      </form>

    </div>
  )
}

export default RefExample1
