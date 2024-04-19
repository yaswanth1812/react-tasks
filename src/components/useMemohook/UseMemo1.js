import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {
    const [counter, setCounter] = useState(0);
    const [number,setNumber] =useState(5);
    const Factorial = useMemo(()=>fact(number),[number])
  return (
    <div>
        <center>
            Factorial:{Factorial}
            <br/>
      <button onClick={()=>setCounter(counter+1)}>
        Counter Increment
      </button>
      <button onClick={()=>setNumber(number+1)}>
        Number Increment
      </button>
      <br>
      </br>
      counter:{counter}
      </center>
    </div>
  )
}

const fact = (n)=>{
    let answer =1;
    for(var i=n; i>=1; i--){
        answer =answer * i;
    }
    console.log('Factorial function calling');
    return answer;
}

export default UseMemo1
