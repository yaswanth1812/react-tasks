
import React, { useContext } from 'react'
import Navbars from '../components/navbar/navbar'
import { MessageInfo } from '../navigation/navigation1'


function HomeScreen () {

  const messageContent = useContext(MessageInfo)
  const{Message, messageChanger} = messageContent
  return (
    <div>
      <Navbars/>
      <h2>{Message}</h2>
      <button onClick={ messageChanger}>click to change</button>
    </div>
  )
}

export default HomeScreen
