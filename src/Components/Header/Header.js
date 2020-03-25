import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Header (){
  return(
    <div>
      <header>
        <div>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Luigi_emblem.svg/1024px-Luigi_emblem.svg.png" />
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