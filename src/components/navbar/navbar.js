import React from 'react'
import { Link } from 'react-router-dom'

function Navbars() {


    const LinkStyle={
        textDecoration:"none",
        color:"grey"
    }

    const ListStyle={
        margin:10,
        color:"red"
    }
  return(
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{ListStyle}}>
        <Link to={"/"} style={{LinkStyle}}>
        home
        </Link>
      </li>

      <li className="nav-item" style={{ListStyle}}>
        <Link to={"/about"} style={{LinkStyle}}>
        About
        </Link>
      </li>

      <li className="nav-item" style={{ListStyle}}>
        <Link to={"/contact"} style={{LinkStyle}}>
        contact
        </Link>
      </li>


      <li className="nav-item" style={{ListStyle}}>
        <Link to={"settings"} style={{LinkStyle}}>
        settings
        </Link>
      </li>
    </ul>
  </div>
</nav>


  )
}

export default Navbars
