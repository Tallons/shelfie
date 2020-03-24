import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Header (){
  return(
    <div>
      <header>
        <div>
          <img className="logo" src="" />
          <span>SHELFIE</span>
        </div>
        <nav>
          <Link to="/">
          <span>Dashboard</span>
          </Link>
          <Link to="/add">
          <span>Add Inventory</span>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;