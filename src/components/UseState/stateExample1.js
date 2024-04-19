import React from 'react'
import { useState } from 'react'

const StateExample1 = () => {
    const [Age,setAge] = useState(18)

    const handleClick = ()=>{
        setAge(Age+1)
    }
    const decrease = ()=>{
        setAge(Age-1)
    }

    const zero =()=>{
        setAge(0)
    }
  return (
    <div>
      My age is {Age}
      <div>
        <button onClick={handleClick}>
            age
        </button>
      </div>
      <div>
        <button onClick={decrease}>
            decrease
        </button>
      </div>
      <div>
        <button onClick={zero}>
            null
        </button>
      </div>
    </div>
  )
}

export default StateExample1
