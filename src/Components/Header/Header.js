import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Header (){
  return(
    <div>
      <header>
        <img className="logo" src="" />
        SHELFIE
      </header>
      <nav>
        <Link to="/">
        <span>Dashboard</span>
        </Link>
        <Link to="/add">
        <span>Add Inventory</span>
        </Link>
      </nav>

    </div>
  )
}

export default Header;